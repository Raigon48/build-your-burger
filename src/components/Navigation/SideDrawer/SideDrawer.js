import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Cover from '../../../hoc/Cover/Cover';
import CSS from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let sideDrawerVisibility = [CSS.SideDrawer, CSS.Close];
    if(props.curState) {
        sideDrawerVisibility = [CSS.SideDrawer, CSS.Open];
    }

    return (
        <Cover>
            <BackDrop show={props.curState} cancel={props.closeSideDrawer}/> 
            <div className={sideDrawerVisibility.join(' ')}>
                <div className={CSS.Logo}><Logo cancel={props.closeSideDrawer}/></div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        
        
        </Cover>
        
    );
}

export default sideDrawer;