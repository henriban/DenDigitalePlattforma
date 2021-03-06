import React from 'react';

class InformantInfoText extends React.Component{

    render(){

        let inf = this.props.informant;

        return(
            <div className="infoText">
                <span>Informant: {inf.id.split("p")[0]}</span>
                <span>Opptakstidspunkt: {inf.date_of_recording} </span>
                <span>Fødselstidspunkt: {inf.birth} </span>
                <span>Alder: {inf.age} </span>
                <span>Utdanning: {inf.education} </span>
                <span>Yrke: {inf.occupation}</span>
                <span>Foreldrebakgrunn: {inf.parents_background}</span>
                <span>Type Informatn: {inf.panel}</span>
            </div>
        );
    }

}

export default InformantInfoText;