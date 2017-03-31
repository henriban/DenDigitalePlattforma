import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import '../styles/result.css';

var url = require("../static/test.mp3");
var audio = new Audio(url);

const Result = () => (
    <div>
    <div className="resultContainer">

        <h2 id="headline">Eldre mann frå Dalen</h2>
        <div className="infoText">
            <span>Opptakstidspunkt: </span>
            <span>Utdanning: </span>
            <span>Yrke: </span>
            <span>Foreldrebakgrunn: </span>
            <span>Fødselstidspunkt: </span>
            <span>Informant: </span>
        </div>

        <ReactAudioPlayer
            src={url}
        />

        <div className="text">
            <p><h4>Lydskrift:</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p><h4>Nynorsk:</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </div>
        <div className="resultContainer">
            <h2 id="headline">Ung mann frå Dalen</h2>
        </div>
        <div className="resultContainer">
            <h2 id="headline">Middelaldra kvinne frå Dalen</h2>
        </div>
    </div>
);

export default Result;