import React from 'react' ;
import BuildControlCSS from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div>
            <div className={BuildControlCSS.LabelBox}>
                <label>{props.label}</label>
            </div>
            <button className={BuildControlCSS.Button} onClick={props.added}>More</button>
            <button className={BuildControlCSS.Button} onClick={props.removed} disabled={props.disabled[props.type]}>Less</button>
        </div>
    );
}

export default BuildControl;