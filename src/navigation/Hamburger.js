import React from 'react'
import hamburger from '../images/hamburger.png'

export default function Hamburger() {
    return (
        <img src={hamburger} alt='hamburger' style={style}></img>
    )
}

const style = {
    width: '30px',
    margin: '0.1rem 1rem 0 0',
    cursor: 'pointer'
}