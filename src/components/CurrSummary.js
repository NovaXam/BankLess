import React, { Component } from 'react';
import axios from 'axios';
import arrowUp from '../assets/svg/arrow-thick-top.svg';
import arrowDown from '../assets/svg/arrow-thick-bottom.svg';
import '../style/currsummary.css';

class CurrSummary extends Component {
  // this.props.currency
  constructor(props) {
    super(props);
    this.state = {
      currentChange: 0,
    }
  }

  componentDidMount() {
    this.get24HChange();
  }

  async get24HChange() {
    // really hacky solution to cors
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://chasing-coins.com/api/v1/std/coin/${this.props.currency}`;
    const response = await axios(`${proxyurl}${url}`).catch(err => console.log(err));
    this.setState({ currentChange: response.data.change.day });
  }

  render() {
    return (
      <li className="list-group-item">
        { this.props.currency }: {this.state.currentChange}% &nbsp; &nbsp;
        { this.state.currentChange > 0 ?
            <img src={arrowUp} className="currSummaryIcon" alt="icon name" />
          :
            <img src={arrowDown} className="currSummaryIcon" alt="icon name" />
        }
      </li>
    )
  }
}

export default CurrSummary;
