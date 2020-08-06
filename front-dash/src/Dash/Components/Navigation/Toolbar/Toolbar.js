import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../UI/logo'
import NavItems from './NavItems/NavItems'


const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default Toolbar
