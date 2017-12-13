import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Informanter from '../data/informanter';

import InformantInfoText from './informantInfoTextComponent';
import Word from './textWindowWordComponent';

import '../styles/textWindow.css';

const REGEX = new RegExp("([@#*¤%¨‘~+§{}])", "g");

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.state = {
            showSecondInf: false,
        };
    }

    onCloseClick(e){
        e.preventDefault();
        this.props.onCloseClick(0);
    }

    onInfClick(e){
        this.setState({ showSecondInf: !this.state.showSecondInf});
    }

    render(){
        const id = this.props.inf;

        let inf1 = Informanter.find(x => x.id === id);

        const text = inf1.text;

        const url = require("../static/" + inf1.audio);

        let idString = inf1.audio.split("_")[1].split("og");
        let id2 = "";
        if(id === idString[0]) {
            id2 = idString[1].split(".")[0];
        }else{
            id2 = idString[0];
        }

        let inf2 = Informanter.find(x => x.id === id2);

        let key = 0;

        return(
            <div className="resultBackground">

                <div className="resultContainer">
                    <div className="textWindowHeader">
                        <button className="closeButton" onClick={this.onCloseClick} href='#'>x</button>
                    </div>

                    <div className="textWindowContent">
                        <div className="firstInfPanel">
                            <h2 id="headline">{inf1.age.split(" ")[0]} {inf1.gender.toLowerCase()} frå {inf1.place}</h2>
                            <InformantInfoText informant={inf1}/>

                            {!this.state.showSecondInf &&
                            <span className="secondInfPanel" onClick={() => this.onInfClick()}><b>{inf2.id.split("p")[0]}: {inf2.age.split(" ")[0]} {inf2.gender.toLowerCase()} frå {inf2.place}</b></span>
                            }
                            {this.state.showSecondInf &&
                            <div className="secondInfPanel" onClick={() => this.onInfClick()}>
                                <span><b>{inf2.id.split("p")[0]}: {inf2.age.split(" ")[0]} {inf2.gender.toLowerCase()} frå {inf2.place}</b></span>
                                <InformantInfoText informant={inf2}/>
                            </div>
                            }
                        </div>

                        <div className="text">
                            {/*Splits the line on br and check if line contains a symbol. */}
                            <div>{text.split("\n").map(line => {
                                if(line.match(REGEX)) {
                                    let infNumber = line.split(":")[0].trim();
                                    return <div key={key++}>{
                                        line.split(" ")
                                            .map(word => {
                                                if(word.indexOf(word.match(REGEX)) !== -1){
                                                    return <Word key={key++} word={word} inf={infNumber} />;
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
                        </div>
                    </div>

                    <ReactAudioPlayer src={url} style={{width : 1000, margin: "auto", padding: 10}}/>
                </div>
            </div>
        )
    }
}

export default Result;