import "./reset.css";
import "./style.css";

const oi = () => {
  console.log("hello");
  const app = document.querySelector("#app");
  document.getElementById("menu").style.display = "block";
  app.style.display = "none";
};

window.oi = oi;

const test = () => {
  const btn = document.getElementById("btn-active-ar");
  const app = document.querySelector("#app");
  const polyhedronProperty = document.getElementById("property-input");

  const teste = {
    edge: "./assets/models/cubo-arestas.glb",
    vertex: "./assets/models/cubo-vertices.glb",
    face: "./assets/models/cubo-faces.glb",
  };

  btn.addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";

    app.innerHTML = `
    <button id="btn-voltar" class="btn-voltar">Voltar</button>
    <a-scene embedded arjs="trackingMethod: best; debugUIEnabled: false" vr-mode-ui="enabled: false;">
      <a-marker preset="hiro">
        <a-entity
          scale="0.05 0.05 0.05"
          gltf-model="./assets/models/cubo-arestas.glb"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
    `;

    const test = document.getElementById("btn-voltar");
    console.log(test);
    test.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("hello!");
    });
  });
};

test();
