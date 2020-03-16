import React from 'react'
import '../styles/navigation/header.css'
import Hamburger from './Hamburger'

export default function Header() {
    return (
        <div className='header'>
            <Hamburger />
            <div className='header-logo'>Wealth Accumulator</div>
        </div>
    )
}
