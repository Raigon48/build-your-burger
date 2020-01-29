import React from 'react' ;
import CSS from './Button.module.css';

const button = (props) => {
    return (
        <button className={[CSS.Button , CSS[props.type]].join(' ')}
                onClick={props.clicked}>{props.children}</button>
    );
}

export default button;