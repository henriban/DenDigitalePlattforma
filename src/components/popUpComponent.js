import React from 'react';
import '../styles/popUp.css'; 

class popUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            btn1: this.props.btn1,
            btn2: this.props.btn2,
            btn3: "Annet",
            inf: this.props.inf,
            activeButton: this.props.activeButton,
            mouseX: this.props.mouseX // So that more than one popUp can be showed
        };
    }

    buttonClicked(symbol, btn){
        this.props.onButtonClicked(btn);
    }

    render(){
        console.log("Active", this.state.activeButton);
        return (
            <div className="popUpWrapper" style={{left: this.state.mouseX + 170 + 340}}>
                <p>{this.state.text}</p>
                <div className="popUpButtonContainer">
                    <button onClick={() => this.buttonClicked(this.state.btn1, "btn1")} style={this.state.activeButton === ("btn1") ? {color: "#F00"}: null}>{this.state.btn1}</button>
                    <button onClick={() => this.buttonClicked(this.state.btn2, "btn2")} style={this.state.activeButton === ("btn2") ? {color: "#F00"}: null}>{this.state.btn2}</button>
                </div>
                <button id="btnA" onClick={() => this.buttonClicked(this.state.btn3, "btnA")} style={this.state.activeButton === ("btnA") ? {color: "#F00"}: null}>{this.state.btn3}</button>
            </div>
        );
    }
}

export default popUp;