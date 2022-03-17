const ctx = document.getElementById('myChart');
const chartData = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(25, 255, 255, 0.4)',
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            // ],
            borderWidth: 4
        }]
    },
    options: {}
}
const myChart = new Chart(ctx, chartData)


const socket = new WebSocket('ws://localhost:8000/ws/chart/')

socket.onmessage = function (ev) {
    let data = JSON.parse(ev.data)
    console.log(data.value)

    let newChartData = chartData.data.datasets[0].data
    newChartData.shift()
    newChartData.push(data.value)

    chartData.data.datasets[0].data = newChartData
    myChart.update()
}