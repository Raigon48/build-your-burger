import React from 'react' ;
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToogle from '../DrawerToogle/DrawerToogle';
import CSS from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={CSS.Toolbar}>
            <DrawerToogle toogle={props.toogleDrawer}/>
            <div className={CSS.Logo}>
                <Logo />
            </div>
            <nav className={CSS.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    );
}

export default toolbar;