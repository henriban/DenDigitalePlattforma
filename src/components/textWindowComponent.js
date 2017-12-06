import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Informanter from '../data/informanter';
import Word from './textWindowWordComponent';

import '../styles/result.css';

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

        const inf = inf1.id;
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
                    <div className="line1">
                        <button className="closeButton" onClick={this.onCloseClick} href='#'>x</button>
                    </div>

                    <div className="firstInfPanel">
                        <h2 id="headline">{inf1.age.split(" ")[0]} {inf1.gender.toLowerCase()} frå {inf1.place}</h2>
                        <div className="infoText">
                            <span>Informant: {inf.split("p")[0]}</span>
                            <span>Opptakstidspunkt: {inf1.date_of_recording} </span>
                            <span>Fødselstidspunkt: {inf1.birth} </span>
                            <span>Alder: {inf1.age} </span>
                            <span>Utdanning: {inf1.education} </span>
                            <span>Yrke: {inf1.occupation}</span>
                            <span>Foreldrebakgrunn: {inf1.parents_background}</span>
                            <span>Type Informatn: {inf1.panel}</span>
                        </div>   

                        <ReactAudioPlayer src={url} />

                        {!this.state.showSecondInf &&
                        <span className="secondInfPanel" onClick={() => this.onInfClick()}><b>{inf2.id.split("p")[0]}: {inf2.age.split(" ")[0]} {inf2.gender.toLowerCase()} frå {inf2.place}</b></span>
                        }
                        {this.state.showSecondInf &&
                        <div className="secondInfPanel" onClick={() => this.onInfClick()}>
                            <span><b>{inf2.id.split("p")[0]}: {inf2.age.split(" ")[0]} {inf2.gender.toLowerCase()} frå {inf2.place}</b></span>
                            <div className="infoText">
                                <span>Informant: {inf2.id.split("p")[0]}</span>
                                <span>Opptakstidspunkt: {inf2.date_of_recording} </span>
                                <span>Fødselstidspunkt: {inf2.birth} </span>
                                <span>Alder: {inf2.age} </span>
                                <span>Utdanning: {inf2.education} </span>
                                <span>Yrke: {inf2.occupation}</span>
                                <span>Foreldrebakgrunn: {inf2.parents_background}</span>
                                <span>Type Informatn: {inf2.panel}</span>
                            </div>
                        </div>
                        }
                    </div>

                    <div className="text">
                        <div>{text.split("   ").map(line => {

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
            </div>
        )
    }
}

export default Result;