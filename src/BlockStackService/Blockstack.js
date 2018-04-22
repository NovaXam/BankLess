import React, { Component } from 'react';
// import { Container, Button, Segment, Input } from 'semantic-ui-react';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  // loadUserData,
  handlePendingSignIn,
  // putFile,
  // getFile,
  signUserOut,
} from 'blockstack';

class Blockstack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      transaction: [],
      q: '',
      counter: 0,
    }
    // this.loadTransactionOfUser = this.loadTransactionOfUser.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.checkIfUserIsSignIn = this.checkIfUserIsSignIn.bind(this);
    // this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleSubmitTransaction = this.handleSubmitTransaction.bind(this);
    // this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then(() => {
        window.location = window.location.origin;
      });
    }
  }

  // componentDidMount() {
  //   this.loadTransactionOfUser();
  // }
  //
  // async loadTransactionOfUser () {
  //   const userData = loadUserData();
  //   const options = { decrypt: false };
  //   const response = await getFile('transaction.json', options);
  //   console.log(response, 'load data of user', userData);
  //   const counter = response.transaction.length + 1;
  //
  //   console.log(userData, response.transaction);
  //   this.setState({ userData, transaction: response.transaction, counter });
  // }

  handleSignIn(e) {
    e.preventDefault();
    const origin = window.location.origin;
    redirectToSignIn(origin, `${origin}/manifest.json`, ['store_write', 'publish_data']);
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  checkIfUserIsSignIn() {
    console.log(isUserSignedIn(), isSignInPending());
    if (isUserSignedIn()) {
      this.setState({ signIn: true });
    }
  }

  // handleOnChange(e, { value }) {
  //   this.setState({ q: value });
  // };
  //
  // async handleSubmitTransaction() {
  //   // allow users to be able to see data
  //   const options = { encrypt: false };
  //
  //   const dataObject = {
  //     id: this.state.counter,
  //     type: '',
  //     publickey: '',
  //     portion: '',
  //     asset: '',
  //     UID: '',
  //     amount: '',
  //     payload: this.state.q,
  //     created_at: Date.now(),
  //   }
  //
  //   const transaction = [...this.state.transaction, dataObject];
  //   const response = await putFile('transaction.json', JSON.stringify({ transaction }), options);
  //   // load data after getting the response
  //   this.loadTransactionOfUser();
  //   console.log(response);
  // }
  //
  // async getData() {
  //   // check if this is fixed
  //   const options = { decrypt: false };
  //   const response = await getFile('transaction.json', options);
  //   console.log(JSON.parse(response).transaction);
  //   return response;
  // }

  render() {

    return (
      <div className="col col-sm-12">
        <button className="btn btn-primary" onClick={e => this.handleSignIn(e)}>
          Press to Start
        </button>
      </div>
    );
  }
}

export default Blockstack;
