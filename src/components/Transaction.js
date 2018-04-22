import React, { Component } from 'react';
import StellarSdk from 'stellar-sdk';
import ReactLoading from 'react-loading';

import axios from 'axios';

import '../style/transaction.css';

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state={
            transactionResult: null
        }
        this.makePayment = this.makePayment.bind(this);
    };

    componentWillMount() {
        this.makePayment();
    }
    
    componentWillReceiveProps(nextProps) {
    
        axios({
            method: "POST",
            url:"api/Transactions",
            data: nextProps
        })
        .then((res) => {
            console.log(res);
        })
    };

    makePayment() {
        let self = this;
        StellarSdk.Network.useTestNetwork();
        var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
        var sourceKeys = StellarSdk.Keypair.fromSecret(`${process.env.REACT_APP_SECRET}`);
        var destinationId = this.props.publicKey;
        var transaction;
        var amount = this.props.amount;
        
        server.loadAccount(destinationId)
        .catch(StellarSdk.NotFoundError, function (error) {
        throw new Error('The destination account does not exist!');
        })
        .then(function() {
        return server.loadAccount(sourceKeys.publicKey());
        })
        .then(function(sourceAccount) {
        transaction = new StellarSdk.TransactionBuilder(sourceAccount)
        .addOperation(StellarSdk.Operation.payment({
            destination: destinationId,
            asset: StellarSdk.Asset.native(),
            amount: amount
        }))
        .addMemo(StellarSdk.Memo.text('Buy a ticket to attractions'))
        .build();
        transaction.sign(sourceKeys);
        return server.submitTransaction(transaction);
        })
        .then(function(result) {
            console.log('Success! Results:', result);
            self.setState({
                transactionResult: true
                })
            })
            .then(() => {
                return self.props.checkBalance(sourceKeys.secret());
            })
            
            .catch(function(error) {
            console.error('Something went wrong!', error);
            // server.submitTransaction(transaction);
            self.setState({
                transactionResult: false
            });
            })      

        /*
        .then(function(result) {
            
        console.log('Success! Results:', result);
        self.setState({
            transactionResult: true
            })
        })
        .then(() => {
            self.props.checkBalance(sourceKeys.secret());
        })
        .catch(function(error) {
        console.error('Something went wrong!', error);
        // server.submitTransaction(transaction);
        self.setState({
            transactionResult: false
        });        
        })
        */
    };

    render() {
        let color = "black";
        let type = "spinningBubbles";
        if (this.state.transactionResult === null) {
            return (
            <div className="row no-gutters">
                <div className="col col-sm-12 loading" style={{padding: "10rem 7rem"}}>
                    <ReactLoading type={type} color={color} height={150} width={150} />
                </div>
            </div>
            )
        } else if (this.state.transactionResult) {
            return (
            <div className="row no-gutters">
                <div className="col col-sm-12 loaded">
                    <div className="row no-gutters">
                        <div className="col col-sm-12 transHeaderSuccess">
                            <h4>TRANSACTION SUCCESSFUL!</h4>
                        </div>
                    </div>
                    <div className="row no-gutters"> 
                        <div className="col col-sm-12 transBody">
                            <div className="row no-gutters transBodyline">
                                <div className="col col-sm-8 left">
                                    <h5>Recepient:</h5>
                                </div>
                                <div className="col col-sm-4 right">
                                    <h5>{this.props.publicKey.substring(0, 10)}...</h5> 
                                </div>
                            </div>
                            <div className="row no-gutters transBodyline">
                                <div className="col col-sm-8 left">
                                    <h5>Amount:</h5>
                                </div>
                                <div className="col col-sm-4 right">
                                    <h5>{this.props.amount} <span>{this.props.currency}</span></h5>
                                </div>
                            </div>
                            <div className="row no-gutters transBodyline">
                                <div className="col col-sm-8 left">
                                    <h5>Portion:</h5>
                                </div>
                                <div className="col col-sm-4 right">
                                    <h5> {this.props.portion}</h5>
                                </div>
                            </div>
                            <div className="row no-gutters transBodyline">
                                <div className="col col-sm-8 left">
                                    <h5>Balance:</h5>
                                </div>
                                <div className="col col-sm-4 rigth">
                                <h5> {this.props.balance} <span>{this.props.currency}</span> </h5>
                                </div>
                            </div>
                            <div className="row no-gutters transBodyline">
                                <div className="col col-sm-8 left">
                                    <h5>Type:</h5>
                                </div>
                                <div className="col col-sm-4 right">
                                    <h5>{this.props.type}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
            <div className="row no-gutters">
                <div className="col col-sm-12 loaded">
                    <div className="row no-gutters">
                        <div className="col col-sm-12 transHeaderUnSuccess">
                            <h4>TRANSACTION UNSUCCESSFUL!</h4>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
};

export default Transaction;