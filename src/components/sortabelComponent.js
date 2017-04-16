import React from 'react';
import ReactDataGrid from 'react-data-grid';
//import Toolbar from 'react-data-grid-addons';

import Informater from '../data/informanter';

const RowRenderer = React.createClass({

    render() {
        return (<div style={{cursor: "pointer"}} onClick={this.onClick}><ReactDataGrid.Row ref="row" {...this.props}/></div>)
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
        console.log("clicked")
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
                    rowRenderer={RowRenderer}

                />
            </div>
        );
    }
});

/*toolbar={<Toolbar enableFilter={true}/>}
 onAddFilter={this.handleFilterChange}
 onClearFilters={this.onClearFilters}*/

export default Sortable;