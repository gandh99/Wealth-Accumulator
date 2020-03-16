import React from 'react'
import '../styles/sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <div className='sidebar-logo'>Wealth Accumulator</div>
            </div>
            <div className='sidebar-menu'>
                <div className='sidebar-option'>Overview</div>
                <div className='sidebar-option'>Income</div>
                <div className='sidebar-option'>Assets</div>
                <div className='sidebar-option'>Expenses</div>
            </div>
        </div>
    )
}
