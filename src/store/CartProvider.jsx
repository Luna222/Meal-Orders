import { useReducer } from "react";
import CartContext from "./cart-context";
import { DUMMY_MEALS } from "../dummy-meals";

const createDefaultCartState = function () {
  DUMMY_MEALS.forEach((item) => (item.amount = 1));

  return {
    items: DUMMY_MEALS,
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.stepAmount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.item);
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItemFound = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingItemFound.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingItemFound,
          amount: existingItemFound.amount - action.payload.stepAmount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    null,
    createDefaultCartState
  );

  const addItemToCartHandler = (item, stepAmount) => {
    dispatchCartAction({ type: "ADD", payload: { item, stepAmount } });
  };

  const removeItemFromCartHandler = (id, stepAmount) => {
    dispatchCartAction({ type: "REMOVE", payload: { id, stepAmount } });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
