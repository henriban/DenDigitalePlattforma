import React from 'react';
import '../styles/popUp.css';

class popUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            btn1: this.props.btn1,
            btn2: this.props.btn2
        };
    }

    render(){
        return (
            <div className="popUpWrapper">
                <p>{this.state.text}</p>
                <div className="popUpButtonContainer">
                    <button>{this.state.btn1}</button>
                    <button>{this.state.btn2}</button>
                </div>
            </div>
        );
    }

}

export default popUp;