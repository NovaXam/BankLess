import React, { Component } from 'react';
import axios from 'axios';
import {Portions} from "../storage/Portions";
import {Transactions} from '../storage/Transactions';

import Graph from './Graph';
import PortionList from './PortionsList';
import TransactionsList from './TransactionsList';

import '../style/basicPage.css';



class BasicPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            portions: Portions,
            transactions: Transactions,
            data:[]
        }
    };

    componentDidMount() {
        this.convertAll(this.state.portions);
      }

    convertAll (portions) {
        var api = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=';
        for (var i = 0; i < portions.length; i++){
            api+=portions[i].currency ;
            if ( i !== portions.length - 1)
            api+= ',';
        }

        api+='&tsyms=';
        for (var i = 0; i < portions.length; i++){
            api+='USD';
            if ( i !== portions.length - 1)
            api+= ',';
        }

        console.log(api);
        axios.get(api)
        .then((resp) => {
            var newy = [];
            for (var i = 0; i < portions.length; i++){
                newy.push({name: portions[i].name, currency: 'USD', balance: Math.round(resp.data[portions[i].currency].USD*portions[0].balance).toFixed(2)});
            }
            console.log(newy);
            return  this.setState({data: newy});
        });
    };

   componentWillMount ( ){
       let userID  ='GBV3I3QJQ3TNLPWONBXSRVLB5V3JEIMARKLXOTILQSQVXSIMPZ6JWHBT';
        let tranUrl =`/api/Transactions/${userID}`;
        let portionUrl =`/api/Portions/${userID}`;
        Promise.all([axios(tranUrl),axios(portionUrl)])
         .then(res => {
                console.log(res);
                this.props.getTransations(res[0].data);
                this.setState({
                    transactions: res[0].data,
                    portions: res[1].data
                })

          } );
   }

render() {
    return(
        <div className="row no-gutters">
            <div className="col col-sm-12 basicPage">
                <section className="row no-gutters middleSection">
                    <Graph portions={this.state.data}/>
                    <PortionList portions={this.state.data}/>
                </section>
                <TransactionsList
                    transactions={this.state.transactions}
                />
            </div>
        </div>
        )
    }
};

export default BasicPage;
