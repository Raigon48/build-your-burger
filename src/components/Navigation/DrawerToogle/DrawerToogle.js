import React from 'react';
import CSS from './DrawerToogle.module.css';

const drawerToogle = (props) => {
    return (
        <div className={CSS.DrawerToggle} onClick={props.toogle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToogle;