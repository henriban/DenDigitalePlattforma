import React from 'react';
// import { VictoryStack, VictoryGroup, VictoryChart, VictoryBar } from 'victory';
import { VictoryGroup, VictoryChart, VictoryBar } from 'victory';

// import testData from '../data/testDataGraph';
//
// let data = [
//     {variable: "Mann frå Dhal", count: 2},
//     {variable: "Kvinne frå Dhal", count: 5},
//     {variable: "Mann frå Dhale", count: 10}
// ];
      
  
class graph extends React.Component{

    // constructor(props){
    //     super(props);
    // }
 
    render() {
        return (
            <div className="graph">
                <p className="graphLabel">{this.props.label}</p>
                {/*<VictoryChart domainPadding={{x: 50}} width={450} height={450}>*/}
                <VictoryChart>
                    <VictoryGroup offset={5}
                                  colorScale={"qualitative"}>
                        {/*<VictoryStack>*/}
                        {/*{data.map(item => {*/}
                        {/*console.log(item);*/}
                        {/*return <VictoryBar key={key++} data={item} x="variable" y="count"/>*/}
                        {/*})}*/}
                        {/*</VictoryStack>*/}
                        <VictoryBar
                            data={[{x: 1, y: 1}, {x: 2, y: 4}, {x: 3, y: 5}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 5}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 5}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 5}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]}
                        />

                    </VictoryGroup>

                </VictoryChart>
            </div>
        );
    }
}

export default graph;    