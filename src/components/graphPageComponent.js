import React from 'react';

import Graph from './graphComponent';
import GraphSearch from './graphSearchComponent';
// import GraphTraitsSelection from './graphTraitsSelectionComponent';

import '../styles/graph.css';

class GraphPage extends React.Component {

    render(){
        return(
            <div>
                <div className="graphSearchArea">
                    <GraphSearch />
                    {/*<GraphTraitsSelection />*/}
                </div>
                <div className="graphPage">
                    <Graph label="Infinitiv"/>
                    <Graph label="Ao-lyden"/>
                    <Graph label="Bunden form eintal av sterke hokjønnssubstantiv og fleirtal av inkjekjønnssubstantiv"/>
                    <Graph label="Bunden form fleirtal av hokjønns- og hannkjønnssubstantiv"/>
                    <Graph label="Segmentering av ll > dl"/>
                    <Graph label="Differensiering av rn > dn"/>
                </div>
            </div>
        );
    }
}

export default GraphPage;