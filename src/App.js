import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './navigation/Sidebar'
import Overview from './overview/Overview'
import Header from './navigation/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Sidebar /> */}
        <Switch>
          <Route path="/overview">
            <Overview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
