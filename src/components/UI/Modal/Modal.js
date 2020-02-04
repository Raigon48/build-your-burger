import React, { Component } from 'react' ;
import Cover from '../../../hoc/Cover/Cover';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.display !== this.props.display;
    }

    render() {
        return (
            <Cover>
                <div className={styles.Modal} style={{transform : this.props.display ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.display ? '1' : '0'}}>
                    {this.props.children}
                </div>
                <Backdrop show={this.props.display} cancel={this.props.cancelOrder}/>
            </Cover>
        );
    }
}

export default Modal;