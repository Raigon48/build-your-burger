import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredientArray = Object.keys(props.ingredients)
        .map(element => [...Array(props.ingredients[element])].map((_ , id)=>{
            return <BurgerIngredient key={element+id} type={element}/>
        }))
        .reduce((arr, el) => {return arr.concat(el)} , []);
        if(ingredientArray.length===0){
            ingredientArray = <p>Add ingredients!</p>;
        }
    return (
        <div className={styles.Container + " " + styles.HideScroll}>
            <BurgerIngredient type="bread-top"/>
            {ingredientArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;