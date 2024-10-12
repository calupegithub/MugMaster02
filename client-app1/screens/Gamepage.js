import { router, socket } from "../routes.js";

// socket.on para escuchar el server

export default function gamePage() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Game</h1>
        <p>*inserte a Mug y los triangulos*</p>
        <button id="winPage"> :) </button>
        <button id="losePage"> :( </button>
    `;

  document.getElementById("winPage").addEventListener("click", () => {
    router.navigateTo("/screen5");
    // socket.emit("event2");
  });

 document.getElementById("losePage").addEventListener("click", () => {
  router.navigateTo("/screen6");
  // socket.emit("event2");
});

}
 
