// Import necessary libraries and components
import { useState } from 'react';
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
    navigate('/');
  };

  return (
    <div className="h-screen flex justify-center  ">
    <div className='space-y-4 bg-[blue] lg:h-fit md:h-fit h-contain p-5 lg:w-[400px] my-5 md:w-[500px] w-screen rounded-2xl '>
        <h3 className='text-center text-[25px] pt-1 text-white'>Let's help you save</h3>
      <h3 className=' px-5 text-white text-center'>Enter the amount you want to save</h3>
      <div id="amount-display" className="text-2xl  font-semibold text-gray-700 justify-self-center h-[50px] mx-5 bg-gray-200 px-2 py-1 lg:w-[250px] md:w-[300px] w-[300px] rounded-lg">
        {amount || 'Enter amount'}
      </div>
      <div className="grid grid-cols-3 gap-6 lg:w-[250px] md:w-[300px] w-[300px] justify-self-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleButtonPress(num)}
            className="px-6 py-6 bg-gray-200 text-xl  rounded-lg shadow-md hover:bg-gray-300 focus:outline-none"
          >
            {num}
          </button>
        ))}
      </div >

     <div className='justify-self-center flex gap-5'>
       <button onClick={handleClear} className=" bg-[#3838ff] lg:w-[150px] md:w-[150px] w-[150px] text-white h-[50px] ">CLEAR</button>
      <button className='bg-[navy]  text-white   lg:w-[150px] md:w-[150px] w-[150px] h-[50px]' onClick={handleSaveBalance}>CONTINUE</button>
    </div>
    </div>
     </div>
  );
};

export default Addmoney;
