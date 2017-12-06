import React from 'react';
import '../styles/popUp.css';

class popUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            btn1: this.props.btn1,
            btn2: this.props.btn2,
            btn3: "Annet"
        };
    }

    buttonClicked(symbol){

    }

    render(){
        return (
            <div className="popUpWrapper">
                <p>{this.state.text}</p>
                <div className="popUpButtonContainer">
                    <button onClick={() => this.buttonClicked(this.state.btn1)}>{this.state.btn1}</button>
                    <button onClick={() => this.buttonClicked(this.state.btn2)}>{this.state.btn2}</button>
                </div>
                <button id="annetButton" onClick={() => this.buttonClicked(this.state.btn3)}>{this.state.btn3}</button>
            </div>
        );
    }
}

export default popUp;