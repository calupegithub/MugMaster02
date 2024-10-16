import { router, socket } from '../routes.js'; // Importing router and socket

export default function Landingform() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <h1>Congratulations!</h1>
        <p>You have helped Mug! To claim your coupon, both participants need to fill out the following form:</p>

        <form id="claimForm">
            <div>
                <label for="name1">Name (Player 1):</label>
                <input type="text" id="name1" name="name1" required>
            </div>
            <br>
            <div>
                <label for="name2">Name (Player 2):</label>
                <input type="text" id="name2" name="name2" required>
            </div>
            <br>
            <button type="submit" id="submitForm">Submit</button>
        </form>

        <button id="nextPage">Go to QR Page</button>
    `;

	// Handle form submission
	document.getElementById('claimForm').addEventListener('submit', (event) => {
		event.preventDefault(); // Prevent the default form submission

		const name1 = document.getElementById('name1').value;
		const name2 = document.getElementById('name2').value;

		// Emit names to the server or handle as needed
		socket.emit('submitNames', { name1, name2 });

		alert(`Names submitted: ${name1}, ${name2}`);
	});

	document.getElementById('nextPage').addEventListener('click', () => {
		socket.emit('changeScreen');
		router.navigateTo('/Consume');
	});

	// Listen for 'navigateTo' event and navigate to the received page
	// socket.on('navigateTo', (screensQR) => {
	// 	router.navigateTo(screensQR); // Navigate to the page sent by the server
	// });
}
