import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Informanter from '../data/informanter';
import '../styles/result.css';


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick(e){
        e.preventDefault();
        this.props.onCloseClick(0);
    }

    render(){
        const id = this.props.inf;
        let item = Informanter.find(x => x.id === id);

        const inf = item.id;
        const place = item.place;
        const gender = item.gender;
        const age = item.age;
        const birth = item.birth;
        const date_of_recording = item.date_of_recording;
        const education = item.education;
        const occupation = item.occupation;
        const parents_background = item.parents_background;

        const text = item.text;

        const url = require("../static/" + item.audio);

        let k = 0;

        return(
            <div className="resultBackground">

                <div className="resultContainer">
                    <div className="line1">
                        <button className="closeButton" onClick={this.onCloseClick} href='#'>x</button>
                    </div>

                    <div className="line2">
                        <h2 id="headline">{age.split(" ")[0]} {gender.toLowerCase()} frå {place}</h2>
                        <div className="infoText">
                            <span>Opptakstidspunkt: {date_of_recording} </span>
                            <span>Fødselstidspunkt: {birth} </span>
                            <span>Alder: {age} </span>
                            <span>Utdanning: {education} </span>
                            <span>Yrke: {occupation}</span>
                            <span>Foreldrebakgrunn: {parents_background}</span>
                            <span>Informant: {inf}</span>
                        </div>
                        <ReactAudioPlayer src={url} />
                    </div>

                    <div className="text">
                        <div>{text.split("   ").map(i => {
                            return <div key={k++}>{i}</div>})}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;