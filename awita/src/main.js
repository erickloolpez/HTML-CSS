
const godContent = god.value;
const divider = godContent.split(',');

const judaContent = juda.value;
const dividerJuda = judaContent.split(',')


const apiAnalysis = async (url, option) => {
    await fetch(url)
        .then((res) => {
            if (res.ok) {
                console.log(`HTTP sp request GET successful`)
            } else {
                consol.log(`HTTP sp request GET unsuccessful`)
            }
            return res
        })
        .then((res) => res.json())
        .then((data) => {
            option == 1 ? addDataChart(data) : addDataPie(data)
        })
        .catch((error) => console.log(error))
}

apiAnalysis(getIngresosPlan, 1)
apiAnalysis(getSuscripcionPlan, 0)


let chartData = {
    labels: [],
    datasets: [{
        label: '# of Values',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};
let pieData = {
    labels: [],
    datasets: [{
        label: '# of Values',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

function createChart(type, height = 100) {
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    canvasContainer.style.height = `${height}%`;

    const ctx = document.getElementById('myChart').getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const { datasetIndex, index } = activeElements[0];
                    removeData(datasetIndex, index);
                }
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }
    });

}
function createPie(type, height = 100) {
    const canvasContainer = document.getElementById('canvas-containerTwo');
    canvasContainer.innerHTML = `<canvas id="myPie"></canvas>`;
    canvasContainer.style.height = `${height}%`;

    const ctx = document.getElementById('myPie').getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: pieData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const { datasetIndex, index } = activeElements[0];
                    removeData(datasetIndex, index);
                }
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }
    });

}

let myChart = createChart('bar'); // Create initial chart with default height = 400
let myPie = createPie('pie');

addDataPie(dividerJuda);

function addDataChart(listBungee) {

    listBungee.forEach((item) => {
        chartData.labels.push(item.nombre)
        chartData.datasets.forEach((dataset) => {
            dataset.data.push(item.Ingresos_Totales)
        })
    })
    myChart.update()
}

function addDataPie(halfBungee) {
    halfBungee.forEach((item) => {
        pieData.labels.push(item.Nombre_del_plan)
        pieData.datasets.forEach((dataset) => {
            dataset.data.push(item.Número_de_suscripciones)
        })
    })
    myChart.update()
}

function addData(event) {
    event.preventDefault();
    const labelInput = document.getElementById('labelInput');
    const dataInput = document.getElementById('dataInput');

    if (labelInput.value && dataInput.value) {
        chartData.labels.push(labelInput.value);
        chartData.datasets.forEach((dataset) => {
            dataset.data.push(dataInput.value);
        });
        myChart.update();
        labelInput.value = '';
        dataInput.value = '';
    }

}

function updateChartType(event) {
    event.preventDefault();
    const selectedType = document.getElementById('chartType').value;
    myChart.destroy(); // Destroy the old chart
    myChart = createChart(selectedType);
}

function removeData(datasetIndex, index) {
    if (chartData.labels.length > index) {
        chartData.labels.splice(index, 1);
        chartData.datasets[datasetIndex].data.splice(index, 1);
        myChart.update();
    }
}