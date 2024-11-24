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
    "aresta-cubo": "./assets/models/arestas/cubo.glb",
    "vertice-cubo": "./assets/models/vertices/cubo.glb",
    "face-cubo": "./assets/models/faces/cubo.glb",
    "aresta-tetraedro": "./assets/models/arestas/tetraedro.glb",
    "vertice-tetraedro": "./assets/models/vertices/tetraedro.glb",
    "face-tetraedro": "./assets/models/faces/tetraedro.glb",
    "aresta-tronco": "./assets/models/arestas/tronco.glb",
    "vertice-tronco": "./assets/models/vertices/tronco.glb",
    "face-tronco": "./assets/models/faces/tronco.glb",
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
          scale="0.50 0.50 0.50"
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
