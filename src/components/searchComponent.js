import React from 'react';

import SelectItem from './selectComponent';
import '../styles/search.css';

const place = [
    { value: 'fjøra',   label: 'Fjøra' },
    { value: 'dalen',   label: 'Dalen' },
    { value: 'norane',  label: 'Norane' }
];

const gender = [
    { value: 'kvinne',  label: 'Kvinne' },
    { value: 'mann',    label: 'Mann' },
];

const age = [
    { value: 'Ungdom 13 – 25',      label: 'Ungdom 13 – 25' },
    { value: 'Ung 26 – 40',         label: 'Ung 26 – 40' },
    { value: 'Middelaldra 41 - 60', label: 'Middelaldra 41 - 60' },
    { value: 'Eldre 61 –',          label: 'Eldre 61 –' },
];

const date_of_recording = [
    { value: '1996',       label: '1996' },
    { value: '2001',       label: '2001' },
    { value: '2016',       label: '2016' },
    { value: '2017',       label: '2017' },
];

const education = [
    { value: 'grunnskule',     label: 'Grunnskule' },
    { value: 'vidaregåande',     label: 'Vidaregåande' },
    { value: 'høgskule',     label: 'Høgskule' }
];

const occupation = [
    { value: 'elev',        label: 'Elev' },
    { value: 'primær',      label: 'Primær' },
    { value: 'sekundær',    label: 'Sekundær' },
    { value: 'tertiær',     label: 'Tertiær' },
];

const parents_background = [
    { value: 'ingen',   label: 'Ingen frå Sogndal' },
    { value: 'mor',     label: 'Mor frå Sogndal' },
    { value: 'far',     label: 'Far frå Sogndal' },
    { value: 'begge',   label: 'Begge frå Sogndal' }
];

const birth = [
    { value: '1911 – 1940',       label: '1911 – 1940' },
    { value: '1941 – 1970',       label: '1941 – 1970' },
    { value: '1971 – 2000',       label: '1971 – 2000' },
    { value: '2001 –',            label: '2001 –' }
];


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            filterRows: {
                place: '',
                gender: '',
                age: '',
                birth: '',
                date_of_recording: '',
                education: '',
                occupation: '',
                parents_background: ''
            }
        };
    }

    handleChange(res, value){
        let new_filterRows = this.state.filterRows;

        if(value === null){
            value = '';
        }

        new_filterRows[res] = value;
        this.setState({ filterRows: new_filterRows });

        this.props.onSearchChange(this.state.filterRows);
    }

    render(){
        return(
            <div>
                <div className="selectWrapper">
                    <SelectItem  onSelectUpdate={this.handleChange} label="Stad"               data={place} res="place"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Kjønn"              data={gender} res="gender"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Alder"              data={age} res="age"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Fødselstidspunkt"   data={birth} res="birth"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Opptakstidspunkt"   data={date_of_recording} res="date_of_recording"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Utdanning"          data={education} res="education"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Yrke"               data={occupation} res="occupation"/>
                    <SelectItem  onSelectUpdate={this.handleChange} label="Foreldrebakgrunn"   data={parents_background} res="parents_background"/>
                </div>
                {/* TODO: Reset button*/}
            </div>
        );
    }
}

export default Search;