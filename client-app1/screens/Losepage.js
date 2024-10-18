import { router } from "../routes.js";
import socket from "../socket.js";

export default function losePage() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Han perdido :c </h1>
        <p>Pueden volver a competir o retirarse</p>
        <button id="backPage"> Volver a intentar </button>
        <button id="nextPage"> Salir </button>
    `;

  document.getElementById("backPage").addEventListener("click", () => {
    router.navigateTo("/screen4");
    // socket.emit("event2");
  });

  
  document.getElementById("nextPage").addEventListener("click", () => {
    router.navigateTo("/screen1");
    // socket.emit("event2");
  });

}