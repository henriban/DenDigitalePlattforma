import React from 'react';
import '../../styles/about.css';

// import ReactCursorPosition from "react-cursor-position";
// Inline color
const style = {
    color:'red'
};

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = { x: 0, y: 0 };
    }

    _onMouseMove(e) {
        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }

    render(){

        //const { x, y} = this.state;
        return(
            <div className="about" onMouseDown={this._onMouseMove.bind(this)}>


                {/*<div className="parent">*/}
                    {/*<div id="target"></div>*/}
                    {/*<div id="dialog"></div>*/}
                {/*</div>*/}

                {/*<h1>Mouse coordinates: \n { x } { y }</h1>*/}

                <h2>Trekk som elevane kan leita etter i målprøvane</h2>

                <ul>
                    <li>Infinitiv: a-inf. eller e-inf. Eksempel: å les<span style={style}>a</span> eller å les<span style={style}>e</span></li>
                    <li>Ao-lyden: ao eller å Eksempel: spr<span style={style}>ao</span>k eller spr<span style={style}>å</span>k</li>
                    <li>Bunden form eintal av sterke hokjønnssubstantiv og fleirtal av inkjekjønnssubstantiv: -i eller – a
                        Eksempel: bok<span style={style}>i</span> eller bok<span style={style}>a</span>, hus<span style={style}>i</span> eller hus<span style={style}>a</span></li>
                    <li>Bunden form fleirtal av hokjønns- og hannkjønnssubstantiv: -adn/- edn eller –ane/-ene Eksempel:

                        gut<span style={style}>adn</span>/jent<span style={style}>edn</span> eller gut<span style={style}>ane</span>/jent<span style={style}>ene</span></li>
                    <li>Segmentering av ll &gt; dl Eksempel: a<span style={style}>dl</span>e eller a<span style={style}>ll</span>e</li>
                    <li>Differensiering av rn &gt; dn Eksempel: gje<span style={style}>dn</span>a eller gje<span style={style}>rn</span>e</li>
                </ul>
                {/*<ReactCursorPosition className="example" >*/}
                    {/*<PositionLabel />*/}
                {/*</ReactCursorPosition>*/}

                <h2>1) Kva finn du i denne basen?</h2>

                <ul>
                    <li>Her er samtalesnuttar med sogndøler i ulike aldrar frå opptak gjorde i
                        1996, 2001, 2016 og 2017.</li>
                    <li>Opptaka er redigerte og lagra som lydsnuttar på mellom 2 – 4 minutt.</li>
                    <li>Kvart lydopptak er som oftast ein samtale mellom to personar og ein
                        intervjuar.</li>
                    <li>Personane på opptaka snakkar om fortid, notid og framtid i Sogndal, men
                        også om kva som etter deira syn kjenneteiknar bygda.</li>
                </ul>

                <h2>2) Kvifor finst denne basen?</h2>

                <ul>
                    <li>Etter å ha gjort mange dialektopptak med mange sogndøler er det eit
                        ønskemål å gje noko tilbake til innbyggjarane i bygda.</li>
                    <li>Alle som vil kan lytta til og bruka basen, men han er også utforma med
                        tanke på pedagogisk bruk og som ein liten forskingsbase for elevar som
                        arbeider med talemål.</li>
                    <li>Elevar på vidaregåande har vore ei særleg tilsikta målgruppe, og eit
                        ønskemål er å kunna gje dei eit lite språkdykk i talemålet i Sogndal i eit
                        100-årsperspektiv.</li>
                </ul>

                <h2>3) Korleis kan du bruka denne basen?</h2>

                <ul>
                    <li>Du kan berre kosa deg og lytta til opptaka.</li>
                    <li>Du kan leggja merke til kva personane seier og samanlikna utviklinga i
                        skule, fritid og oppvekst i Sogndal gjennom ca. 100 år (kulturhistorie).</li>
                    <li>Du kan sortera personane ut frå sosiale bakgrunnsvariablar.</li>
                    <li>Du kan gjera analysar av språklege trekk og kombinera desse med dei
                        sosiale bakgrunnsvariablane (sosiolingvistikk).</li>
                    <li>Du kan laga enkel statistikk.</li>
                </ul>

                <p>
                    Alle lydopptaka er transkriberte, dvs. at lyden er overført til tekst. Lydopptaka
                    er nedteikna på nynorsk. Bøyingsformer og ordval er difor så langt det let seg
                    gjera på nynorsk. Det vil likevel finnast avvik frå nynorsknorma, t.d. vil uttrykket
                    <i>i hvert fall</i>, og bruken av <i>då</i> og <i>når</i> avvika frå norma.
                </p>

                <h2>4) Eksempel på trekk du kan analysera:</h2>

                <p>
                    I dei aller fleste dialektsnuttane vil du finna seks språklege trekk (på
                    fagspråket kalla <i>språklege variablar</i>) som går att. Viss du klikkar på eit ord
                    som har dette språktrekket, vil du få opp ein boks der du sjølv må lytta deg
                    fram til det rette alternativet, (dvs. kva <i>variant</i> av <i>variabelen</i>) du høyrer. Du
                    kan stoppa og høyra om att mange gonger viss du er usikker.
                </p>

                <p>Dei seks merkte språklege variablane er:</p>

                <ol>
                    <li>Infinitiv</li>
                    <li>Diftongering av gamalnorsk lang a, <i>á</i></li>
                    <li>Bunden form eintal av sterke hokjønnsord og bunden form fleirtal av
                        inkjekjønnsord</li>
                    <li>Bunden form fleirtal av hankjønnsord og hokjønnsord <i>–ane/ene</i></li>
                    <li>Segmentering av <i>dl</i></li>
                    <li>Differensiering av <i>rn</i></li>
                </ol>

                <p>Her er ei hjelpeliste med lyttedøme til alternativa:</p>

                <ol>
                    <li>
                        Infinitiv <br/>
                        Eksempelord: å finna <br/>
                        Variantar: a-infinitiv &lt;finna&gt; – e-infinitiv &lt;finne&gt; – anna &lt;?&gt;
                    </li>
                    <li>
                        Diftongering av gamalnorsk lang a, <i>á</i> <br/>
                        Eksempelord: båt <br/>
                        Variantar: ao-lyd – å-lyd – anna
                    </li>
                    <li>
                        Bunden form eintal av sterke hokjønnsord og bunden form fleirtal av
                        inkjekjønnsord <br/>
                        Eksempelord: bygda, husa <br/>
                        Variantar: i-ending &lt;bygdi, husi&gt; - a-ending &lt;bygda, husa&gt; - anna &lt;?&gt;
                    </li>
                    <li>
                        Bunden form fleirtal av hankjønnsord og hokjønnsord <i>–ane/ene</i><br/>
                        Eksempelord: stolane, bøkene <br/>
                        Variantar: -adn/edn – -ane/ene – anna
                    </li>
                    <li>
                        Segmentering av <i>dl</i> <br/>
                        Eksempelord: kalla <br/>
                        Variantar: -dl – ll - anna
                    </li>
                    <li>
                        Differensiering av <i>rn</i> <br/>
                        Eksempelord: gjerne <br/>
                        Variantar: -dn – rn - anna
                    </li>
                </ol>
                <p>
                    For alle dei seks språklege variablane vil det altså vera tre variantar (alternativ)
                    å velja mellom. Alternativet <i>anna</i> kan du velja dersom du anten ikkje oppfattar
                    kven av dei to alternativa det er, dvs. er usikker, eller språkbrukaren har brukt
                    eit alternativ som avvik frå dei to andre variantane. For variabel 1 kan det t.d.
                    tenkjast at verbet ikkje får noka ending (t.d. å seia &gt; å sei), for variabel 2 kan
                    det tenkjast at språkbrukaren brukar a (t.d, skap). For variabel 3 kan det henda
                    språkbrukaren har endinga <i>-en</i> (t.d. tiden). For dei andre variablane vil <i>anna</i>
                    vera mest aktuelt som alternativ viss du ikkje oppfattar kva språkbrukarane
                    seier.
                </p>
            </div>
        );
    }
}

export default About;

// const PositionLabel = (props) => {
//
//     const {
//         detectedEnvironment: {
//             isMouseDetected = false,
//             isTouchDetected = false
//         } = {},
//         elementDimensions: {
//             width = 0,
//             height = 0
//         } = {},
//         isActive = false,
//         isPositionOutside = false,
//         position: {
//             x = 0,
//             y = 0
//         } = {}
//     } = props;
//
//     let styles = {
//         top: y,
//         left: x
//     };
//
//     return (
//         <div className="example__label">
//             {`x: ${x}`}<br />
//             {`y: ${y}`}<br />
//             {`width:: ${width}`}<br />
//             {`height: ${height}`}<br />
//             {`isActive: ${isActive}`}<br />
//             {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
//             {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
//             {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`}
//             <div className="example_div" style={styles}></div>
//         </div>
//     );
// };   