import React, {Component} from 'react';
import {Portions} from '../storage/Portions';
import '../style/portionsPage.css';

class PortionsPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            classId: null
        }
        this.handlePortion = this.handlePortion.bind(this);
    };

    handlePortion(e) {
        e.preventDefault();
        console.log(e.target.id);
        this.setState({
            classId: e.target.id
        })
    };

    render() {
        return (
            <div className="row no-gutters">
                <div className="col col-sm-12 portionsPage">
                    <div className="row no-gutters addPortion"> 
                        <div className="col col-sm-12"> 
                            <button className="btn btn-success">ADD PORTION</button>
                        </div>
                    </div>
                    <div className="row no-gutters lineHeader">
                        <div className="col col-sm-8" style={{padding: "0.5rem 0rem 0rem 3rem", maxWidth: "17rem", textAlign: "left"}}> 
                            <h6>Name</h6>
                        </div>
                        <div className="col col-sm-4" style={{padding: "0.5rem 1rem 0rem 0rem", maxWidth: "5rem"}}> 
                            <h6>Balance</h6>
                        </div>
                    </div>
                    <div className="row no-gutters listPortions">
                        <div className="col col-sm-12"> 
                            {
                            Portions.map((elem, i) => {
                                let color;
                                i % 2 === 0 ? color="rgba(235,244,255,0.75)" : "white";
                                if (this.state.classId !== elem.name) {
                                return (
                                <div id={elem.name} className="row no-gutters portionInHere" key={i*6} style={{background: color}} onClick={this.handlePortion}>
                                    <div id={elem.name} className="col col-sm-8 namePortionClosed" style={{paddingLeft: "3rem", maxWidth: "17rem"}}>
                                    {elem.name}
                                    </div>
                                    <div id={elem.name} className="col col-sm-4 balancePortion" style={{paddingRight: "1rem", maxWidth: "5rem"}}>
                                        {elem.balance} <span>{elem.currency}</span>
                                    </div>
                                </div> 
                                )
                                } else {
                                console.log(elem);
                                return (
                                <div id={elem.name} className="row no-gutters portionInHere" key={i*6} style={{background: color}} onClick={this.handlePortion}>
                                    <div id={elem.name} className="col col-sm-8 namePortionOpened" style={{paddingLeft: "3rem", maxWidth: "17rem"}}>
                                        {elem.name}
                                        <hr />
                                        <div className="row no-gutters"> <div className="col col-sm-10"><h6>{elem.sender[0]}</h6></div></div>
                                        <div className="row no-gutters"> <div className="col col-sm-10"><h6>{elem.sender[1]}</h6></div></div>
                                        <div className="row no-gutters"> <div className="col col-sm-10"><h6>{elem.sender[2]}</h6></div></div>

                                        <div className="row no-gutters"> <button className="btn btn-info" style={{marginTop: "1rem"}}>Add sender</button></div>
                                    </div>
                                    <div id={elem.name} className="col col-sm-4 balancePortion" style={{paddingRight: "1rem", maxWidth: "5rem"}}>
                                        {elem.balance} <span>{elem.currency}</span>
                                    </div>
                                </div> 
                                )
                                }}
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PortionsPage;
