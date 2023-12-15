import { Store } from '../store';
import React, { useContext, useEffect, useState} from 'react';
import Navbar from '../component/Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
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
  useEffect(() => {
    if (!userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div>
      <Navbar/>
      <div className='home-ctn'>
        <h1>ข้อมูลส่วนบุคคล</h1>
            <div className="card">
            <h1>Email {userInfo.email}</h1>
            <h1>firstName {userInfo.firstName}</h1>
            <h1>lastName {userInfo.lastName}</h1>
            <h1>birthday {userInfo.day}/{userInfo.month}/{userInfo.year}</h1>
            <h1>Gender {userInfo.gender}</h1>
            <h1>Phone {userInfo.phone}</h1>
          </div>
      </div>
    </div>
  )
}

export default Home