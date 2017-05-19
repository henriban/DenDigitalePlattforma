import React from 'react';

import '../styles/table.css';

const columns = [
    {
        key: 'id',
        name: 'Inf.',
        num: 0
    },
    {
        key: 'place',
        name: 'Stad',
        num: 1
    },
    {
        key: 'gender',
        name: 'Kjønn',
        num: 2
    },
    {
        key: 'age',
        name: 'Alder',
        num: 3
    },
    {
        key: 'birth',
        name: 'Fødselstidspunkt',
        num: 4
    },
    {
        key: 'date_of_recording',
        name: 'Opptakstidspunkt',
        num: 5
    },
    {
        key: 'education',
        name: 'Utdanning',
        num: 6
    },
    {
        key: 'occupation',
        name: 'Yrke',
        num: 7
    },
    {
        key: 'parents_background',
        name: 'Foreldrebakgrunn',
        num: 8
    },
    {
        key: 'panel',
        name: 'Trend/Panel',
        num: 9
    }
];

class Table extends React.Component{
    constructor(props){
        super(props);
        this.onRowClicks = this.onRowClicks.bind(this);
    }


    generateHeaders(){
        return columns.map(function(column) {
            return <th key={column.key} onClick={() => {this.sortTable(column.num)}}>{column.name}</th>;
        }.bind(this));
    }

    sortTable(n) {

        let rows, i, x, y, shouldSwitch, dir, switchcount = 0;
        let table = this.refs.filteredTable;
        let switching = true;

        dir = "asc";

        while (switching) {

            switching = false;
            rows = table.getElementsByTagName("TR");

            for (i = 1; i < (rows.length - 1); i++) {

                shouldSwitch = false;

                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];

                if (dir === "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
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

    onRowClicks(id) {
        this.props.onRowClick(id);
    }

    render(){
        let headerComponents = this.generateHeaders();
        let rowComponents = this.generateRows();

        return (
            <table ref="filteredTable">
                <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    }
}

export default Table;