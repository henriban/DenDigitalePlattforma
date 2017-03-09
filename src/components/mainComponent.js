import React from 'react';

import Search from './searchComponent';
import Result from './resultComponent';

import Sortabel from './sortabelComponent';

import '../styles/main.css';

class Main extends React.Component {
    render(){
        return(
            <div className="main">
                <Search />
                <Result />
                <Sortabel />
            </div>
        );
    }
}

export default Main;