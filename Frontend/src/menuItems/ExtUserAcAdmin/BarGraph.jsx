import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Data for the bar graph
        const data = {
            labels: ['RNC Cluster', 'Delta', 'Testla', 'Cray XC40', 'Dell', 'Fermi', 'Tyrone', 'Param-Pravega'],
            datasets: [{
                label: 'Count',
                data: [250, 850, 625, 699, 742, 608, 918, 550],
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust color as needed
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }],
        };

        // Chart configuration
        const options = {
            scales: {
                xAxes: [{
                    type: 'category',
                    position: 'bottom',
                    beginAtZero: true,
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                }],
            },
        };

        // Create the bar graph
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });
    }, []);

    return (
        <div>
            <canvas ref={chartRef} width="250" height="150"></canvas>
        </div>
    );
};

export default BarGraph;
