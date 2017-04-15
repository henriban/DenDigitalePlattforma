import React from 'react';
import ReactDataGrid from 'react-data-grid';
/*import Toolbar from 'react-data-grid-addons';*/

import Result from './resultComponent';

const rowRenderer = React.createClass({
    log: function(e) {
        console.log(e);
    },
    render: function() {
        return (<div onClick={this.log}><ReactDataGrid.Row ref="row" {...this.props}/></div>)
    }
});


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
                width: 150,
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

        this.state = {
            showResult: false
        };

        let originalRows = this.createRows(100);
        let rows = originalRows.slice(0);
        // Store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting
        return { originalRows, rows };
    },

    getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    },

    onClick(e){
        e.preventDefault();
        this.setState({showResult: !this.state.showResult})
    },

    createRows() {
        let rows = [];
        for (let i = 1; i < 11; i++) {
            rows.push({
                name: i,
                area: ['', 'Fjøra', 'Dalen', 'Norane'][Math.floor((Math.random() * 3) + 1)],
                gender: ['', 'Kvinne', 'Mann'][Math.floor((Math.random() * 2) + 1)],
                age: ['13-25', '26-40', '41-60', '60-'][Math.floor((Math.random() * 4))],
                born: ['1910-1940', '1941-1970', '1971-2000', '2001-'][Math.floor((Math.random() * 4))],
                recordingTime: ['1996', '2001', '2016', '2017'][Math.floor((Math.random() * 4))],
                education: ['Grunnskule', 'Vidaregåande', 'Høgskule'][Math.floor(Math.random() * 3)],
                profession: ['Elev', 'Primær', 'Sekundær', 'Tertiær'][Math.floor(Math.random() * 4)],
                parents: ['Ingen frå Sogndal', 'Mor frå Sogndal', 'Far frå Sogndal', 'Begge frå Sogndal'][Math.floor(Math.random() * 4)]
            });
        }

        return rows;
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
                <ReactDataGrid
                    onGridSort={this.handleGridSort}
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    minHeight={500}
                    rowRenderer={rowRenderer}


                />
                {this.state.showResult && < Result />}
            </div>
        );
    }
});

/*toolbar={<Toolbar enableFilter={true}/>}
 onAddFilter={this.handleFilterChange}
 onClearFilters={this.onClearFilters}*/

export default Sortable;


