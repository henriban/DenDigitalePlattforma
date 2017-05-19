import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Informanter from '../data/informanter';
import '../styles/result.css';


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.state = {
            showSecondInf: false
        }
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
        console.log(id);
        let inf1 = Informanter.find(x => x.id === id);

        const inf = inf1.id;
        const place = inf1.place;
        const gender = inf1.gender;
        const age = inf1.age;
        const birth = inf1.birth;
        const date_of_recording = inf1.date_of_recording;
        const education = inf1.education;
        const occupation = inf1.occupation;
        const parents_background = inf1.parents_background;
        const panel = inf1.panel;

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

        const inf_2 = inf2.id;
        const place2 = inf2.place;
        const gender2 = inf2.gender;
        const age2 = inf2.age;
        const birth2 = inf2.birth;
        const date_of_recording2 = inf2.date_of_recording;
        const education2 = inf2.education;
        const occupation2 = inf2.occupation;
        const parents_background2 = inf2.parents_background;
        const panel2 = inf2.panel;

        let key = 0;

        return(
            <div className="resultBackground">

                <div className="resultContainer">
                    <div className="line1">
                        <button className="closeButton" onClick={this.onCloseClick} href='#'>x</button>
                    </div>

                    <div className="line2">
                        <h2 id="headline">{age.split(" ")[0]} {gender.toLowerCase()} frå {place}</h2>
                        <div className="infoText">
                            <span>Informant: {inf.split("p")[0]}</span>
                            <span>Opptakstidspunkt: {date_of_recording} </span>
                            <span>Fødselstidspunkt: {birth} </span>
                            <span>Alder: {age} </span>
                            <span>Utdanning: {education} </span>
                            <span>Yrke: {occupation}</span>
                            <span>Foreldrebakgrunn: {parents_background}</span>
                            <span>Type Informatn: {panel}</span>
                        </div>

                        <ReactAudioPlayer src={url} />

                        {!this.state.showSecondInf &&
                            <span className="secondInfDiv" onClick={() => this.onInfClick()}><b>{inf_2.split("p")[0]}: {age2.split(" ")[0]} {gender2.toLowerCase()} frå {place2}</b></span>
                        }
                        {this.state.showSecondInf &&
                            <div className="secondInfDiv" onClick={() => this.onInfClick()}>
                                <span><b>{inf_2.split("p")[0]}: {age2.split(" ")[0]} {gender2.toLowerCase()} frå {place2}</b></span>
                                <div className="infoText">
                                    <span>Informant: {inf_2.split("p")[0]}</span>
                                    <span>Opptakstidspunkt: {date_of_recording2} </span>
                                    <span>Fødselstidspunkt: {birth2} </span>
                                    <span>Alder: {age2} </span>
                                    <span>Utdanning: {education2} </span>
                                    <span>Yrke: {occupation2}</span>
                                    <span>Foreldrebakgrunn: {parents_background2}</span>
                                    <span>Type Informatn: {panel2}</span>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="text">
                        <div>{text.split("   ").map(line => {
                            return <div key={key++}>{line}</div>})}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;