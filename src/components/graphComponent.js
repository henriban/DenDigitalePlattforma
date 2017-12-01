import React from 'react';
import { VictoryStack, VictoryGroup, VictoryChart, VictoryBar } from 'victory';

let data = [
    {variable: "Mann frå Dhal", count: 2},
    {variable: "Kvinne frå Dhal", count: 5},
    {variable: "Mann frå Dhale", count: 10}
];

let key = 0;

const graph = () => (
    <VictoryChart domainPadding={{ x: 50 }} width={1000} height={200}>
        <VictoryGroup>
            <VictoryStack>
                {data.map(item => {
                    return <VictoryBar key={key++} data={item} x="variable" y="count"/>
                })}
            </VictoryStack>
        </VictoryGroup>

    </VictoryChart>
);

export default graph;