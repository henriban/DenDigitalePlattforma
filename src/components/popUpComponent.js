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
        this.props.onButtonClicked(symbol, btn);
        this.setState({
            activeButton: btn
        });
    }

    render(){
        // console.log("Active", this.state.activeButton);
        return (
            <div className="popUpWrapper" style={{left: this.state.mouseX + 170 + 340}}>
                <p>{this.state.text}</p>
                <div className="popUpButtonContainer">
                    <button onClick={() => this.buttonClicked(this.state.btn1, "btn1")} className={this.state.activeButton === ("btn1") ? "activeButton" : "defaultButton"}>{this.state.btn1}</button>
                    <button onClick={() => this.buttonClicked(this.state.btn2, "btn2")} className={this.state.activeButton === ("btn2") ? "activeButton" : "defaultButton"}>{this.state.btn2}</button>
                </div>
                <button id="btnA" onClick={() => this.buttonClicked(this.state.btn3, "btnA")} className={this.state.activeButton === ("btnA") ? "activeButton" : "defaultButton"}>{this.state.btn3}</button>
            </div>
        );
    }
}

export default popUp;