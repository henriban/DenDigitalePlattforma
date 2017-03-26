import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

/*function logChange(val) {
    console.log("Selected: " + val);
    this.setState({
        selectValue: val
    });
}

const select =  ({label, data}) => (
    <div className="selectItem">
        <span>{label}:</span>
        <Select
                name="form-field-name"
                value="one"
                searchable={false}
                clearable={true}
                options={data}
                onChange={logChange}
        />
    </div>
);

export default select;*/


const select = React.createClass({

    getInitialState () {
        return {
            selectValue: '',

        };
    },

    updateValue (newValue) {
        console.log('State changed to ' + newValue);
        this.setState({
            selectValue: newValue
        });
    },

    render () {
        return (
            <div className="selectItem">
                <span className="section-heading">{this.props.label}:</span>
                <Select ref="stateSelect"
                        autofocus
                        options={this.props.data}
                        simpleValue
                        name="selected-state"
                        value={this.state.selectValue}
                        onChange={this.updateValue}
                        clearable={true}
                        searchable={false} />
            </div>
        );
    }
});

module.exports = select;