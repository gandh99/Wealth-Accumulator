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
    years: 10,
    metadataForEachIncomeItem: [],
    metadataForEachAssetItem: [],
    metadataForEachExpenseItem: [],
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
                metadataForEachIncomeItem={this.state.metadataForEachIncomeItem}
                metadataForEachAssetItem={this.state.metadataForEachAssetItem}  
                metadataForEachExpenseItem={this.state.metadataForEachExpenseItem}
                years={this.state.years}
                saveToApp={years => this.setState({ years })}
              />
            </Route>
            <Route path="/incomes">
              <Income
                allIncomes={this.state.metadataForEachIncomeItem}
                saveToApp={(metadataForEachIncomeItem) => this.setState({ metadataForEachIncomeItem })} 
              />
            </Route>
            <Route path='/assets'>
              <Assets 
                allAssets={this.state.metadataForEachAssetItem}
                saveToApp={(metadataForEachAssetItem) => this.setState({ metadataForEachAssetItem })} 
              />
            </Route>
            <Route path="/expenses">
              <Expenses
                allExpenses={this.state.metadataForEachExpenseItem}
                saveToApp={(metadataForEachExpenseItem) => this.setState({ metadataForEachExpenseItem })}
              />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
