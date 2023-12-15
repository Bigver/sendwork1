import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../store';
import React, { useContext, useEffect, useState } from 'react';

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
      fullBox,
      userInfo,
      cart,
  } = state;
  
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('cartItems');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('infomation');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('phoneUser');
    ctxDispatch({ type: 'CART_CLEAR' });

    window.location.href = '/';

  };
  return (
    <div className='navbar-ctn'>
      <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" />
      <button className="logout" onClick={signoutHandler}>Log out <FontAwesomeIcon icon={faRightToBracket} /></button>
    </div>
  )
}

export default Navbar