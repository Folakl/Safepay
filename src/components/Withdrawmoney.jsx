import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withdrawBalance } from '../auth/bankSlice';

const Withdrawmoney = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const balance = useSelector((state) => state.auth.balance);

  const handleInputChange = (value) => {
    setAmount((prevAmount) => prevAmount * 10 + value);
  };

  const handleClear = () => setAmount(0);

  const handleWithdraw = () => {
    if (balance < amount) {
      alert('Insufficient funds');
    } else {
      alert('Withdrawal successful');
      dispatch(withdrawBalance(amount));
      navigate('/Homepage');
    }
    setAmount(0);
  };

  return (
    <div className="lg:p-5 h-[800px] w-full bg-[blue]">
      <h1 className="text-2xl font-bold text-center text-white">Withdraw Money</h1>
      <p className="text-lg text-center text-white">Current Balance: ${balance}</p>

      <div className="mt-5 justify-self-center">
        <h2 className="block text-lg font-medium text-white">Enter Withdrawal Amount</h2>
        <div
          id="amount-display"
          className="text-2xl font-semibold text-gray-700 lg:w-[500px] md:w-[500px] mt-2 w-[350px] bg-gray-200 p-4 rounded-lg"
        >
          {amount || 'Enter amount'}
        </div>
        <div className="grid grid-cols-3 gap-6 lg:w-[500px] md:w-[500px] w-[350px] mt-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleInputChange(num)}
              className="px-6 py-6 bg-gray-200 text-xl rounded-lg shadow-md hover:bg-gray-300 focus:outline-none"
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleWithdraw}
        className="mt-5 mx-5 lg:w-[250px] md:w-[500px] w-[350px] px-6 py-3 lg:ml-[300px] md:ml-[200px] ml-5 bg-blue-500 text-white rounded hover:bg-blue-400"
      >
        WITHDRAW
      </button>
      <button
        className="mt-5 px-6 py-3 lg:w-[250px] md:w-[500px] w-[350px] md:ml-0 ml-5 font-bold bg-[navy] text-white rounded hover:bg-blue-400"
        onClick={handleClear}
      >
        CLEAR
      </button>
    </div>
  );
};

export default Withdrawmoney;
