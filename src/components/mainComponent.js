import React from 'react';

import Search from './searchComponent';
import Sortabel from './sortabelComponent';
{/*import Result from './resultComponent'; */}

import '../styles/main.css';


class Main extends React.Component {
    render(){
        return(
            <div>
                {/*<Result/> */}
                <div className="main">
                    <Search />
                    <Sortabel />
                </div>
            </div>
        );
    }
}

export default Main;