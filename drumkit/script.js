const teclas = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};
const container = document.querySelector(".sound-container");
const keys = Object.keys(teclas);

container.addEventListener("click", ativarDiv);
window.addEventListener("keydown", ativarDiv);

function teclaPermitida(tecla) {
  return teclas.hasOwnProperty(tecla);
}

function ativarDiv(e) {
  let letra = null;
  if (e.type === "click") {
    letra = e.target.id;
  } else if (e.type === "keydown") {
    letra = e.key.toUpperCase();
  }
  if (teclaPermitida(letra)) {
    tocarSom(letra);
    ativarLetra(letra);
  }
}

function ativarLetra(letra) {
  const key = document.getElementById(letra);
  key.classList.add("active");
  removerEfeito(letra);
}

function removerEfeito(letra) {
  const key = document.getElementById(letra);
  key.addEventListener("transitionend", () => key.classList.remove("active"));
}

function createKey(letra) {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = letra;
  div.id = letra;
  container.appendChild(div);
}

keys.forEach((item) => createKey(item));

function tocarSom(key) {
  const som = new Audio(`./sounds/${teclas[key]}`);
  som.play();
}
