import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Register4Screen = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      fullBox,
      userInfo,
      cart: { userPassword },
    } = state;

    const [password, setPassword] = useState(userPassword || '');
    const [confirmPassword, setcConfirmPassword] = useState(userPassword || '');

    const submitHandler = (e) => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        return;
        }
    e.preventDefault();
    ctxDispatch({
        type: 'SAVE_PASSWORD',
        payload: {
        password
        },
    });
    localStorage.setItem(
        'userPassword',
        JSON.stringify({
        password
        })
    );
    navigate('/register/phone');
    };


  return (
    <div className='auth-ctn'>
        <div className="card">
            <div className="text">
                <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" /></div>
                <h1 className='crete'>Create a strong password</h1>
                <p className='detail'>Create a strong password with a mix of letters, numbers and symbols</p>
            </div>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <div className="input">
                        <input type="password" placeholder='Password'
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         required/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Confirm' 
                         value={confirmPassword}
                         onChange={(e) => setcConfirmPassword(e.target.value)}
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

export default Register4Screen