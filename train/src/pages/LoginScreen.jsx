import { Store } from '../store';
import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginScreen = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/data';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await Axios.post(`http://localhost:8000/api/users/signin`, {
          email,
          password,
        });
        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/data');
      } catch (err) {
        toast.error("รหัสผ่านหรือ email ไม่ถูกต้อง");
      }
    };

    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, redirect, userInfo]);
  return (
    <div className='auth-ctn'>
        <div className="card">
            <div className="text">
                <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" /></div>
                <h1>Sign in</h1>
                <p>to continue to Gmail</p>
            </div>
            <div className="form">
                <form  onSubmit={submitHandler}>
                    <div className="input">
                        <label htmlFor="">Email or phone</label>
                        <input  
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="">Password</label>
                        <input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <a href='/forget'>Forget password?</a>
                    <div className='text-1'>
                        <a href='/register'>Create account</a>
                        <button>Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen