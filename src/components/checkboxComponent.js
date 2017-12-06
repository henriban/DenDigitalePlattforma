import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component{
    state = {
        isChecked: this.props.checked,
        label: this.props.label
    };

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => ({
                isChecked: !isChecked
            }
        ));

        handleCheckboxChange(label, this.props.res);
    };

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />

                    {label}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;

// import React from 'react';
//
// class Checkbox extends React.Component{
//
//     constructor(props){
//         super(props);
//         this.state = {
//             isChecked: this.props.checked,
//         }
//     }
//
//     toggleCheckboxChange() {
//         this.setState(({ isChecked }) => ({
//                 isChecked: !isChecked
//             }
//         ));
//
//         this.props.handleCheckboxChange(this.props.label);
//     };
//
//     render() {
//         const label = this.props.label;
//         const isChecked = this.state;
//         return (
//             <div>
//                 <label>
//                     <input
//                         type="checkbox"
//                         value={label}
//                         checked={isChecked}
//                         onChange={this.toggleCheckboxChange}
//                     />
//
//                     {label}
//                 </label>
//             </div>
//         );
//     }
// }
//
// export default Checkbox;