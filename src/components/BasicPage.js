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
            transactions: Transactions
        }
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
                    <Graph />
                    <PortionList portions={this.state.portions}/>
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