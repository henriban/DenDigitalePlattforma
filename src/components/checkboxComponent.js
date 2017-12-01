import React from 'react'
import Checkbox from './Checkbox';

let key = 0;

let checkStr = [];

export default class checkboxComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
    }

    toggleCheckbox = label => {
        if(label.includes("Stad")){
            this.setState({
                isChecked: !this.state.isChecked
            });
        }
        if(!checkStr.includes(label)){
            checkStr.push(label);
        }else {
            let index = checkStr.indexOf(label);
            checkStr.splice(index, 1);
        }
        console.log(checkStr);

        /*
        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        console.log(this.selectedCheckboxes)
        */
    };

    render(){
        return(
            <div className="checkboxItem">
                <Checkbox label={this.props.label} handleCheckboxChange={this.toggleCheckbox} checked={this.state.isChecked}/>
                <div className="childCheckbox">
                    {this.props.data.map(item => {
                        return(
                            <Checkbox label={item.label} handleCheckboxChange={this.toggleCheckbox} key={key++} checked={this.state.isChecked}/>
                        );})}
                </div>
            </div>
        );
    }
}