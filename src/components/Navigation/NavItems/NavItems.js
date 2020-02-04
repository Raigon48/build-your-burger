import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
    return (
        <ul className={styles.NavItems}>
            <NavItem link='/' >Burger Builder</NavItem>
            <NavItem link='/'>Checkout</NavItem>
        </ul>
    );
}

export default navItems;