import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

const INFORMANTER = require('../data/informanter.js');

const select = React.createClass({

    getInitialState () {
        return {
            selectValue: '',
        };
    },

    updateValue (newValue) {
        console.log('State changed to ' + newValue);
        //INFORMANTER['INF9'].map((number) => (number.contain(newValue)));
        console.log(INFORMANTER['ALL_INF'][0]['all'].length);

        const inf = INFORMANTER['INF9'];
        console.log(inf[0]['audio']);

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
})
module.exports = select;