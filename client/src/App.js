import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            My header
          </TypoGraphy>
          <Navbar />
        </Toolbar>
      </AppBar>

      <div className="container">
        <h1>Go to HELL YOU PIECE OF SHIT</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
