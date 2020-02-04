import React from 'react';
import styles from './DrawerToogle.module.css';

const drawerToogle = (props) => {
    return (
        <div className={styles.DrawerToggle} onClick={props.toogle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToogle;