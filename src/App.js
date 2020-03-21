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
    allIncomes: [],
    allAssets: [],
    allExpenses: [],
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
                incomes={this.state.allIncomes}
                assets={this.state.allAssets}  
                expenses={this.state.allExpenses}
              />
            </Route>
            <Route path="/incomes">
              <Income
                allIncomes={this.state.allIncomes}
                saveToApp={(allIncomes) => this.setState({ allIncomes })} 
              />
            </Route>
            <Route path='/assets'>
              <Assets 
                allAssets={this.state.allAssets}
                saveToApp={(allAssets) => this.setState({ allAssets })} 
              />
            </Route>
            <Route path="/expenses">
              <Expenses
                allExpenses={this.state.allExpenses}
                saveToApp={(allExpenses) => this.setState({ allExpenses })}
              />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
