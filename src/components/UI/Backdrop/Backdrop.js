import React from 'react';
import CSS from './Backdrop.module.css';

const backdrop = (props) => {
    return props.show ? <div className={CSS.Backdrop} onClick={props.cancel}></div> : null
}

export default backdrop;