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
                <div
                    className='sidebar-container'
                    style={sidebarContainerStyle}>
                    <div className='sidebar-header' style={menuStyle}>
                        <div className='banner-block'></div>
                        <div className='banner-bottom-wave'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2f2b3f" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                        </div>
                        <div className='banner-logo'>Wealth<br/>Accumulator</div>
                    </div>
                    <div className='sidebar-menu' style={menuStyle}>
                        <Link to='/overview' onClick={this.props.toggleSidebar.bind(this, false)} style={{ textDecoration: 'none' }}>
                            <div className='sidebar-option'>Overview</div>
                        </Link>
                        <Link to='/incomes' onClick={this.props.toggleSidebar.bind(this, false)} style={{ textDecoration: 'none' }}>
                            <div className='sidebar-option'>Income</div>
                        </Link>
                        <Link to='/assets' onClick={this.props.toggleSidebar.bind(this, false)} style={{ textDecoration: 'none' }}>
                            <div className='sidebar-option'>Assets</div>
                        </Link>
                        <Link to='/expenses' onClick={this.props.toggleSidebar.bind(this, false)} style={{ textDecoration: 'none' }}>
                            <div className='sidebar-option'>Expenses</div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
