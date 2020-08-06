import React from 'react'
import classes from './SideBar.css'
import SideItems from './SideItems/SideItems'

function SideBar() {
    return (
        <nav className={classes.sideBar}>
            <SideItems />            
        </nav>
    )
}

export default SideBar
