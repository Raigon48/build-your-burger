import React from 'react';
import styles from './Logo.module.css';
import BurgerPic from '../../Assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className={styles.Logo} onClick={props.cancel}>
            <img src={BurgerPic} alt='burger' />
        </div>
    );
}

export default logo;