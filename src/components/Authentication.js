import React from 'react';
import '../style/authenticate.css';
import Bankless from '../assets/bankless24-logo.jpg';

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
                    <div className="col col-sm-12">
                        <a href="" className="btn btn-primary">PRESS TO START</a>
                    </div>
                </ div>
            </div>
        </div>
    )
};

export default Authentication;