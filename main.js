import "./reset.css";
import "./style.css";

const containerRa = document.getElementById("container-ra");
const botaoComecarRa = document.getElementById("botao-comecar");
const menu = document.getElementById("menu");
const propriedadeInput = document.getElementById("propriedade-input");
const poliedroInput = document.getElementById("poliedro-input");
const tooltip = document.getElementById("tooltip");
const tooltipText = document.getElementById("tooltip-texto");
const avisoCelular = document.getElementById("aviso-celular");

const botaoVoltar = () => {
  menu.style.display = "flex";
  containerRa.style.display = "none";
};

const propriedadeTexto = (propriedade) => {
  if (propriedade === "aresta") {
    return "<p>Aresta é a borda de uma face de um poliedro. São as <span id='realce-propriedade-texto'>partes em azul</span> no objeto abaixo.</p>";
  } else if (propriedade === "vertice") {
    return "<p>Vértice é o ponto de ligação das arestas de um poliedro. São as <span id='realce-propriedade-texto'>partes em azul</span> no objeto abaixo.</p>";
  } else if (propriedade === "face") {
    return "<p>Face é o lado de um poliedro. São as <span id='realce-propriedade-texto'>partes em azul</span> no objeto abaixo.</p>";
  }
};

const propriedadeObjeto = (propriedade, poliedro) => {
  const objetos3d = {
    "aresta-cubo": "./assets/models/cubo-aresta.glb",
    "vertice-cubo": "./assets/models/cubo-vertice.glb",
    "face-cubo": "./assets/models/cubo-face.glb",
    "aresta-tetraedro": "./assets/models/tetraedro-aresta.glb",
    "vertice-tetraedro": "./assets/models/tetraedro-vertice.glb",
    "face-tetraedro": "./assets/models/tetraedro-face.glb",
    "aresta-tronco": "./assets/models/tronco-aresta.glb",
    "vertice-tronco": "./assets/models/tronco-vertice.glb",
    "face-tronco": "./assets/models/tronco-face.glb",
  };

  return objetos3d[`${propriedade}-${poliedro}`];
};

const iniciar = () => {
  if (!propriedadeInput.value || !poliedroInput.value) {
    alert("Você deve escolher uma propriedade e um poliedro para começar!");
    return;
  }

  menu.style.display = "none";
  containerRa.style.display = "block";

  containerRa.innerHTML = `
    <button id="botao-voltar">Voltar</button>
    <div id="container-info">
      <p>${propriedadeTexto(propriedadeInput.value)}</p>
    </div>
    <a-scene embedded arjs="trackingMethod: best; debugUIEnabled: false" vr-mode-ui="enabled: false;">
      <a-marker preset="hiro">
        <a-entity
          position="0.10 0 0"
          scale="0.80 0.80 0.80"
          gltf-model="${propriedadeObjeto(
            propriedadeInput.value,
            poliedroInput.value
          )}"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  `;

  document
    .getElementById("botao-voltar")
    .addEventListener("click", botaoVoltar);
};

botaoComecarRa.addEventListener("click", () => {
  iniciar();
});

tooltip.addEventListener("click", () => {
  if (tooltipText.style.display === "none") {
    tooltipText.style.display = "block";
  } else {
    tooltipText.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    avisoCelular.style.display = "block";
    botaoComecarRa.disabled = true;
    botaoComecarRa.style.cursor = "not-allowed";
    botaoComecarRa.style.backgroundColor = "gray";
  }
});
