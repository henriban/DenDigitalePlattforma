import React from 'react'
import Checkbox from './checkboxComponent';

import Informanter from '../data/informanter';

let key = 0;

let checkStr = [];
let activeRows = [];

export default class checkboxComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            res: this.props.res,
            filterRows: {
                place: [],
                gender: [],
                age: [],
                birth: [],
                date_of_recording: [],
                education: [],
                occupation: [],
                parents_background: [],
                panel: []
            },
        };

        activeRows = this.initRows();
    } 
  
    initRows(){
        let rows = [];
        Informanter.map(item =>
            rows.push({
                id: item.id,
                place: item.place.trim(),
                gender: item.gender.trim(),
                age: item.age.trim(),
                birth: item.birth.trim(),
                date_of_recording: item.date_of_recording.trim(),
                education: item.education.trim(),
                occupation: item.occupation.trim(),
                parents_background: item.parents_background.trim(),
                panel: item.panel.trim()
            })
        );

        return rows;
    }   
     
   
    setLabelCheckStr(label){
        if(!checkStr.includes(label)){
            checkStr.push(label);
        }else {
            this.removeLabelCheckStr(label)
        }
    }

    removeLabelCheckStr(label){
        let index = checkStr.indexOf(label);
        checkStr.splice(index, 1);
    }

    toggleCheckbox = (label, res) => {
        if(label.includes(this.props.label)){
            this.setState({
                isChecked: !this.state.isChecked
            });
            // Remove checked labels from checkStr in cluster (when cluster label clicked or add/remove single labels
            this.state.isChecked ?
            this.props.data.map(item => this.removeLabelCheckStr(item.label)) :
            this.props.data.map(item => this.setLabelCheckStr(item.label));
        }else{
            this.setLabelCheckStr(label)
        }

        // It's works, but I don't know why
        //      Updates filterRows, but just on res (copy the checkStr into only on res)
        //      TODO: fix this
        let new_filterRows = this.state.filterRows;
        new_filterRows[res] = checkStr;


        let newFilteredRows = [];

        // Filter the rows, if the filter is empty don't do anything. If not empty iterate through Informanter and find matches
        if(activeRows.length > 0){
            this.state.filterRows[res].map(filter => !filter.length ? null :
                activeRows.map(inf => inf[res].includes(filter) ? newFilteredRows.push(inf) : null ));
        }else{
            this.state.filterRows[res].map(filter => !filter.length ? null :
                Informanter.map(inf => inf[res].includes(filter) ? newFilteredRows.push(inf) : null ));
        }

        activeRows = newFilteredRows;
        // console.log(activeRows);
        this.props.onCheckUpdate(checkStr, res);
    };

    render(){
        return(
            <div className="checkboxItem">
                <Checkbox label={this.props.label} handleCheckboxChange={this.toggleCheckbox} checked={this.state.isChecked} res={this.props.res}/>
                <div className="childCheckbox">
                    {this.props.data.map(item => {
                        return(
                            <Checkbox label={item.label} handleCheckboxChange={this.toggleCheckbox} key={key++} checked={this.state.isChecked} res={this.props.res}/>
                        );})}
                </div>
            </div>
        );
    }
}