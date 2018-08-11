import React from 'react';
import PopUp from './popUpComponent';

import Symbols from '../data/symbols';

const REGEX = new RegExp("([@#*¤%¨‘~+§{}])", "g");

let style = { 
  color: "blue"
};

class Word extends React.Component{

    constructor(props){
        super(props);         

        this.state = {
            word: this.props.word, //Word + symbol (something*)
            inf: this.props.inf,
            wordIndex: this.props.wordIndex,
            infLocalStorage: this.props.infLocalStorage,

            showPopUp: false,
            popUpWord: "404",
            popUpAlternative1: "",
            popUpAlternative2: "",

            buttonClicked: "null",
        };
    }

    onWordClick(symbol, word){
        word = Word.trimWord(word, symbol);

        let alternative1 = "";
        let alternative2 = "";

        if(symbol === Symbols.infinitiv_a || symbol === Symbols.infinitiv_e){
            alternative1 = "a";
            alternative2 = "e";
        }else if(symbol === Symbols.ao || symbol === Symbols.å){
            alternative1 = "ao";
            alternative2 = "å";
        }else if(symbol === Symbols.bundanForm_i || symbol === Symbols.bundanForm_a){
            alternative1 = "i";
            alternative2 = "a";
        }else if(symbol === Symbols.adnedn || symbol === Symbols.aneene){
            alternative1 = "adn/edn";
            alternative2 = "ane/ene";
        }else if(symbol === Symbols.dl || symbol === Symbols.ll){
            alternative1 = "dl";
            alternative2 = "ll";
        }else if(symbol === Symbols.dn || symbol === Symbols.rn){
            alternative1 = "dn";
            alternative2 = "rn";
        }

        this.setState({
            showPopUp: !this.state.showPopUp,
            popUpWord: word,
            popUpAlternative1: alternative1,
            popUpAlternative2: alternative2,
            activeButton: this.getActiveButtonFromLocalStorage(),
        });
    }

    getActiveButtonFromLocalStorage(){
        console.log("getActiveButtonFromLocalStorage", JSON.parse(localStorage.getItem(this.state.infLocalStorage))[this.state.wordIndex]);
        let symbol = JSON.parse(localStorage.getItem(this.state.infLocalStorage))[this.state.wordIndex];
        if(symbol === this.state.popUpAlternative1){
            return "btn1"
        }else if(symbol === this.state.popUpAlternative2){
            return "btn2"
        }else if(symbol === "Annet"){
            return "Annet"
        }
        return null;
    }

    static trimWord(word, symbol){
        return word.split(symbol)[0];
    }

    onButtonClicked = (symbol, button) =>{
        this.setState({
            activeButton: button
        });

        // Register which button that is pressed
        let wordList = JSON.parse(localStorage.getItem(this.state.infLocalStorage));
        wordList[this.state.wordIndex] = symbol;
        localStorage.setItem(this.state.infLocalStorage, JSON.stringify(wordList));
    };

    //TODO: showPopUp globally (only on window at the time)
    render(){

        let symbol = this.state.word.match(REGEX)[0];

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
                <span onClick={() => this.onWordClick(symbol, this.state.word)}
                      style={style}
                      key={this.id}>{Word.trimWord(this.state.word, symbol)} </span>
            </span>
        );
    }
}

export default Word;