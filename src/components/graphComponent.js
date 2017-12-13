import React from 'react';
import {VictoryLegend, VictoryGroup, VictoryChart, VictoryBar } from 'victory';
  
class graph extends React.Component{
  
    render() {
        return (
            <div className="graph">
                <p className="graphLabel">{this.props.label}</p>
                {/*<VictoryChart domainPadding={{x: 50}} width={450} height={450}>*/}
                <VictoryChart domainPadding={{x: 50}} animate={{duration: 100}}>
                    <VictoryGroup offset={30} colorScale={"qualitative"}>
                        <VictoryLegend x={0} y={0}
                        
                            className="graphLegend"
                            title="Legend"
                            centerTitle
                            orientation="horizontal"
                            gutter={20}
                            style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                            data={[
                                { name: "Two", symbol: { fill: "orange" } },
                                { name: "Three", symbol: { fill: "gold" } }
                            ]}
                        />
                        <VictoryBar
                            data={this.props.data}
                            x="label"
                            y="count"
                        />
                        <VictoryBar
                            data={this.props.data}
                            x="label"
                            y="count"
                        />
                    </VictoryGroup>
                </VictoryChart>
            </div>
        );
    }
}

export default graph;    