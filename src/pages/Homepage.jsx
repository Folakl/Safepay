// Import necessary libraries and components
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  // Retrieve balance and account number from Redux store
  const balance = useSelector((state) => state.auth.balance);
  const AccountNumber = useSelector((state) => state.auth.AccountNumber);

  // Initialize navigation hook
  const navigate = useNavigate();
 

  return (
    <div className='bg-[blue] md:h-[1000px] w-full  h-full flex justify-center items-center'>
      <div className='mx-5 pt-5 md:mx-[250px] lg:mx-[300px] mb-[300px]  bg-[white] h-[600px] w-[500px] text-center'>
        {/* User greeting and account details */}
        <div>
          <h3 className='text-[20px]'>Hello<b></b></h3>
          <h3>Account Number: {AccountNumber} <b></b></h3>
          <h3 className='text-[14px]'>Remember to save today</h3>
        </div>

        {/* Balance display section */}
        <div className='bg-[blue] lg:mx-20 mx-5 text-white text-center mt-3 pt-5 w-[350px] h-[110px]'>
          <h3 className='font-bold'>Total Savings</h3>
          <h3 className='font-extrabold text-white text-center pt-5'>Balance: ${balance}</h3>
        </div>

        {/* Action links for transactions */}
        <div className='flex justify-center my-5 text-center gap-5'>
          <Link to ='/addmoney'><button className='lg:w-[300px] lg:h-[50px] md:w-[300px]  font-bold md:h-[50px] w-[150px] h-[50px] bg-[green] rounded-md pt-3 text-white' > Add money</button></Link>
          <Link to='/withdrawmoney'><button className='lg:w-[300px] lg:h-[50px] md:w-[300px]  font-bold md:h-[50px] w-[150px] h-[50px] bg-[blue] rounded-md pt-3 text-white' > withdraw money</button></Link>

        </div>

        {/* Additional features */}
        <div>
          <h3 className='font-bold mt-2'>Get your money working for you</h3>
          <button className='w-[350px] h-[70px] rounded-md border-[1px] my-2' onClick={() => navigate('/transactionhistory')}>Transaction History</button>
          <button className='w-[350px] h-[70px] rounded-md border-[1px]'>Invest your money</button>
          <h3 className='mt-2 font-bold'>Ways to earn more money</h3>
          <button className='mt-2 w-[350px] h-[70px] rounded-md border-[1px]'>Invite your friends and get a bonus</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
