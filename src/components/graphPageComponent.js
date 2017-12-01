import React from 'react';

import Graph from './graphComponent';
import GraphSearch from './graphSearchComponent';
import GraphTraitsSelection from './graphTraitsSelectionComponent'

class GraphPage extends React.Component {

    render(){
        return(
            <div className="graphPage">
                <Graph />
                <div className="graphSearchArea">
                    <GraphSearch />
                    <GraphTraitsSelection />
                </div>
            </div>
        );
    }
}

export default GraphPage;