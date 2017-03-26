import React from 'react';
import ReactDataGrid from 'react-data-grid';

const Sortable = React.createClass({
    getInitialState() {
        this._columns = [
            {
                key: 'name',
                name: 'Inf.',
                width: 50,
                locked: true
            },
            {
                key: 'gender',
                name: 'Kjønn',
                width: 200,
                sortable: true
            },
            {
                key: 'age',
                name: 'Alder',
                width: 200,
                sortable: true
            },
            {
                key: 'born',
                name: 'Fødselstidspunkt',
                width: 200,
                sortable: true
            },
            {
                key: 'recordingTime',
                name: 'Opptakstidspunkt',
                width: 200,
                sortable: true
            },
            {
                key: 'education',
                name: 'Utdanning',
                width: 200,
                sortable: true
            },
            {
                key: 'profession',
                name: 'Yrke',
                width: 200,
                sortable: true
            },
            {
                key: 'parents',
                name: 'Foreldrebakgrunn',
                width: 200,
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

    createRows() {
        let rows = [];
        for (let i = 1; i < 100; i++) {
            rows.push({
                name: i,
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

    render() {
        return  (
            <ReactDataGrid
                onGridSort={this.handleGridSort}
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight={500} />);
    }
});


export default Sortable;


