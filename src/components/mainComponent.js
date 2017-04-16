import React from 'react';

import Search from './searchComponent';
import Sortabel from './sortabelComponent';
import Result from './resultComponent';

import '../styles/main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.onShowResultChange = this.onShowResultChange.bind(this);

        this.state = {
            showResult: false
        }
    }

    onShowResultChange() {
        this.setState({showResult: !this.state.showResult});
        console.log(this.state.showResult);
    }

    render(){
        return(
            <div>
                {/*<Result onCloseClick={this.onShowResultChange} />*/}
                {this.state.showResult && <Result onCloseClick={this.onShowResultChange} />}
                <div className="main">
                    <Search />
                    <Sortabel />
                </div>
            </div>
        );
    }
}

export default Main;