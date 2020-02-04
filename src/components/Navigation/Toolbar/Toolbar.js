import React from 'react' ;
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToogle from '../DrawerToogle/DrawerToogle';
import styles from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToogle toogle={props.toogleDrawer}/>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    );
}

export default toolbar;