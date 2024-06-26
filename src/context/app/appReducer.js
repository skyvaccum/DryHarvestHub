import {
  APP_ERROR,
  GET_PRODUCTS,
  PRODUCTS_LOADING,
  REMOVE_CART_ITEM,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  ADD_TO_CART,
  ORDERS_LOADING,
  ORDER,
  ADD_PRODUCT,
  GET_PRODUCER_PRODUCTS,
  GET_ORDERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: true,
      };

      case GET_ORDERS:
      return {
        ...state,
        ordersLoading: false,
        orders: action.payload,
      };

    case ORDERS_LOADING:
      return {
        ...state,
        ordersLoading: true,
      };
    case ORDER:
      return {
        ...state,
        ordersLoading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsLoading: false,
      };
    case GET_PRODUCER_PRODUCTS:
      return {
        ...state,
        producerProducts: action.payload,
        productsLoading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        producerProducts: [...state.products, action.payload],
        productsLoading: false,
      };

    case APP_ERROR:
      return {
        ...state,
        productsLoading: false,
        ordersLoading: false,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        ),
      };
    default:
      return state;
  }
};
