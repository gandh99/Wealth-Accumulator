import React, { Component } from 'react';
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
import Expenses from './expenses/Expenses';

class App extends Component {
  state = {
    showSidebar: false
  }

  toggleSidebar = (showSidebar) => {
    this.setState({ showSidebar })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            toggleSidebar={this.toggleSidebar}
          />
          <Sidebar 
            showSidebar={this.state.showSidebar}
            toggleSidebar={this.toggleSidebar}
          />
          <Switch>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/expenses">
              <Expenses />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
