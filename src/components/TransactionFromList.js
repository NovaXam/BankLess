import React, {Component} from 'react';

import "../style/trasactionFromList.css";

class TrasactionFromList extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    };

    componentWillMount() {
        this.props.formDataForTransaction(window.location.href.split("/")[window.location.href.split("/").length - 1]);
    };

    render() {
        let elemBut;
        if (this.props.valuePortion == undefined) {
            elemBut = (
            <div className="row no-gutters buttonList">
                <div className="col col-sm-12">
                    <button className="btn btn-success">Customize transaction</button>
                </div>
            </div>);
        } else {
            elemBut = (
                <div className="row no-gutters buttonList">
                    <div className="col col-sm-12">
                        <button className="btn btn-success">{this.props.valuePortion}</button>
                    </div>
                </div>);
            };
            return (
                <div className="row no-gutters">
                    <div className="col col-sm-12 loaded">
                        <div className="row no-gutters">
                            <div className="col col-sm-12 transHeader">
                                <h4>TRANSACTION INFO</h4>
                            </div>
                        </div>
                        <div className="row no-gutters"> 
                            <div className="col col-sm-12 transBody">
                                <div className="row no-gutters transBodyline">
                                    <div className="col col-sm-8 left">
                                        <h5>Recepient:</h5>
                                    </div>
                                    <div className="col col-sm-4 right">
                                        <h5>{this.props.valuePubKey.substring(0, 10)}...</h5> 
                                    </div>
                                </div>
                                <div className="row no-gutters transBodyline">
                                    <div className="col col-sm-8 left">
                                        <h5>Amount:</h5>
                                    </div>
                                    <div className="col col-sm-4 right">
                                        <h5>{this.props.valueAmount} <span>{this.props.valueCurrency}</span></h5>
                                    </div>
                                </div>
                                <div className="row no-gutters transBodyline">
                                    <div className="col col-sm-8 left">
                                        <h5>Portion:</h5>
                                    </div>
                                    <div className="col col-sm-4 right">
                                        <h5> {this.props.valuePortion}</h5>
                                    </div>
                                </div>
                                <div className="row no-gutters transBodyline">
                                    <div className="col col-sm-8 left">
                                        <h5>Balance:</h5>
                                    </div>
                                    <div className="col col-sm-4 right">
                                        <h5> {this.props.simpleBalance} <span>{this.props.valueCurrency}</span> </h5>
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
                        {elemBut}
                    </div>
                </div>
        )
    }
};

export default TrasactionFromList;

