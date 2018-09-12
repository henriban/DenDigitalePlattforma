import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/mainComponent';
import Graph from './components/graph/graphPageComponent';
import About from './components/about/aboutComponent';

import Navbar from './components/navbar';
// import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={About}/>
              <Route path='/database' component={Main}/>
              <Route path='/graf' component={Graph}/>
            </Switch>
            {/*<Footer />*/}
        </div>
    );
  }
}

export default App;
