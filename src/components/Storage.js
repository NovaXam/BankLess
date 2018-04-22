import React, { Component } from 'react';
import { Transactions } from '../storage/Transactions';
import CurrSummary from './CurrSummary';
import StorageChart from './StorageChart';

class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balanceByCurrency: [],
      collection: [],
      priceCurrToUSD: {}
    }
  }

  componentDidMount() {
    this.aggregateTransaction();
  }

  aggregateTransaction() {
    const currSet = new Set();
    const collection = [];
    // aggregate all transaction so you can get the conversion rate
    Transactions.forEach(ele => {
        currSet.add(ele.currency);
    });

    currSet.forEach(e => collection.push(e));
    this.setState({ collection });

  }

  render() {
    const currList = this.state.collection.map((ele, idx) => (
      <div className="card" key={idx}>
        <div className="card-body">
          <StorageChart
            coin={ele}
          />
          <CurrSummary
            currency={ele}
          />
        </div>
      </div>
    ))

    return (
      <div>
        <h3 className="card-title">Crypto Stats</h3>
        <p className="card-text">Consolidated Summary</p>
        {  currList }
      </div>
    );
  }
}

export default Storage;
