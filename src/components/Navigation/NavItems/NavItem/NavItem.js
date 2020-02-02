import React from 'react' ;
import CSS from './NavItem.module.css';

const navItem = (props) => {
    return (
        <li className={CSS.NavItem}>
            <a 
            href={props.link}
            className={props.active ? CSS.active : null}>{props.children}</a>
        </li>
    );
}

export default navItem;