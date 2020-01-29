import React from 'react';
import CSS from './Logo.module.css';
import BurgerPic from '../../Assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className={CSS.Logo}>
            <img src={BurgerPic} alt='burger' />
        </div>
    );
}

export default logo;