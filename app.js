const installButton = document.querySelector("#install-button");
let installEvent;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installEvent = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!installEvent) return;

  await installEvent.prompt();
  await installEvent.userChoice;
  installEvent = undefined;
  installButton.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installEvent = undefined;
  installButton.hidden = true;
});
