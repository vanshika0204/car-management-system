import React from 'react';
import { Link } from 'react-router-dom';
import mycar from '../assets/mycar.png';
import './Guest.css'
export const Guest = () => {
  const handleCreateAccount = () => {
    
  };
  return (
    <>
      <section className='guest-section'>
        <div className='guest-div'>
          <div className='my-car'>
            <p><span className='my-span'>my</span>car.com</p>
          </div>
          <div className='car-logo'>
            <img src={mycar} alt="" className='car-img'/>
          </div>
          <div className='button'>
          <Link to="/login">
            <button className="button-1">Create Account</button>
          </Link>
          </div>
        </div>
      </section>
    </>
  )
}
