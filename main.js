import "./reset.css";
import "./style.css";

const containerRa = document.getElementById("container-ra");
const botaoComecarRa = document.getElementById("botao-comecar");
const menu = document.getElementById("menu");

// const botaoVoltar = () => {
//   // menu.style.display = "block";
//   // containerRa.style.display = "none";
// };

const propriedade = (propriedade) => {
  if (propriedade === "aresta") {
    return "<p>O que é uma aresta?</p>";
  } else if (propriedade === "vertice") {
    return "<p>O que é um vértice?</p>";
  } else if (propriedade === "face") {
    return "<p>O que é uma face?</p>";
  }
};

const main = () => {
  const propriedadeInput = document.getElementById("propriedade-input");
  const poliedroInput = document.getElementById("poliedro-input");

  if (!propriedadeInput.value || !poliedroInput.value) {
    alert("Você deve escolher uma propriedade e um poliedro para começar!");
    return;
  }

  menu.style.display = "none";
  console.log(propriedadeInput.value);

  containerRa.innerHTML = `
    <button id="botao-voltar">Voltar</button>
    <div id="container-info">
      <p>${propriedade(propriedadeInput.value)}</p>
    </div>
    <a-scene embedded arjs="trackingMethod: best; debugUIEnabled: false" vr-mode-ui="enabled: false;">
      <a-marker preset="hiro">
        <a-entity
          position="1 0 0"
          scale="0.10 0.10 0.10"
          gltf-model="./assets/models/cubo-arestas.glb"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  `;

  // document
  //   .getElementById("botao-voltar")
  //   .addEventListener("click", botaoVoltar);
};

botaoComecarRa.addEventListener("click", () => {
  console.log("hello");
  main();
});
