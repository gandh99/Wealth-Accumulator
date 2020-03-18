import React, { Component } from 'react'
import './header.css'
import Hamburger from './Hamburger'

export default class Header extends Component {
    render() {
        return (
            <div className='header' >
                <Hamburger
                    toggleSidebar={this.props.toggleSidebar}
                />
                <div className='header-logo'>Wealth Accumulator</div>
            </div>
        )
    }
}
