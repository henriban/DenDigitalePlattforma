/*import React from 'react';
import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

import Informater from '../data/informanter';

class RowRenderer extends React.Component {
    log(){

    }

    render() {
        return (<div style={{cursor: "pointer"}} onClick={this.log}><ReactDataGrid.Row ref="row" {...this.props}/></div>)
    }
}


const Sortable = React.createClass({
    getInitialState() {
        this._columns = [
            {
                key: 'name',
                name: 'Inf.',
                width: 30,

            },
            {
                key: 'area',
                name: 'Stad',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'gender',
                name: 'Kjønn',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'age',
                name: 'Alder',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'born',
                name: 'Fødselstidspunkt',
                width: 150,
                filterable: true,
                sortable: true
            },
            {
                key: 'recordingTime',
                name: 'Opptakstidspunkt',
                width: 150,
                filterable: true,
                sortable: true
            },
            {
                key: 'education',
                name: 'Utdanning',
                width: 125,
                filterable: true,
                sortable: true
            },
            {
                key: 'profession',
                name: 'Yrke',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'parents',
                name: 'Foreldrebakgrunn',
                filterable: true,
                sortable: true
            }
        ];

        return { rows: this.createRows(), filters: {}, sortColumn: null, sortDirection: null };
    },

    onRowClick(){
        console.log("clicked");
        this.props.onRowClick();
    },

    createRows() {
        let rows = [];

        Informater.map(item =>
            rows.push({
                name: item.id,
                area: item.place,
                gender: item.gender,
                age: item.age.split(" ").slice(1).join(" "),
                born: item.birth,
                recordingTime: item.date_of_recording,
                education: item.education,
                profession: item.occupation,
                parents: item.parents_background
            })
        );

        return rows;
    },

    getRows() {
        return Selectors.getRows(this.state);
    },

    getSize() {
        return this.getRows().length;
    },

    rowGetter(rowIdx) {
        const rows = this.getRows();
        return rows[rowIdx];
    },

    handleGridSort(sortColumn, sortDirection) {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
            }
        };

        const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

        this.setState({ rows });
    },

    rowGetter(i) {
        return this.state.rows[i];
    },

    handleFilterChange(filter) {
        let newFilters = Object.assign({}, this.state.filters);
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }

        this.setState({ filters: newFilters });
    },

    onClearFilters() {
        this.setState({ filters: {} });
    },

    render() {
        return  (
            <div>
                <button onClick={() => {this.onRowClick()}}>Open inf. 18</button>
                <ReactDataGrid
                    onGridSort={this.handleGridSort}
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}

                    rowRenderer={RowRenderer}

                    toolbar={<Toolbar enableFilter={true}/>}
                    onAddFilter={this.handleFilterChange}
                    onClearFilters={this.onClearFilters}
                />
            </div>
        );
    }
});


export default Sortable; */

const ReactDataGrid = require('react-data-grid');
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');
const React = require('react');

import Informater from '../data/informanter';

class RowRenderer extends React.Component {
    log(){
        console.log("A row was clicked");
    }

    render() {
        return (<div style={{cursor: "pointer"}} onClick={this.log}><ReactDataGrid.Row ref="row" {...this.props}/></div>)
    }
}

const Example = React.createClass({
    getInitialState() {

        this._columns = [
            {
                key: 'name',
                name: 'Inf.',
                width: 30,

            },
            {
                key: 'area',
                name: 'Stad',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'gender',
                name: 'Kjønn',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'age',
                name: 'Alder',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'born',
                name: 'Fødselstidspunkt',
                width: 150,
                filterable: true,
                sortable: true
            },
            {
                key: 'recordingTime',
                name: 'Opptakstidspunkt',
                width: 150,
                filterable: true,
                sortable: true
            },
            {
                key: 'education',
                name: 'Utdanning',
                width: 125,
                filterable: true,
                sortable: true
            },
            {
                key: 'profession',
                name: 'Yrke',
                width: 100,
                filterable: true,
                sortable: true
            },
            {
                key: 'parents',
                name: 'Foreldrebakgrunn',
                filterable: true,
                sortable: true
            },
            {
                key: 'panel',
                name: 'Trend/Panel',
                filterable: true,
                sortable: true
            }
        ];

        return { rows: this.createRows(), filters: {}, sortColumn: null, sortDirection: null };
    },

    getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    },
    createRows() {
        let rows = [];

        Informater.map(item =>
            rows.push({
                name: item.id,
                place: item.place,
                gender: item.gender,
                age: item.age.split(" ").slice(1).join(" "),
                birth: item.birth,
                date_of_recording: item.date_of_recording,
                education: item.education,
                occupation: item.occupation,
                parents_background: item.parents_background,
                panel: item.panel
            })

        );

        return rows;
    },

    getRows() {
        return Selectors.getRows(this.state);
    },

    getSize() {
        return this.getRows().length;
    },

    rowGetter(rowIdx) {
        const rows = this.getRows();
        return rows[rowIdx];
    },

    handleGridSort(sortColumn, sortDirection) {
        this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
    },

    handleFilterChange(filter) {

        console.log(filter);

        let newFilters = Object.assign({}, this.state.filters);
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }

        this.setState({ filters: newFilters });
    },

    onClearFilters() {
        this.setState({ filters: {} });
    },

    render() {
        return  (
            <ReactDataGrid
                onGridSort={this.handleGridSort}
                enableCellSelect={true}
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this.getSize()}
                minHeight={500}
                toolbar={<Toolbar enableFilter={true}/>}
                onAddFilter={this.handleFilterChange}
                onClearFilters={this.onClearFilters}

                rowRenderer={RowRenderer}/>);
    }
});

export default Example;