import React from 'react';

import CheckboxComponent from './checkboxClusterComponent';
import Variables from '../data/searchVariables';

import '../styles/checkbox.css';

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