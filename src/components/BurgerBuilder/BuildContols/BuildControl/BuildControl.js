import React from 'react' ;
import styles from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div>
            <div className={styles.LabelBox}>
                <label>{props.label}</label>
            </div>
            <button className={styles.Button} onClick={props.added}>More</button>
            <button className={styles.Button} onClick={props.removed} disabled={props.disabled[props.type]}>Less</button>
        </div>
    );
}

export default BuildControl;