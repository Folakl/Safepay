// Import necessary libraries and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBalance } from '../auth/bankSlice';

const Addmoney = () => {
  // Initialize dispatch and navigation hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to store the entered amount
  const [amount, setAmount] = useState(0);

  // Handle number button clicks
  const handleButtonPress = (value) => {
    setAmount((prevAmount) => prevAmount * 10 + value);
  };

  // Clear the entered amount
  const handleClear = () => setAmount(0);

  // Save balance and navigate to homepage
  const handleSaveBalance = () => {
    dispatch(addBalance(amount));
    setAmount(0);
    navigate('/homepage');
  };

  return (
    <div className="space-y-4 bg-[blue]">
      <h3 className='text-center text-[25px] pt-2 text-white'>Let's help you save</h3>
      <h3 className='lg:mx-[340px] md:mx-[200px] mx-5 px-5 text-white'>Enter the amount you want to save</h3>
      <div id="amount-display" className="text-2xl font-semibold text-gray-700 lg:mx-[350px] md:mx-[200px] h-[50px] mx-5 bg-gray-200 p-2 lg:w-[500px] md:w-[400px] w-[350px] rounded-lg">
        {amount || 'Enter amount'}
      </div>
      <div className="grid grid-cols-3 gap-6 lg:w-[500px] md:w-[500px] w-[350px] lg:mx-[350px] md:mx-[200px] mx-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleButtonPress(num)}
            className="px-6 py-6 bg-gray-200 text-xl rounded-lg shadow-md hover:bg-gray-300 focus:outline-none"
          >
            {num}
          </button>
        ))}
      </div >

      <button onClick={handleClear} className="lg:ml-[350px] md:ml-[200px] ml-3 bg-[#3838ff] lg:w-[250px] md:w-[500px] w-[350px] text-white h-[50px] mx-5">CLEAR</button>
      <button className='bg-[navy] my-5 text-white lg:mx-[5px]  md:ml-[200px] ml-3 lg:w-[250px] md:w-[500px] w-[350px] h-[50px]' onClick={handleSaveBalance}>CONTINUE</button>
    </div>
  );
};

export default Addmoney;
