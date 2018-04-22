import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { Transactions } from '../storage/Transactions';
import CurrSummary from './CurrSummary';

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
      <Segment key={idx} className="currSummary">
        <CurrSummary
          currency={ele}
        />
      </Segment>
    ))

    return (
      <Container>
        { currList }
      </Container>
    );
  }
}

export default Storage;
