import React from 'react'
import { Line } from 'react-chartjs-2'

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
            labels: MONTHS,
            datasets: [
            {
              label: 'Apointments',
              data: [65, 59, 80, 81, 56, 55, 40,60,50],
            
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,


              
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],

          
        }}
        height={400}
        width={600}
        options={{
           
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  
                  
                  
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
           
            
          },

         
      
          
        }}
      />
    </div>
  )
}

export default LineChart