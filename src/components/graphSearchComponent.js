import React from 'react';

import CheckboxComponent from './checkboxComponent';
import Variables from '../data/searchVariables';

import '../styles/checkbox.css';

/*
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
    { value: 'grunnskule',   label: 'Grunnskule' },
    { value: 'vidaregåande', label: 'Vidaregåande' },
    { value: 'høgskule',     label: 'Høgskule' }
];

const occupation = [
    { value: 'elev',        label: 'Elev' },
    { value: 'primær',      label: 'Primær' },
    { value: 'sekundær',    label: 'Sekundær' },
    { value: 'tertiær',     label: 'Tertiær' },
    { value: 'toppleiar',   label: 'Toppleiar' },
    { value: 'pensjonist ', label: 'Pensjonist ' }
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

const panel = [
    { value: 'panel',     label: 'Panel' },
    { value: 'trend',     label: 'Trend' }
];
*/

export default class graphSelectComponent extends React.Component{

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    };


    toggleCheckbox = label => {
        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        console.log(this.selectedCheckboxes)
    };

    render(){
        return(
            <div className="checkboxSearchWrapper">
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Stad"               data={Variables.place}              res="place"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Kjønn"              data={Variables.gender}             res="gender"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Alder"              data={Variables.age}                res="age"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Fødselstidspunkt"   data={Variables.birth}              res="birth"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Opptakstidspunkt"   data={Variables.date_of_recording}  res="date_of_recording"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Utdanning"          data={Variables.education}          res="education"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Yrke"               data={Variables.occupation}         res="occupation"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Foreldrebakgrunn"   data={Variables.parents_background} res="parents_background"/>
                <CheckboxComponent onCheckUpdate={this.toggleCheckbox} label="Type informant"     data={Variables.panel}              res="panel"/>
            </div>
        );
    }
}