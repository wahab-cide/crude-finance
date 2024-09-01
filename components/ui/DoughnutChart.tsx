'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from "chart.js"
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps ) => {
    const data={
        datasets: [
            {
                label: 'Banks',
                data: [135.45, 4000, 2500],
                backgroundColor: ['#00ffff', '#ff00ff', '#ffff00']
            }
        ],
        labels: ['Bank 1', 'Bank 2','Bank 3']

    }
  return (<div style={{ width: '80px', height: '80px' }}> <Doughnut 
    data={data}
    options={{
        cutout: '50%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
    </div>
    )
}

export default DoughnutChart