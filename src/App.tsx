import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Cv from './components/Cv';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/cv' component={Cv} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
