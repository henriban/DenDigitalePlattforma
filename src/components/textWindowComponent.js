import React from 'react';

import Informers from '../data/informers';

import InformantInfoText from './informantInfoTextComponent';
import Word from './textWindowWordComponent';

import '../styles/textWindow.css';

const REGEX = new RegExp("([@#*¤%¨‘~+§{}])", "g");

let infToStore;
let isLocalStorageSet;
let needBuildWordList = false;
let clickableWordCount;

class Result extends React.Component {       

    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.state = {
            showSecondInf: false,
            x: 0,
            y: 0
        };

        infToStore = Informers.find(x => x.id === this.props.inf).audio.split(".")[0];
        isLocalStorageSet = this.isInformersLocalStorageSet(infToStore);

        if(!isLocalStorageSet){
            localStorage.setItem(infToStore, JSON.stringify([]));
            needBuildWordList = true;
        }
    }

    componentWillMount(){
        document.addEventListener("keydown", this.onKeyPushed);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.onKeyPushed);
    }

    onCloseClick(e){
        e.preventDefault();
        this.props.onCloseClick(0);
    }

    _onMouseMove(e) {
        // this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
        this.setState({ x: e.clientX, y: e.clientY });
    }

    onInfClick(e){
        this.setState({ showSecondInf: !this.state.showSecondInf});
    }

    onKeyPushed  = (event) => {
        if(event.key === 'Escape'){
            this.onCloseClick(event);
        }else if (event.code === "Space"){
            event.preventDefault();
        }
    };

    isInformersLocalStorageSet(infID) {
        return localStorage.getItem(infID) != null && localStorage.getItem(infID).length > 0;
    }

    addWordInLocalStorage(infID){
        let wordList = JSON.parse(localStorage.getItem(infID));
        wordList.push("");
        localStorage.setItem(infID, JSON.stringify(wordList));
    }

    generateText(){

        const id = this.props.inf;

        let inf1 = Informers.find(inf => inf.id === id);
        const text = inf1.text;

        let key = 0;
        clickableWordCount = 0;

        return(
            // Splits the line on br and check if line contains a symbol.
            <div>{text.split("\n").map(line => {
                if(line.match(REGEX)) {
                    let infNumber = line.split(":")[0].trim();  // Find the informant number to the line
                    return <div key={key++}>{
                        line.split(" ")
                            .map(word => {
                                if(word.indexOf(word.match(REGEX)) !== -1){

                                    if(needBuildWordList){
                                        this.addWordInLocalStorage(infToStore);
                                    }

                                    return <Word key={key++}
                                                 wordIndex={clickableWordCount++}
                                                 word={word}
                                                 infToStore={infToStore}
                                                 inf={infNumber}
                                                 mouseX={this.state.x}
                                                 mouseY={this.state.y}/>;
                                }else{
                                    return <span key={key++}>{word} </span>
                                }
                            })
                    }</div>
                } else {
                    return <div key={key++}>{line}</div>
                }
            })}
            </div>
        );
    }

    render(){
        // const {x, y} = this.state;
        const id = this.props.inf;

        let inf1 = Informers.find(x => x.id === id);

        // const text = inf1.text;

        const url = require("../static/" + inf1.audio);

        let idString = inf1.audio.split("_")[1].split("og");
        let id2 = "";
        if(id === idString[0]) {
            id2 = idString[1].split(".")[0];
        }else{
            id2 = idString[0];
        }

        let inf2 = Informers.find(x => x.id === id2);

        // let key = 0;
        // let clickableWordCount = 0;

        return(
            <div className="resultBackground" >

                <div className="resultContainer" onMouseDown={this._onMouseMove.bind(this)}>
                    {/*<h1>Mouse coordinates: \n { x } { y }</h1>*/}
                    <div className="textWindowHeader">
                        <button className="closeButton" onClick={this.onCloseClick} href='#'>x</button>
                    </div>

                    <div className="textWindowContent">
                        <div className="firstInfPanel">
                            <h2 id="headline">{inf1.age.split(" ")[0]} {inf1.gender.toLowerCase()} frå {inf1.place}</h2>
                            <InformantInfoText informant={inf1}/>

                            {
                                !this.state.showSecondInf &&
                                <span className="secondInfPanel" onClick={() => this.onInfClick()}><b>{inf2.id.split("p")[0]}: {inf2.age.split(" ")[0]} {inf2.gender.toLowerCase()} frå {inf2.place}</b></span>
                            }
                            {
                                this.state.showSecondInf &&
                                <div className="secondInfPanel" onClick={() => this.onInfClick()}>
                                    <span><b>{inf2.id.split("p")[0]}: {inf2.age.split(" ")[0]} {inf2.gender.toLowerCase()} frå {inf2.place}</b></span>
                                    <InformantInfoText informant={inf2}/>
                                </div>
                            }
                        </div>

                        <div className="text">
                            {this.generateText()}
                            {needBuildWordList = false}
                        </div>
                    </div>

                    <audio
                        src={url}
                        style={{width : 1000, margin: "auto", padding: 10}}
                        controls controlsList="nodownload"/>
                </div>
            </div>
        )
    }
}

export default Result;