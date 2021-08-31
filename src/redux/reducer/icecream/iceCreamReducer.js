import BUY_ICE_CREAM from "../../action/icecream/actionTypes";

const inititalIceCreamState = {
  numOfIceCreams: 20,
};

export const iceCreamReducer = (state = inititalIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};
