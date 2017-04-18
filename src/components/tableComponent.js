import React from 'react';

import '../styles/table.css';

const columns = [
    {
        key: 'id',
        name: 'Inf.'
    },
    {
        key: 'place',
        name: 'Stad'
    },
    {
        key: 'gender',
        name: 'Kjønn'
    },
    {
        key: 'age',
        name: 'Alder'
    },
    {
        key: 'birth',
        name: 'Fødselstidspunkt'
    },
    {
        key: 'date_of_recording',
        name: 'Opptakstidspunkt'
    },
    {
        key: 'education',
        name: 'Utdanning'
    },
    {
        key: 'occupation',
        name: 'Yrke'
    },
    {
        key: 'parents_background',
        name: 'Foreldrebakgrunn'
    }
];

class Table extends React.Component{
    constructor(props){
        super(props);
        this.onRowClicks = this.onRowClicks.bind(this);
    }


    generateHeaders(){
        return columns.map(function(column) {
            return <th key={column.key}>{column.name}</th>;
        });
    }


    generateRows () {
        const self = this;
        let i = 0;

        let rows = this.props.rows;

        return rows.map(function (item) {
            let cells = columns.map(function (column) {
                return <td key={i++} >{item[column.key]}</td>;
            });
            return <tr className="row" onClick={() => {this.onRowClicks(item.id)}} key={i++}>{cells}</tr>;
        }.bind(self));
    }

    // filterTable(searchList){
    //     console.log(searchList);
    //     let rows = this.state.rows;
    //     this.setState({rows: rows.filter(x => x.gender.includes("Mann"))});
    // }

    onRowClicks(id) {
        this.props.onRowClick(id);
    }

    render(){
        let headerComponents = this.generateHeaders();
        let rowComponents = this.generateRows();

        return (
            <table>
                <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    }
}

export default Table;