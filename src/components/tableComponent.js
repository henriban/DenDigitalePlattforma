import React from 'react';

import Informanter from '../data/informanter';
import '../styles/table.css';

const columns = [
    {
        key: 'id',
        name: 'Inf.'
    },
    {
        key: 'area',
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
        key: 'born',
        name: 'Fødselstidspunkt'
    },
    {
        key: 'recordingTime',
        name: 'Opptakstidspunkt'
    },
    {
        key: 'education',
        name: 'Utdanning'
    },
    {
        key: 'profession',
        name: 'Yrke'
    },
    {
        key: 'parents',
        name: 'Foreldrebakgrunn'
    }
];

class Table extends React.Component{
    constructor(props){
        super(props);
        this.onRowClicks = this.onRowClicks.bind(this);
    }

    getRows(){
        let rows = [];
        Informanter.map(item =>
            rows.push({
                id: item.id,
                area: item.place.trim(),
                gender: item.gender.trim(),
                age: item.age.split(" ").slice(1).join(" ").trim(),
                born: item.birth.trim(),
                recordingTime: item.date_of_recording.trim(),
                education: item.education.trim(),
                profession: item.occupation.trim(),
                parents: item.parents_background.trim()
            })
        );
        return rows;
    }

    generateHeaders(){
        return columns.map(function(column) {
            return <th key={column.key}>{column.name}</th>;
        });
    }


    generateRows () {
        const self = this;
        let i = 0;
        return this.getRows().map(function (item) {
            let cells = columns.map(function (column) {
                return <td key={i++} >{item[column.key]}</td>;
            });
            return <tr className="row" onClick={() => {this.onRowClicks(item.id)}} key={i++}>{cells}</tr>;
        }.bind(self));
    }

    onRowClicks(id) {

        this.props.onRowClick(id);
        console.log(id);
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