import "./reset.css";
import "./style.css";

const containerRa = document.getElementById("container-ra");
const botaoComecarRa = document.getElementById("botao-comecar");
const menu = document.getElementById("menu");

const botaoVoltar = () => {
  menu.style.display = "flex";
  containerRa.style.display = "none";
};

const propriedadeTexto = (propriedade) => {
  if (propriedade === "aresta") {
    return "<p>Aresta é a borda de uma face de um poliedro. São as partes em azul no objeto abaixo.</p>";
  } else if (propriedade === "vertice") {
    return "<p>Vértice é o ponto de ligação das arestas de um poliedro. São as partes em azul no objeto abaixo.</p>";
  } else if (propriedade === "face") {
    return "<p>Face é o lado de um poliedro. São as partes em azul no objeto abaixo.</p>";
  }
};

const propriedadeObjeto = (propriedade) => {
  if (propriedade === "aresta") {
    return "./assets/models/cubo-arestas.glb";
  } else if (propriedade === "vertice") {
    return "./assets/models/cubo-vertice.glb";
  } else if (propriedade === "face") {
    return "./assets/models/cubo-faces.glb";
  }
};

const iniciar = () => {
  const propriedadeInput = document.getElementById("propriedade-input");
  const poliedroInput = document.getElementById("poliedro-input");

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
          position="1 0 -0.5"
          scale="0.10 0.10 0.10"
          gltf-model="${propriedadeObjeto(propriedadeInput.value)}"
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
