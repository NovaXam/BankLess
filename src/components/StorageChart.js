import React, { Component } from 'react';
import ReactHighChart from 'react-highcharts';
import axios from 'axios';

class StorageChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      coin: this.props.coin
    }
  }

  componentDidMount() {
    this.loadChart(this.props.coin);
  }

  async loadChart(symbol) {
    let symbolIsActive = symbol;
    if (symbol === 'MIOTA') { symbolIsActive = 'IOTA'; }
    if (symbol === 'NANO') { symbolIsActive = 'XRB'; }
    const chartUrl = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbolIsActive}&tsym=USD&limit=7&e=CCCAGG`;
    const chartRequest = await axios.get(chartUrl);
    const chartData = await this.transformToChartData(chartRequest.data.Data);
    this.setState({ chartData });
  }

  transformToChartData(histCoinDataArray) {
    const areaData = [];

    histCoinDataArray.forEach((coinData) => {
      // transform epoch to millisecond
      const timeInMilli = coinData.time * 1000;
      areaData.push([timeInMilli, coinData.close]);
    });

    return areaData;
  };

  render() {
    let minStart = 0;
    if (this.state.chartData) {
      // add thousand ','
      const chart = this.area;
      if (chart) {
        chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
      }

      // set minimum value of the chart to the lowest value of the array dataset
      let value = this.state.chartData[1];
      this.state.chartData.forEach((data) => {
        if (data[1] < value) {
          [, value] = data;
        }
      });
      // console.log(value, 'value');
      minStart = !value ? 0 : (value[1]) - (value[1] * 0.3);
    }

    const areaConfig = {
      title: {
        text: `${this.props.coin} Weekly History`,
      },
      yAxis: {
        title: {
          text: 'USD Price',
        },
        startOnTick: false,
        type: 'linear',
        min: minStart,
        minPadding: 0.2,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        area: {
          dataLabels: {
            enabled: false,
          },
          enableMouseTracking: true,
          animation: false,
        },
      },
      chart: {
        height: 200,
        animation: false,
      },
      credits: false,
      tooltip: {
        pointFormat: '<b>$ {point.y:,1f}</b><br/>',
      },
      loading: {
        hideDuration: 1000,
        showDuration: 1000,
      },
      series: [{
        type: 'area',
        name: this.state.coin,
        data: this.state.chartData || [],
        showInLegend: false,
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            navigator: {
              enabled: false,
            },
            dataLabels: {
              enabled: false,
            },
            yAxis: {
              title: {
                text: null,
              },
            },
          },
        }],
      },
    };

    return (
      <ReactHighChart config={areaConfig} ref={(c) => { this.area = c; }} />
    );
  }

}

export default StorageChart;
