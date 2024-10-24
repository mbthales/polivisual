import "./style.css";

const oi = () => {
  const app = document.querySelector("#app");
  document.getElementById("teste").style.display = "block";
  app.style.display = "none";
};

window.oi = oi;

const test = () => {
  const btn = document.getElementById("btn-active-ar");
  const app = document.querySelector("#app");

  btn.addEventListener("click", () => {
    document.getElementById("teste").style.display = "none";

    app.innerHTML = `
        <a-scene embedded arjs="trackingMethod: best; debugUIEnabled: false;" vr-mode-ui="enabled: false;">
          <button onclick="oi()" style="position: absolute">teste</button>
          <a-marker preset="hiro">
            <a-entity
              scale="0.05 0.05 0.05"
              gltf-model="./assets/models/poliedro.glb"
            ></a-entity>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
    `;
  });
};

test();
