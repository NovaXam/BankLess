import React, { Component } from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';

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
      <Segment color="red" className="currSummary">
        <p>
          { this.props.currency } {this.state.currentChange}%
        </p>
      </Segment>
    )
  }
}

export default CurrSummary;
