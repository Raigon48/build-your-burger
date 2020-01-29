import React from 'react' ;
import Logo from '../../Logo/Logo';
import CSS from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={CSS.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    );
}

export default toolbar;