import React from 'react';
import BuildControlsCSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
    let ingredientArray = Object.keys(props.ingredients);
    let priceTag = props.price===4 ? <p>Base Price : {props.price}</p>:<p>Price : {props.price}</p>
    return (
        <div className={BuildControlsCSS.Container}>
            {priceTag}
            {ingredientArray.map(element =>  
                <BuildControl 
                key={element} 
                label={element.charAt(0).toUpperCase()+element.slice(1)}
                type={element}
                added={()=> props.addItem(element)}
                removed={()=> props.removeItem(element)}
                disabled={props.toogle}/>)}
            <button className={BuildControlsCSS.OrderButton} onClick={props.orderNowClick} disabled={!props.purchaseState}>Order Now</button>
        </div>
    )
}

export default BuildControls;