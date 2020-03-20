import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from './navigation/Sidebar'
import Overview from './overview/Overview'
import Header from './navigation/Header';
import Expenses from './expenses/Expenses';
import Assets from './assets/Assets';

class App extends Component {
  state = {
    showSidebar: false,
    expenses: [],
    assets: []
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
              <Overview
                expenses={this.state.expenses}
                assets={this.state.assets}
              />
            </Route>
            <Route path="/expenses">
              <Expenses
                expenses={this.state.expenses}
                saveExpensesToApp={(expenses) => this.setState({ expenses })}
              />
            </Route>
            <Route path='/assets'>
              <Assets 
                assets={this.state.assets}
                saveAssetsToApp={(assets) => this.setState({ assets })}
              />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
