import React from 'react';
import '../styles/about.css';

// Inline color
const style = {
    color:'red'
};

class About extends React.Component {

    render(){
        return(
            <div className="about">
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
            </div>
        );
    }
}

export default About;