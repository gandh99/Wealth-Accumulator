import React, { Component } from 'react'
import '../styles/navigation/sidebar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <div
                        className='sidebar-logo'
                        onClick={this.props.toggleSidebar.bind(this, false)}>
                        Back
                    </div>
                </div>
                <div className='sidebar-menu'>
                    <Link to='/overview'>
                        <div className='sidebar-option'>Overview</div>
                    </Link>
                    <div className='sidebar-option'>Income</div>
                    <div className='sidebar-option'>Assets</div>
                    <div className='sidebar-option'>Expenses</div>
                </div>
            </div>
        )
    }
}
