import React from 'react';
import '../style/authenticate.css';
import Bankless from '../assets/bankless24-logo.jpg';
import Blockstack from '../BlockStackService/Blockstack';

const Authentication = (props) => {
    return (
        <div className="row no-gutters justify-content-center auth">
            <div className="col col-sm-12">
                <div className="row no-gutters mainPic">
                    <div className="col col-sm-12">
                        <img src={Bankless} alt="img" />
                    </div>
                </div>
                <div className="row no-gutters mainBut">
                    <Blockstack />
                </ div>
            </div>
        </div>
    )
};

export default Authentication;
