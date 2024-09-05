'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from "chart.js"
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps ) => {

    const accountNames = accounts.map((a) => a.name);
    const balances = accounts.map((a) => a.currentBalance)

    const data={
        datasets: [
            {
                label: 'Banks',
                data: [balances],
                backgroundColor: ['#00308F', '#FFD700', '#008000']
            }
        ],
        labels: [accountNames]

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