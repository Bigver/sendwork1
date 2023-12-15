import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store';
import React, { useContext, useEffect, useState } from 'react';

const Register2Screen = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      fullBox,
      userInfo,
      cart: { username },
    } = state;

    const [email, setEmail] = useState('');
    const emailAdd = email + '@gmail.com'
    const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
        type: 'SAVE_EMAIl',
        payload: {
        emailAdd
        },
    });
    localStorage.setItem(
        'username',
        JSON.stringify({
        emailAdd
        })
    );
    navigate('/register/password');
    };


  return (
    <div className='auth-ctn'>
        <div className="card">
            <div className="text">
                <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" /></div>
                <h1 className='crete'>How you’ll sign in</h1>
                <p className='detail'>Create a Gmail address for signing in to your Google Account</p>
            </div>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <div className="input">
                        <label htmlFor="">Username</label>
                        <label className='gmail'>@gmail.com</label>
                        <input type="text" 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required/>
                    </div>
                    <div className="text-user">
                        <h1>You can use letters , number & periods</h1>
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

export default Register2Screen