import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  fullBox: false,
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    name: localStorage.getItem('name')
    ? JSON.parse(localStorage.getItem('name'))
    : [],
    infomation: localStorage.getItem('infomation')
    ? JSON.parse(localStorage.getItem('infomation'))
    : [],
   username: localStorage.getItem('username')
    ? JSON.parse(localStorage.getItem('username'))
    : [],
    userPassword: localStorage.getItem('userPassword')
    ? JSON.parse(localStorage.getItem('userPassword'))
    : [],
    phone: localStorage.getItem('phone')
    ? JSON.parse(localStorage.getItem('phone'))
    : [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FULLBOX_ON':
      return { ...state, fullBox: true };
    case 'SET_FULLBOX_OFF':
      return { ...state, fullBox: false };
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_SIGNOUT':
      return {
        ...state,
        userInfo: null,
        cart: {

        },
      };
    case 'SAVE_NAME':
      return {
        ...state,
        cart: {
          ...state.cart,
          name: action.payload,
        },
      };
      case 'SAVE_EMAIl':
        return {
          ...state,
          cart: {
            ...state.cart,
            username: action.payload,
          },
        };
    case 'SAVE_INFOMATION':
        return {
            ...state,
            cart: {
            ...state.cart,
            infomation: action.payload,
            },
        };
    case 'SAVE_PASSWORD':
        return {
            ...state,
            cart: {
            ...state.cart,
            userPassword: action.payload,
            },
        };
    case 'SAVE_PHONE':
        return {
            ...state,
            cart: {
            ...state.cart,
            phoneUser: action.payload,
            },
        };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}