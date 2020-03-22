import React, { Component } from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import ModalBackground from '../modal/ModalBackground'

export default class Sidebar extends Component {
    render() {
        const sidebarContainerStyle = {
            width: this.props.showSidebar ? '200px' : '0px'
        }
        const menuStyle = {
            visibility: this.props.showSidebar ? 'visible' : 'hidden'
        }

        return (
            <>
                <ModalBackground 
                    show={this.props.showSidebar}
                    toggleVisibility={this.props.toggleSidebar}
                />
                <div className='sidebar-container' style={sidebarContainerStyle}>
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
                        <Link to='/incomes'>
                            <div className='sidebar-option'>Income</div>
                        </Link>
                        <Link to='/assets'>
                            <div className='sidebar-option'>Assets</div>
                        </Link>
                        <Link to='/expenses'>
                            <div className='sidebar-option'>Expenses</div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
