import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './components/Home';
import Cv from './components/Cv';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Porfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Porfolio' component={Porfolio} />
          <Route path='/about' component={AboutMe} />
          <Route path='/contact' component={Contact} />
          <Route path='/cv' component={Cv} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
