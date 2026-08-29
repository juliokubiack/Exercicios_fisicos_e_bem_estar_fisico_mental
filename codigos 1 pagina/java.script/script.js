const urlBronze = "Imagens/medalha-um.png";
const urlPrata = "Imagens/medalha-dois.png"; // Nível 2
const urlOuro = "Imagens/medalha-tres.png"; // Nível 3

const imgBronze = new Image();
imgBronze.src = urlBronze;
const imgPrata = new Image();
imgPrata.src = urlPrata;
const imgOuro = new Image();
imgOuro.src = urlOuro;

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

      if (imagemParaDesenhar && imagemParaDesenhar.complete) {
        ctx.drawImage(
          imagemParaDesenhar,
          xBarra - tamanhoMedalha / 2, // Centraliza horizontalmente
          yBarra - (tamanhoMedalha + 8), // Posiciona 8px acima do topo
          tamanhoMedalha,
          tamanhoMedalha
        );
      }
    });

    ctx.restore();
  },
};

const ctx = document.getElementById("meuGrafico");

const meuGrafico = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        data: [3, 3, 1, 3, 1, 2, 3],
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
      top: 30,
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { display: false },
        beginAtZero: true,
        max: 3,
        ticks: { stepSize: 1 },
      },
    },
  },
  plugins: [pluginMedalhasComImagens],
});

imgOuro.onload = () => {
  meuGrafico.update();
};