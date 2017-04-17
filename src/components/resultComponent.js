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

        const url = require("../static/" + item.audio);

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
                    </div>

                    <div className="line3">
                        <ReactAudioPlayer src={url} />
                    </div>

                    <div className="text">

                        <p>I: Kva gjorde de på i friminuttane då?
                            9: Nei, me har, me siglde valdsamt mykje på kjelke nedover mot Haukereidbrua,
                            10: Mm.
                            9: og det var i grunnen ein viss fare med og ei viss straff for, for me hadde ikkje lov
                            10: Nei.
                            9: forbi Notsetesvingen.
                            10: Neivel.
                            9: Og så opp på Øynahaugen
                            10: Ja, jadå.
                            9: For då såg dei oss altså, men veit reiste me ned for Notsetebrua, den var litt farleg, for då kunne
                            elva, og det kunne vera hol i isen.
                            I: Mm.
                            10: Å, ja.
                            9: Og så var det hende det no siste åra, siste par åra gjerne, at me klarte å kasta litt pengar om
                            vårane etter det var så mykje tie vorte, men det var i grunnen, det var ikkje bra.
                            10: Nei.
                            9: Det var, me måtte, då kunne det no henda me blei litt lettare tilsnakka.
                            I: Mm. Leikte?
                            9: Og så var det å slå ball og
                            I: Ja.
                            9: og slikt då på.
                            10: Mm.
                            9: Me hadde ein valdsamt fin skuleplan
                            10: Ja. Ja.
                            9: der på Notsete. Den blei vel opparbeidde. Dei var ikkje ferdig med han heilt når eg begynte i skulen.
                            10: Nei, eg hugsar dette der.
                            9: Det var att noko muring borti eit hjørne noko og så, og så laga dei til støypekant og fine greier
                            oppover mot dyrka marka der som dei hadde teke av,
                            10: Mm.
                            9: og gjorde han valdsamt fint inne og gruste han opp noko.
                            I: Mm.
                            9: Så det var, det var, valdsamt fint slik. Denne pengekastinga som me for av garde med, men eg trur det
                            var gjerne nest siste, sjetteklassen eller sjuandeklassen om våren då hende det me stal oss til og så
                            nett prøva i friminutta.
                            10: Ja.
                            I: Bilar og slikt, men hadde de noko anna framkomstmiddel de kunne koma dykk fram på?
                            10: Det var sykkel det, veit du.
                            9: Ja.
                            10: Å, ja me sykla til Fjøra på fest. Så sat ein oppå stonga
                            I: Ja.
                            10: gjerne og det var to stykk og så nedover. Nei, det hugsar eg at, og så viss det hende det at viss
                            dei hadde dårlege bremsar at dei fann ein, ein sånn stor busk, eller dei hogg ein sloe som me sa og
                            hengde atti når me køyrde nedover Hausadalen. [latter] Det var
                            9: Det
                            10: Det opplevde ikkje du sjølvsagt.
                            9: Nei.
                            10: Nei. Nei, det var no før krigen dette der stort sett.
                            I: Kva trur de vil forandra seg her i Sogndal dei neste tjue åra då, forandra seg mest?
                            10: [Kremt] No veit du det har jo forandra seg så kolossalt i siste tjue tretti åra at det er veldig
                            vanskeleg å seia kva forandringar, og den store forandringa det er jo sjølvsagt alle desse skulane som
                            er komne, og
                            9: Brua inne.
                            10: Ja. Ja, du tenkjer på
                            9: Loftesnesbrua.
                            10: Loftesnesbrua, det var jo ein revolusjon veit du.
                            I: Mm.
                            10: Men det er jo så langt tilbake som i femtiåra eller.
                            9: Åtteogfemti.
                            10: Åtteogfemti ja, og du før den tida så kom ikkje over Loftesnessundet utan
                            9: Med ferje.
                            10: Med ferje.
                            I: Mm.
                            10: Eg hugsar jo så langt tilbake at det berre var ein robåt, eller ein stor båt som dei rodde, men det
                            var ferje då opp til som du seier åtteogfemti. Og
                            9: Og du veit at då, me har eit, eit bilete som me fekk hjå Bergum oppå flyplassen, og det var. Det må
                            vera teke våren niogfemti. Det er fruktblomstring.
                            10: Mm.
                            9: Og då står det ei gravemaskin nett over sjukestova nede, gamle sjukestova.
                            I: Ja.
                            9: Då var dei begynte på vegen
                            10: Mm.
                            9: oppover på, på nedste Leite.
                            10: Ja.
                            9: Og då kan du tenkja med deg sjølv. På Stedje var det ingenting,
                            10: Nei.
                            9: var ikkje eit bustadhus.
                            10: Nei.
                            9: Det var kun, det var kun frukthagane og så, og så han, han Anders Stedje og Hagelins-eigedomen.
                            10: Ja.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;