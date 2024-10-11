import landingPage from "./screens/Landingpage.js"
import tutorialPage from "./screens/tutorial.js"
import loadPage from "./screens/Loadpage.js"
import gamePage from "./screens/Gamepage.js"
import winPage from "./screens/Winpage.js"
import losePage from "./screens/Losepage.js"
import qrPage  from "./screens/Qrpage.js"

import socket from "./socket.js";

const router = new Router({ // check this for more features with Router: https://github.com/Graidenix/vanilla-router
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
});

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

router.add("/", async () => {
  clearScripts();
  landingPage();
});

router.add("/screen2", async () => {
  clearScripts();
  tutorialPage();
});

router.add("/screen3", async () => {
  clearScripts();
  loadPage();
});

router.add("/screen4", async () => {
  clearScripts();
  gamePage();
});

router.add("/screen5", async () => {
  clearScripts();
  winPage();
});

router.add("/screen6", async () => {
  clearScripts();
  losePage();
});

router.add("/screen7", async () => {
  clearScripts();
  qrPage();
});

router.check().addUriListener();

// Listen for popstate event to handle browser navigation
window.addEventListener("popstate", () => {
  router.check();
});

document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

router.check();

export { router, socket };
