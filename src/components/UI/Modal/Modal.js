import React from 'react' ;
import Cover from '../../../hoc/Cover/Cover';
import Backdrop from '../Backdrop/Backdrop';
import CSS from './Modal.module.css';

const modal = (props) => {
    return (
        <Cover>
            <div className={CSS.Modal} style={{transform : props.display ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.display ? '1' : '0'}}>
                {props.children}
            </div>
            <Backdrop show={props.display} cancel={props.cancelOrder}/>
        </Cover>
    );
}

export default modal;