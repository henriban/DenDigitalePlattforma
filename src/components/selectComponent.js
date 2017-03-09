import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

function logChange(val) {
    console.log("Selected: " + val);
}

const select =  ({label, data}) => (
    <div className="selectItem">
        <span>{label}:</span>
        <Select
                name="form-field-name"
                value="one"
                options={data}
                onChange={logChange}
        />
    </div>
);

export default select;