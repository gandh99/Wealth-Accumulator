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
          {this.state.showSidebar &&
            <Sidebar
              toggleSidebar={this.toggleSidebar}
            />
          }
          <Switch>
            <Route path="/overview">
              <Overview />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
