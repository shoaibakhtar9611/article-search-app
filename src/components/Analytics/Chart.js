import React, { Component } from 'react';

import { Bar, Line } from 'react-chartjs-2';
// import { render } from '@testing-library/react';


class Chart extends Component {
  state = {
    chartData: {
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        label: 'Article', data: [10, 20, 80, 300, 100, 78, 34, 41, 87, 110],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      }],


    }
  }


  render() {
    return (
      <div class="card">
        <div className="chart">
          <Bar data={this.state.chartData} options={{
            title: {
              display: true,
              text: 'Number of Article Published Year Wise'
            }, legend: {
              display: true,
              position: 'right'
            }
          }} />
        </div>
      </div>
    )
  }
}


export default Chart