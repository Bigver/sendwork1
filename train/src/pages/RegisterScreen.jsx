import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store';
import React, { useContext, useEffect, useState } from 'react';

const RegisterScreen = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      fullBox,
      userInfo,
      cart: { name },
    } = state;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
        type: 'SAVE_NAME',
        payload: {
        firstName,
        lastName,
        },
    });
    localStorage.setItem(
        'name',
        JSON.stringify({
        firstName,
        lastName,
        })
    );
    navigate('/register/infomation');
    };

  return (
    <div className='auth-ctn'>
        <div className="card">
            <div className="text">
                <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" /></div>
                <h1 className='crete'>Create a Google Account</h1>
                <p>Enter your name</p>
            </div>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <div className="input">
                        <input type="text" placeholder='First name' 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required/>
                    </div>
                    <div className='text-1'>
                        <div></div>
                        <button>Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen