import React from 'react';
import Chart from "react-apexcharts";
import {Container} from './styles';
import { useMovementsForecastServices } from '../../hooks/movementsForecastService';

export function MovementsForecastDashboard() {
  const {listMovementsForecast} = useMovementsForecastServices();

  let options = {
    chart: {
      type: 'bar',
      // toolbar: {show: false}
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: { 
            enabled: true,
            style: {
              fontSize: '18px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold'
            },

          },
          style: {
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold'
           
          },
        },
      },
    },
    colors:["#CD5C5C","#37C871","#696969"],
    dataLabels:{
      position: 'bottom',
      style: {
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold'
      },
    },
    xaxis: {
      categories: [''],
      style: {
        fontSize: '15px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
      },
    },
    yaxis: {
      labels: {
        show: true,

        style: {
            fontSize: '15px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
        },
    },
    },
    title: {
      text: 'Previsão de Movimentações',
      align: 'center',
      offsetX: 0,
      offsetY: -8,
      floating: true,
      style: {
        fontSize: '20px',
        color: '#263238',
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      align:'center',
      offsetX: 100,
      fontSize: '16px',
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `
          <div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 16px;">
              ${w.config.xaxis.categories[dataPointIndex]}
          </div>
          <div class="apexcharts-tooltip-series-group" style="order: 1; display: flex;">
              <span class="apexcharts-tooltip-marker"
                style="background-color: ${
                w.globals.colors[seriesIndex]
                };"></span>
              <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 16px;">
                <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">${
                    w.config.series[seriesIndex].name
                    }: </span>
                    <span class="apexcharts-tooltip-text-y-value">${
                    series[seriesIndex][dataPointIndex]
                    }</span>
                </div>
              </div>
          </div>
          <div class="apexcharts-tooltip-series-group" style="order: 2; display: flex;">
              <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 16px;">
                <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">Total: </span>
                    <span class="apexcharts-tooltip-text-y-value">${series
                    .map((s) => s[dataPointIndex])
                    .reduce((a, b) => a + b, 0)}</span>
                </div>
              </div>
          </div>
        `;
      },
    },
  };



  return (
    <Container>
       <Chart type="bar" options={options} series={listMovementsForecast} width={640} height={640} />
    </Container>
  );
}

