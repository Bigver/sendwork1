import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store';
import React, { useContext, useEffect, useReducer , useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_REQUEST':
        return { ...state, loading: true };
      case 'CREATE_SUCCESS':
        return { ...state, loading: false };
      case 'CREATE_FAIL':
        return { ...state, loading: false };
      default:
        return state;
    }
  };


const Register1Screen = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      fullBox,
      userInfo,
      cart: { infomation },
    } = state;

    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');

    const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
        type: 'SAVE_INFOMATION',
        payload: {
        month,
        day,
        year,
        gender
        },
    });
    localStorage.setItem(
        'infomation',
        JSON.stringify({
        month,
        day,
        year,
        gender
        })
    );
    navigate('/register/username');
    };


  return (
    <div className='auth-ctn'>
        <div className="card">
            <div className="text">
                <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" /></div>
                <h1 className='crete'>Basic information</h1>
                <p>Enter your birthday and gender</p>
            </div>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <div className="input-infomation" >
                        <select  name="size" onChange={(e) => setMonth(e.target.value)}>
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>                        
                        <input type="text" placeholder='Day'
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required/>
                        <input type="text" placeholder='Year'
                         value={year}
                         onChange={(e) => setYear(e.target.value)}
                         required/>
                    </div>
                    <div className="input-select">
                        <select name="size" onChange={(e) => setGender(e.target.value)}>
                            <option>Gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Rather not Say</option>
                        </select>                                 
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

export default Register1Screen