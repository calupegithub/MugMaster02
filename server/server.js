// const { createServer } = require("http");

// const app = require("./app.js");
// const { initSocket } = require("./socket.js");

// const httpServer = createServer(app) // Explicity creates an HTTP server from the Express app

// // Initialize Socket.IO
// initSocket(httpServer);

// httpServer.listen(5050, () => console.log("server starting 🚀🆙✔ on http://localhost:5050"));

const express = require('express');
const { createServer } = require('http');
const { initSocket, getIO } = require('./socket.js');
const { SerialPort, ReadlineParser } = require('serialport');
const { changeScreen } = require('./events-server/events-server.js');

const app = express();
let lastButtonPressed = '';

//Leer datos del Arduino
const port = new SerialPort({ path: 'COM4', baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

let paginaActual = 'landingPage';

parser.on('data', (data) => {
	console.log(`Datos recibidos del Arduino: ${data}`);
	try {
		const buttonData = JSON.parse(data.trim());
		if ('flecha' in buttonData) {
			if (paginaActual === 'landingPage') {
				getIO().emit('navigateTo', 'tutorialPage');
				paginaActual = 'tutorialPage';
				return;
			}

			if (paginaActual === 'tutorialPage') {
				getIO().emit('navigateTo', 'loadPage');
				paginaActual = 'loadPage';
				return;
			}

			console.log('Botones procesados:', buttonData);
		}
	} catch (err) {
		console.error('Error al parsear JSON:', err);
	}
});

// Endpoint para recibir los datos del Arduino
app.post('/button', (req, res) => {
	const button = req.query.button; // Leer el parámetro 'button' de la URL
	if (button) {
		lastButtonPressed = button; // Actualizar el último botón presionado
		console.log('Botón presionado:', button);
		res.json({ status: 'success', button });
	} else {
		res.status(400).json({ status: 'error', message: 'No button provided' });
	}
});

// Endpoint para que Visual Studio consulte qué botón fue presionado
app.get('/lastButton', (req, res) => {
	res.json({ lastButtonPressed });
});

const httpServer = createServer(app);

// Inicializar Socket.IO
initSocket(httpServer);

// Iniciar el servidor en el puerto 5050
httpServer.listen(5050, () => console.log('server starting 🚀🆙✔ on http://localhost:5050'));
