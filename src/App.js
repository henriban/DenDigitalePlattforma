import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/mainComponent';
import Graph from './components/graphPageComponent';
import About from './components/aboutComponent';

import Navbar from './components/navbar';

class App extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/graf' component={Graph}/>
              <Route path='/om' component={About}/>
            </Switch>
        </div>
    );
  }
}

export default App;
