import { router, socket } from '../routes.js'; // Importando router y socket

export default function Email() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Congratulations!</h1>
        <p>You have helped Mug! To claim your coupon, both participants need to fill out the following form:</p>

        <form id="claimForm">
            <div>
                <label for="name1">Name (Player 1):</label>
                <input type="text" id="name1" name="name1">
            </div>
            <br>
            <div>
                <label for="name2">Name (Player 2):</label>
                <input type="text" id="name2" name="name2">
            </div>
            <br>
            <button type="submit" id="submitForm">Submit</button>
        </form>

        <button id="nextPage">Go to QR Page</button>
    `;

	document.getElementById('nextPage').addEventListener('click', () => {
		socket.emit('changeScreen'); // Emitiendo el evento 'changeScreen' al servidor
	});

	// Escuchar el evento 'navigateTo' y navegar a la página recibida
	socket.on('navigateTo', (screensQR) => {
		router.navigateTo(screensQR); // Navegar a la página enviada por el servidor
	});
}
