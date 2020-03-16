import React, { Component } from 'react'
import hamburger from '../images/hamburger.png'

export default class Hamburger extends Component {
    render() {
        return (
            <img
                src={hamburger}
                alt='hamburger'
                style={style}
                onClick={this.props.toggleSidebar.bind(this, true)}
            ></img>
        )
    }
}

const style = {
    width: '30px',
    margin: '0.1rem 1rem 0 0',
    cursor: 'pointer'
}