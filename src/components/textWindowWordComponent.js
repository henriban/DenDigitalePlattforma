import React from 'react';
import PopUp from './popUpComponent';

const REGEX = new RegExp("([@#*¤%¨‘~+§{}])", "g");

const infinitiv_a = "*";   
const infinitiv_e = "‘";

const ao = "@";
const å = "#";
 
const bundanForm_i = "¤";
const bundanForm_a = "%";

const adnedn = "~";
const aneene = "¨";

const dl = "+";
const ll = "§";
 
const dn = "{";
const rn = "}";

let style = {
  color: "blue"
};

class Word extends React.Component{

    constructor(props){
        super(props);         
 
        this.state = {
            word: this.props.word,
            inf: this.props.inf,

            showPopUp: false,
            popUpWord: "404",
            popUpAlternative1: "",
            popUpAlternative2: "",

            buttonClicked: "null",
        };
    }

    onWordClick(symbol, word){
        let alternative1 = "";
        let alternative2 = "";

        if(symbol === infinitiv_a || symbol === infinitiv_e){
            alternative1 = "a";
            alternative2 = "r";
        }else if(symbol === ao || symbol === å){
            alternative1 = "ao";
            alternative2 = "å";
        }else if(symbol === bundanForm_i || symbol === bundanForm_a){
            alternative1 = "i";
            alternative2 = "a";
        }else if(symbol === adnedn || symbol === aneene){
            alternative1 = "adn/edn";
            alternative2 = "ane/ene";
        }else if(symbol === dl || symbol === ll){
            alternative1 = "dl";
            alternative2 = "ll";
        }else if(symbol === dn || symbol === rn){
            alternative1 = "dn";
            alternative2 = "rn";
        }

        this.setState({
            showPopUp: !this.state.showPopUp,
            popUpWord: word,
            popUpAlternative1: alternative1,
            popUpAlternative2: alternative2,
            activeButton: null,
        });

        style = {
            color: "red"
        }
    }

    trimWord(word, symbol){
        return word.split(symbol);
    }

    onButtonClicked = (button) =>{
        this.setState({
            activeButton: button
        });
    };

    //TODO: showPopUp globally (only on window at the time)
    render(){

        return(
            <span>
                {this.state.showPopUp &&
                <PopUp text={this.state.popUpWord}
                       btn1={this.state.popUpAlternative1}
                       btn2={this.state.popUpAlternative2}
                       inf={this.state.inf}
                       activeButton={this.state.activeButton}
                       onButtonClicked={this.onButtonClicked}
                       mouseX={this.props.mouseX}
                />}
                {/*OnClick find symbol and remove/trim word from symbol(ends up with symbol and word)*/}
                <span onClick={() => this.onWordClick(this.state.word.match(REGEX)[0],
                    this.trimWord(this.state.word, this.state.word.match(REGEX)[0]))} style={style}
                      key={this.id}>{this.trimWord(this.state.word, this.state.word.match(REGEX)[0])} </span>
            </span>
        );
    }
}

export default Word;