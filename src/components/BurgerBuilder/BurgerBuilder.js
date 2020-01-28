import React,{Component} from 'react';
import Cover from '../../hoc/Cover';
import Burger from './Burger/Burger';
import BuildContols from './BuildContols/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../BurgerBuilder/OrderSummary/OrderSummary';

//Globals
const INGREDIENT_PRICE = {
    salad : 0.3,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredient : {
            salad : 0,
            cheese : 0,
            meat : 0,
            bacon : 0
        } ,
        burgerPrice : 4,
        purchase : false,
        purchasing : false
    }
    
    purchaseBurger = (ingredients) => {
        let sum = Object.keys(ingredients).reduce((sum , el) =>sum + ingredients[el] ,0);
        console.log(sum);
        this.setState({purchase : sum>0?true:false});
    }

    addIngredient = (type) => {
        let temp = this.state.ingredient[type];
        let oldValue = temp;
        let newValue = oldValue + 1;
        let tempObject = {
            ...this.state.ingredient
        };
        tempObject[type] = newValue;
        let currentPrice = this.state.burgerPrice;
        let newPrice = currentPrice + INGREDIENT_PRICE[type];
        this.setState({
            ingredient : tempObject,
            burgerPrice : newPrice
        });
        this.purchaseBurger(tempObject);        
    }

    removeIngredient = (type) => {
        let temp = this.state.ingredient[type];
        if(temp){
            let newValue = temp - 1;
            let tempObject = {
                ...this.state.ingredient
            };
            tempObject[type] = newValue;
            let currentPrice = this.state.burgerPrice;

            let newPrice = currentPrice - INGREDIENT_PRICE[type];
            this.setState({
                ingredient : tempObject,
                burgerPrice : newPrice
            });
            this.purchaseBurger(tempObject);
        }  
    }

    purchaseOrder = () => {
        this.setState({purchasing : true});
    }

    cancelOrder = () => {
        this.setState({purchasing : false});
    }


    render() {
        const disabled = {...this.state.ingredient};
        for(let key in disabled) {
            disabled[key] = disabled[key] <= 0 ;
        }


        return (
            <Cover>

                <Modal display={this.state.purchasing} cancelOrder={this.cancelOrder}>
                    <OrderSummary ingredients={this.state.ingredient}/>
                </Modal>
                
                <Burger ingredients={this.state.ingredient}/>

                <BuildContols 
                    ingredients={this.state.ingredient} 
                    price={this.state.burgerPrice}
                    addItem={this.addIngredient}
                    removeItem={this.removeIngredient}
                    toogle ={disabled}
                    purchase={this.purchaseBurger}
                    purchaseState={this.state.purchase}
                    orderNowClick={this.purchaseOrder}/>
    
            </Cover>
        );
    }
}

export default BurgerBuilder;