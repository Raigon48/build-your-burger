import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Cover from '../../../hoc/Cover/Cover';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let sideDrawerVisibility = [styles.SideDrawer, styles.Close];
    if(props.curState) {
        sideDrawerVisibility = [styles.SideDrawer, styles.Open];
    }

    return (
        <Cover>
            <BackDrop show={props.curState} cancel={props.closeSideDrawer}/> 
            <div className={sideDrawerVisibility.join(' ')}>
                <div className={styles.Logo}><Logo cancel={props.closeSideDrawer}/></div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        
        
        </Cover>
        
    );
}

export default sideDrawer;