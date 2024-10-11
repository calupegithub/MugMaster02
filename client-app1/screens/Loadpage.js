import { router, socket } from "../routes.js";

export default function loadPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Load page</h1>
        <p>3...</p>
        <button id="nextPage"> > </button>
    `;

  document.getElementById("nextPage").addEventListener("click", () => {
    router.navigateTo("/screen4");
  });
}
