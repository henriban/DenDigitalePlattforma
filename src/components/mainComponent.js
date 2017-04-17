import React from 'react';

import Search from './searchComponent';
//import Sortabel from './sortabelComponent';
import Result from './resultComponent';

import Table from './tableComponent';

import '../styles/main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.onShowResultChange = this.onShowResultChange.bind(this);

        this.state = {
            showResult: false,
            resultId: 0
        }
    }

    onShowResultChange(id) {
        this.setState({showResult: !this.state.showResult, resultId: id});
    }

    render(){
        return(
            <div>
                {/*<Result onCloseClick={this.onShowResultChange} />*/}
                {this.state.showResult && <Result onCloseClick={this.onShowResultChange} inf={this.state.resultId}/>}
                <div className="main">
                    <Search />
                    {/*<Sortabel onRowClick={this.onShowResultChange}/>*/}
                    <Table onRowClick={this.onShowResultChange}/>
                </div>
            </div>
        );
    }
}

export default Main;