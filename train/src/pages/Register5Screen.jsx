import { Store } from '../store';
import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register5Screen = () => {
    const navigate = useNavigate();

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';


    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        fullBox,
        userInfo,
        cart,
      } = state;
  
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(cart.username.emailAdd);
    const [password, setPassword] = useState(cart.userPassword.password);
    const [firstName, setFirstName] = useState(cart.name.firstName);
    const [lastName, setLastName] = useState(cart.name.lastName);
    const [month, setMonth] = useState(cart.infomation.month);
    const [day, setDay] = useState(cart.infomation.day);
    const [year, setYear] = useState(cart.infomation.year);
    const [gender, setGender] = useState(cart.infomation.gender);
    console.log(email)
    console.log(password)
    console.log(firstName)
    console.log(lastName)
    console.log(month)
    console.log(day)
    console.log(year)
    console.log(gender)
    console.log(phone)


    
    const submitHandler = async (e) => {
      e.preventDefault();
      ctxDispatch({
          type: 'SAVE_PHONE',
          payload: {
          phone
          },
      });
      localStorage.setItem(
          'phoneUser',
          JSON.stringify({
          phone
          })
      );
      try {
        const { data } = await Axios.post(`http://localhost:8000/api/users/signup`,
         {
            firstName,
            lastName,
            month,
            day,
            year,
            gender,
            email,
            password,
            phone
        });
        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate(redirect || '/data');
      } catch (err) {
        toast.error("Email นี้มีการลงทะเบียนแล้ว");
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
            <h1 className='crete'>Phone</h1>
            <p className='detail'>The phone number used can be contacted.</p>
        </div>
        <div className="form">
            <form onSubmit={submitHandler}>
                <div className="input">
                    <input type="text" placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

export default Register5Screen