import React from 'react';

import SelectItem from './selectComponent';
import '../styles/search.css';

var stad = [
    { value: 'fjøra',   label: 'Fjøra' },
    { value: 'dalen',   label: 'Dalen' },
    { value: 'norane',  label: 'Norane' }
];

var kjønn = [
    { value: 'kvinne',  label: 'Kvinne' },
    { value: 'mann',    label: 'Mann' },
];

var alder = [
    { value: 'ungdom',      label: 'Ungdom 13 – 25' },
    { value: 'ung',         label: 'Ung 26 – 40' },
    { value: 'middelaldra', label: 'Middelaldra 41 - 60' },
    { value: 'eldre',       label: 'Eldre 61 –' },
];

var Opptakstidspunkt = [
    { value: '1996',       label: '1996' },
    { value: '2001',       label: '2001' },
    { value: '2016',       label: '2016' },
    { value: '2017',       label: '2017' },
];

var Utdanning = [
    { value: 'grunnskule',     label: 'Grunnskule' },
    { value: 'vidaregåande',   label: 'Vidaregåande' },
    { value: 'høgskule',       label: 'Høgskule' }
];

var Yrke = [
    { value: 'elev',        label: 'Elev' },
    { value: 'primær',      label: 'Primær' },
    { value: 'sekundær',    label: 'Sekundær' },
    { value: 'tertiær',     label: 'Tertiær' },
];

var Foreldrebakgrunn = [
    { value: 'ingen',   label: 'Ingen frå Sogndal' },
    { value: 'mor',     label: 'Mor frå Sogndal' },
    { value: 'far',     label: 'Far frå Sogndal' },
    { value: 'begge',   label: 'Begge frå Sogndal' }
];

var Fødselstidspunkt = [
    { value: '1910 – 1940',       label: '1910 – 1940' },
    { value: '1941 – 1970',       label: '1941 – 1970' },
    { value: '1971 – 2000',       label: '1971 – 2000' },
    { value: '2001 –',            label: '2001 –' }
];

/*var Informant = [
    { value: 'trend',       label: 'Trend' },
    { value: 'panel',       label: 'Panel' }
];*/

class Search extends React.Component {


    render(){
        return(
            <div className="selectWrapper">
                <SelectItem  label="Stad"               data={stad}/>
                <SelectItem  label="Kjønn"              data={kjønn}/>
                <SelectItem  label="Alder"              data={alder}/>
                <SelectItem  label="Fødselstidspunkt"   data={Fødselstidspunkt}/>
                <SelectItem  label="Opptakstidspunkt"   data={Opptakstidspunkt}/>
                <SelectItem  label="Utdanning"          data={Utdanning}/>
                <SelectItem  label="Yrke"               data={Yrke}/>
                <SelectItem  label="Foreldrebakgrunn"   data={Foreldrebakgrunn}/>
                {/*<SelectItem  label="Informant"          data={Informant}/>*/}
            </div>
        );
    }
}

export default Search;