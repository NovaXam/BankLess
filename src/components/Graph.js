import React from 'react';
import graph from '../assets/graphs.png';
import '../style/graph.css';
import {PieChart} from 'react-easy-chart';
import { PortionList } from '../components/PortionsList';
import {Legend} from 'react-easy-chart';


const Graph = (props) => {
    const dat = [];
    const log = [];
    console.log('data', props);
    props.portions.map((elem, i) => {
        const porID = `${Object.keys(elem)[0]}`;
        log.push({key: elem.name, value: elem.balance});
        return dat.push({key: elem.name, value: elem.balance})
     });
 
    log.sort();
    var log2 = log.slice(0,3);

     const defaultStyles = {
        '.legend': {
          'list-style': 'none',
          margin: 0,
          padding: 0,
          fontSize: '0.8em'
        },
      };

    return (
        <div className="col col-xm-8 graphs"> 
            <div>
                <h3></h3>
            </div>
            <PieChart 
                  size={170} 
                  innerHoleSize={70}
                  styles={{fontSize: '10px'}}
                  data={dat} />
            <Legend data={log2} dataId={'key'} styles={defaultStyles}  horizontal/>              
        </div>
    );

};

export default Graph;


