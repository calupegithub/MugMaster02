import { router, socket } from '../routes.js';

export default function tutorialPage() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Tutorial</h1>
        <p>Oprime las flechas cuando sea el momento correcto para evitar que Mug derrama el vaso de café starbucks y gana un cupón para un combo para dos personas</p>
        <button id="nextPage"> Correcto! </button>
    `;

	document.getElementById('nextPage').addEventListener('click', () => {
		console.log('emited');
		socket.emit('event1', { message: 'Un nuevo juego ha empezado' });
		router.navigateTo('/screen3');
	});

	socket.on('navigateTo', (screen) => {
		console.log('navigateTo' + screen);
		router.navigateTo(screen);
	});
}
