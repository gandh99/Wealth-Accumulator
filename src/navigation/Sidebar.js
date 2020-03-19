import React, { Component } from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        const containerStyle = {
            width: this.props.showSidebar ? '200px' : '0px'
        }
        const menuStyle = {
            visibility: this.props.showSidebar ? 'visible' : 'hidden'
        }

        return (
            <div className='sidebar-container' style={containerStyle}>
                <div className='sidebar-header' style={menuStyle}>
                    <div
                        className='sidebar-logo'
                        onClick={this.props.toggleSidebar.bind(this, false)}>
                        Back
                    </div>
                </div>
                <div className='sidebar-menu' style={menuStyle}>
                    <Link to='/overview'>
                        <div className='sidebar-option'>Overview</div>
                    </Link>
                    <div className='sidebar-option'>Income</div>
                    <Link to='/assets'>
                        <div className='sidebar-option'>Assets</div>
                    </Link>
                    <Link to='/expenses'>
                        <div className='sidebar-option'>Expenses</div>
                    </Link>
                </div>
            </div>
        )
    }
}
