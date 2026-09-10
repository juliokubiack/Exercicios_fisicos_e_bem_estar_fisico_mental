const imgBronze = new Image();
imgBronze.src = "img_progresso/medalha-um.png";
const imgPrata = new Image();
imgPrata.src = "img_progresso/medalha-dois.png";
const imgOuro = new Image();
imgOuro.src = "img_progresso/medalha-tres.png";

const pluginMedalhasComImagens = {
  id: "pluginMedalhasComImagens",
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const tamanhoMedalha = 24;

    ctx.save();
    data.datasets[0].data.forEach((valor, index) => {
      const metaBarra = chart.getDatasetMeta(0).data[index];
      const xBarra = metaBarra.x;
      const yBarra = metaBarra.y;

      let imagemParaDesenhar = null;

      if (valor === 1) imagemParaDesenhar = imgBronze;
      else if (valor === 2) imagemParaDesenhar = imgPrata;
      else if (valor === 3) imagemParaDesenhar = imgOuro;

      if (imagemParaDesenhar && imagemParaDesenhar.complete && valor > 0) {
        ctx.drawImage(
          imagemParaDesenhar,
          xBarra - tamanhoMedalha / 2,
          yBarra - (tamanhoMedalha + 6),
          tamanhoMedalha,
          tamanhoMedalha
        );
      }
    });
    ctx.restore();
  },
};

const ctx = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#4988C4",
        borderRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { 
        grid: { display: false } 
      },
      y: {
        display: false,
        beginAtZero: true,
        max: 3.8,
      },
    },
  },
  plugins: [pluginMedalhasComImagens],
});

const jsDay = new Date().getDay();
const indiceHoje = jsDay === 0 ? 6 : jsDay - 1;

function atualizarTudo() {
  const lista = document.getElementById("lista-tarefas");
  const checkboxes = lista.querySelectorAll("input[type='checkbox']");
  const msgSemMeta = document.getElementById("sem-meta-msg");
  const totalMetas = checkboxes.length;

  let marcadas = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) marcadas++;
  });

  if (msgSemMeta) {
    if (totalMetas === 0) {
      msgSemMeta.style.display = "block";
    } else {
      msgSemMeta.style.display = "none";
    }
  }

  const contador = document.getElementById("contador");
  if (contador) contador.innerText = `${marcadas}/${totalMetas}`;

  const med1 = document.getElementById("med-1");
  const med2 = document.getElementById("med-2");
  const med3 = document.getElementById("med-3");

  if (med1) med1.classList.toggle("opaca", marcadas < 1);
  if (med2) med2.classList.toggle("opaca", marcadas < 2);
  if (med3) med3.classList.toggle("opaca", marcadas < 3);

  meuGrafico.data.datasets[0].data[indiceHoje] = marcadas;
  meuGrafico.update();
}

function abrirModal() {
  const totalMetas = document.querySelectorAll("#lista-tarefas li").length;
  if (totalMetas >= 3) {
    alert("Você só pode adicionar no máximo 3 metas por dia!");
    return;
  }
  const modal = document.getElementById("modal-meta");
  if (modal) modal.classList.add("ativo");
}

function fecharModal() {
  const modal = document.getElementById("modal-meta");
  if (modal) modal.classList.remove("ativo");
  const input = document.getElementById("input-meta-texto");
  if (input) input.value = "";
}

function salvarMeta() {
  const input = document.getElementById("input-meta-texto");
  const texto = input ? input.value.trim() : "";

  if (texto === "") {
    alert("Por favor, digite o texto da meta.");
    return;
  }

  const lista = document.getElementById("lista-tarefas");
  const idMeta = `meta-${Date.now()}`;

  const novoLi = document.createElement("li");
  novoLi.innerHTML = `
    <input type="checkbox" id="${idMeta}" onchange="atualizarTudo()">
    <label for="${idMeta}">${texto}</label>
  `;

  if (lista) lista.appendChild(novoLi);
  fecharModal();
  atualizarTudo();
}

function removerMeta() {
  const lista = document.getElementById("lista-tarefas");
  if (!lista) return;

  const itens = lista.querySelectorAll("li");
  if (itens.length === 0) {
    alert("Não há metas para remover!");
    return;
  }

  lista.removeChild(itens[itens.length - 1]);
  atualizarTudo();
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarTudo();
});