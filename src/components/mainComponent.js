import React from 'react';

import Search from './searchComponent';
//import Sortabel from './sortabelComponent';
import Result from './resultComponent';
import Table from './tableComponent';

import Informanter from '../data/informanter';
import '../styles/main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onShowResultChange = this.onShowResultChange.bind(this);

        this.state = {
            showResult: false,
            resultId: 0,
            rows: this.getRows(),
            filteredList: this.getRows(),
            searchList: []
        }
    }

    getRows(){
        let rows = [];
        Informanter.map(item =>
            rows.push({
                id: item.id,
                place: item.place.trim(),
                gender: item.gender.trim(),
                age: item.age, //.split(" ").slice(1).join(" ").trim()
                birth: item.birth.trim(),
                date_of_recording: item.date_of_recording.trim(),
                education: item.education.trim(),
                occupation: item.occupation.trim(),
                parents_background: item.parents_background.trim()
            })
        );
        return rows;
    }

    filterTable(searchList){
        this.setState({filteredList: this.state.rows
            .filter(x => x.place.toLowerCase().includes(searchList.place.toLowerCase()))
            .filter(x => x.gender.toLowerCase().includes(searchList.gender.toLowerCase()))
            .filter(x => x.age.toLowerCase().includes(searchList.age.toLowerCase()))
            .filter(x => x.birth.toLowerCase().includes(searchList.birth.toLowerCase()))
            .filter(x => x.date_of_recording.toLowerCase().includes(searchList.date_of_recording.toLowerCase()))
            .filter(x => x.education.toLowerCase().includes(searchList.education.toLowerCase()))
            .filter(x => x.occupation.toLowerCase().includes(searchList.occupation.toLowerCase()))
            .filter(x => x.parents_background.toLowerCase().includes(searchList.parents_background.toLowerCase()))
        });
        // this.setState({filteredList: this.state.rows
        //     .filter(x => x.place.toLowerCase().includes(searchList.place))
        //     .filter(x => x.gender.toLowerCase().includes(searchList.gender))
        //     .filter(x => x.age.toLowerCase().includes(searchList.age))
        //     .filter(x => x.birth.toLowerCase().includes(searchList.birth))
        //     .filter(x => x.date_of_recording.toLowerCase().includes(searchList.date_of_recording))
        //     .filter(x => x.education.toLowerCase().includes(searchList.education))
        //     .filter(x => x.occupation.toLowerCase().includes(searchList.occupation))
        //     .filter(x => x.parents_background.toLowerCase().includes(searchList.parents_background))
        // });
    }

    onSearchChange(list){
        this.filterTable(list);
        this.setState({ searchList: list});
    }

    onShowResultChange(id) {
        this.setState({showResult: !this.state.showResult, resultId: id});
    }

    render(){
        return(
            <div>
                {this.state.showResult && <Result onCloseClick={this.onShowResultChange} inf={this.state.resultId}/>}
                <div className="main">
                    <Search onSearchChange={this.onSearchChange} />
                    {/*<Sortabel onRowClick={this.onShowResultChange}/>*/}
                    <Table rows={this.state.filteredList} onRowClick={this.onShowResultChange} searchList={this.state.searchList} />
                </div>
            </div>
        );
    }
}

export default Main;