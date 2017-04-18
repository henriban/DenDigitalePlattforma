import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

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

        this.props.onSelectUpdate(this.props.res, newValue);
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