import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

const ChartContainer = ({seriesData}) => {
    barChartData.labels = seriesData.map(o => o.month);
    barChartData.datasets[0].data = seriesData.map(o => o.volume);
    //barChartData.datasets[1].data = seriesData.map(o => o.volume2);
    return (
        <div className="chart-container" style={{position: 'relative', height:'40vh', width:'80vw'}}>
            <Bar data={barChartData} options={barChartOptions}/>
        </div>
    );
}

const color = Chart.helpers.color;
const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

let barChartData = {
    labels: [],
    
    datasets: [
        // {
        //     label: 'Water Usage 2018',
        //     backgroundColor: '#0078ad',
        //     borderColor: '#00adfa',
        //     borderWidth: 1,
        //     hoverBackgroundColor: '#00adfa',
        //     data: []
        //},
        {
            label: 'Water Usage 2019',
            backgroundColor: '#4caf50',
            borderColor: '#00adfa',
            borderWidth: 1,
            hoverBackgroundColor: '#89f20a',
            data: []
        }
    ]
};

export default ChartContainer;