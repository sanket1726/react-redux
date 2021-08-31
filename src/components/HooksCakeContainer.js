import React, { Fragment } from "react";
import {useSelector,useDispatch} from "react-redux";
import { buyCakes,refillCakesStock } from "../redux/action/cake/actions";
function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch=useDispatch();
    
  const refillStore = () => {
      dispatch(refillCakesStock());
    };
    
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <button onClick={() => {refillStore()}}>Refill Store</button>
        <button>Close shop</button>
      </div>
      <div>
        <h2>Num of Cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
      </div>
    </Fragment>
  );
}

export default HooksCakeContainer;
