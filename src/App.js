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
import Income from './income/Income';

class App extends Component {
  state = {
    showSidebar: false,
    incomes: [],
    assets: [],
    // expenses: [],

    // Dummy data for testing
    expenses: [{expenseName:'l', expenseAmount: 1, expenseFrequency: 'month', expensePercentageChange: 1}],
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
                incomes={this.state.incomes}
                assets={this.state.assets}
                expenses={this.state.expenses}
              />
            </Route>
            <Route path="/incomes">
              <Income
                incomes={this.state.incomes}
                saveIncomesToApp={(incomes) => this.setState({ incomes })}
              />
            </Route>
            <Route path='/assets'>
              <Assets 
                assets={this.state.assets}
                saveAssetsToApp={(assets) => this.setState({ assets })}
              />
            </Route>
            <Route path="/expenses">
              <Expenses
                expenses={this.state.expenses}
                saveToApp={(expenses) => this.setState({ expenses })}
              />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
