import React from 'react';
import Cover from '../../../hoc/Cover';

const orderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
        return (<li key={ingredient}>
                <span style={{textTransform : 'capitalize'}}>{ingredient}</span> : {props.ingredients[ingredient]}
                </li>
                );
    });
    return (
        <Cover>
            <h3>Your Order:</h3>
            <p>Your delicious burger content are as follows : </p>
            {ingredientSummary}
            <p>Continue to Checkout ?</p>
        </Cover>
    );
}

export default orderSummary;