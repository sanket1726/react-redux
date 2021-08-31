// import React,{useState} from 'react'
import {BUY_CAKE, REFILL_CAKES_STOCK} from '../../action/cake/actionTypes';

const initialCakes={
    numOfCakes:10
}
const cakeReducer=(state=initialCakes,action) => {
// const [cakeCount, setCakeCount] = useState()    
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1
            }
        
        case REFILL_CAKES_STOCK:
            return {
                ...state,
                numOfCakes:10
            }
        default:
            return state;
    }
}

export default cakeReducer;