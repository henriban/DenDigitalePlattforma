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
 
class Word extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            word: this.props.word,

            showPopUp: false,
            popUpWord: "404",
            popUpAlternative1: "",
            popUpAlternative2: "",
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
            popUpAlternative2: alternative2
        });
    }

    trimWord(word, symbol){
        return word.split(symbol);
    }

    render(){
        return(
            <span>
                {this.state.showPopUp &&
                <PopUp text={this.state.popUpWord}
                       btn1={this.state.popUpAlternative1}
                       btn2={this.state.popUpAlternative2}
                />}
                <span onClick={() => this.onWordClick(this.state.word.match(REGEX)[0],
                    this.trimWord(this.state.word, this.state.word.match(REGEX)[0]))} style={{color:"blue"}}
                      key={this.id}>{this.trimWord(this.state.word, this.state.word.match(REGEX)[0])} </span>
            </span>
        );
    }
}

export default Word;