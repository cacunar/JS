const currencyConversor = async (amount, currency) => {
  try {
    const response = await fetch(`https://mindicador.cl/api/${currency}`);
    const json = await response.json();
    const lastValue = json.serie[0].valor;
    const valueHistory = json.serie.slice(0, 10);
    const calculate = parseFloat(amount / lastValue).toFixed(2);
    if (currency == "dolar" || currency == "bitcoin") {
      symbol = "$";
    } else {
      symbol = "&#8364;";
    }
    document.getElementById(
      "result"
    ).innerHTML = `Resultado: ${calculate} ${symbol} `;
    currencyChart(valueHistory);
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("searchButton").onclick = function () {
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;
  currencyConversor(amount, currency);
};

function convertirFecha(fecha) {
  var fechaObj = new Date(fecha);

  var year = fechaObj.getFullYear();
  var month = String(fechaObj.getMonth() + 1).padStart(2, "0");
  var day = String(fechaObj.getDate()).padStart(2, "0");

  var fechaFormateada = year + "-" + month + "-" + day;

  return fechaFormateada;
}

function currencyChart(valueHistory) {
    valueHistory.sort(function (a, b) {
        return new Date(a.fecha) - new Date(b.fecha);
    });
  var value = valueHistory;

  var ctx = document.getElementById("chart");
  if (!ctx) {
    var chartContainer = document.getElementById("chart-container");
    ctx = document.createElement("canvas");
    ctx.id = "chart";
    chartContainer.appendChild(ctx);
  }

  if (window.myChart) {
    window.myChart.destroy();
  }

  var chartData = {
    labels: value.map(function (value) {
      return convertirFecha(value.fecha);
    }),
    datasets: [
      {
        label: "Valores",
        data: value.map(function (value) {
          return value.valor;
        }),
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (context) {
                    return context.dataset.label + ': ' + context.parsed.y;
                }
            }
        }
    }
};

  document.getElementById("chart").style.backgroundColor = "white";

  window.myChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: chartOptions,
  });
}
