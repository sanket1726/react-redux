import {BUY_CAKE,REFILL_CAKES_STOCK} from "./actionTypes"

const buyCakes=() => {
    return {
        type: BUY_CAKE
    }
}

const refillCakesStock=() => {
    return {
        type:REFILL_CAKES_STOCK
    }
}
export  {buyCakes,refillCakesStock};