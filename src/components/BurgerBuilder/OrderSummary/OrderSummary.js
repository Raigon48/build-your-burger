import React from 'react';
import Cover from '../../../hoc/Cover';
import Button from '../../UI/Button/Button';

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
            <Button type="Abort" clicked={props.cancelOrder}>CANCEL</Button>
            <Button type="Proceed" clicked={props.continueOrder}>CONTINUE</Button>
        </Cover>
    );
}

export default orderSummary;