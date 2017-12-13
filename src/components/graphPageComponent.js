import React from 'react';

import Graph from './graphComponent';
import GraphSearch from './graphSearchComponent';
// import GraphTraitsSelection from './graphTraitsSelectionComponent';

// import TestData from '../data/testDataGraph';

import '../styles/graph.css';

// Test result from graphSearch
let graphSearchResult = [
    {label: "Kvinne", value: ["ing01", "ing01p", "ing02", "ing02p", "ing05", "ing06", "ing05p", "ing06p"] },
    {label: "Mann",   value: ["ing03", "inf04"]}
];
 

// const data = [{x: 1, y: 12}, {x: 2, y: 4}, {x: 3, y: 9}];

let data = [
    {label: "Mann", count: 2},
    {label: "Kvinne", count: 5}
];

class GraphPage extends React.Component {

    // addValues(index, infList){
    //     let variables = {
    //         infinitiv_a: 0,
    //         infinitiv_e: 0,
    //         ao: 0,
    //         aa: 0,
    //         bundanForm_i: 0,
    //         bundanForm_a: 0,
    //         adnedn: 0,
    //         aneene: 0,
    //         dl: 0,
    //         ll: 0,
    //         dn: 0,
    //         rn: 0
    //     }
    // }

    render(){ 

        for (let i in graphSearchResult){
            if(graphSearchResult.hasOwnProperty(i)){
         
            }
        }


        return(
            <div>
                <div className="graphSearchArea">
                    <GraphSearch />
                    {/*<GraphTraitsSelection />*/}
                </div>
                <div className="graphPage">
                    <Graph data={data} label="Infinitiv"/>
                    <Graph data={data} label="Ao-lyden"/>
                    <Graph data={data} label="Bunden form eintal av sterke hokjønnssubstantiv og fleirtal av inkjekjønnssubstantiv"/>
                    <Graph data={data} label="Bunden form fleirtal av hokjønns- og hannkjønnssubstantiv"/>
                    <Graph data={data} label="Segmentering av ll > dl"/>
                    <Graph data={data} label="Differensiering av rn > dn"/>
                </div>
            </div>
        );
    }
}

export default GraphPage;