import React from 'react' ;
import CSS from './Modal.module.css';

const modal = (props) => {
    return (
        <div className={CSS.Modal} style={{transform : props.display ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.display ? '1' : '0'}}>
            {props.children}
        </div>
    );
}

export default modal;