import React from "react";
import { connect } from "react-redux";
import {buyCakes} from "../redux/action/cake/actions";

const CakeContaier = (props) => {
  return (
    <div>
          <h2>Number of Cakes: {props.numOfCakes}</h2>
          <button onClick={props.buyCakes}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispactToPros = (dispatch) => {
  return {
    buyCakes: ()=>dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispactToPros)(CakeContaier);
