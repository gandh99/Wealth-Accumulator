import React from 'react'
import '../styles/navigation/sidebar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <div className='sidebar-logo'>Wealth Accumulator</div>
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
