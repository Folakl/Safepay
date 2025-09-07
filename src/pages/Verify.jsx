// Import necessary libraries and components
import  { useState } from 'react';
import { verifyOtp } from '../auth/bankSlice';
import { useDispatch } from 'react-redux';
import carte from '../assetsone/carte.jpeg';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({email: '', otp: '',});

  const handleChange = (e) => {setFormData({ ...formData, [e.target.name]: e.target.value });  };

  const handleSubmit = (e) => {e.preventDefault(); 
    // Dispatch the OTP verification action
    dispatch(verifyOtp(formData))
      .unwrap() // Wait for the action to complete
      .then((response) => {
        alert('Account verified successfully. You can now log in.');
        navigate('/login'); // Navigate to the login page on success
      })
      .catch((error) => {
        alert(`Verification failed: ${error}`); // Display error message to the user
        console.error('Verification error:', error); // Log error for debugging
      });
  };

  return (
    <div className="bg-[beige]">
      <div className='grid grid-cols-2'>
        {/* Left section with image */}
        <div className="h-[480px]">
          <img
            src={carte}
            alt="Verification Graphic"
            className="rounded-e-lg mx-[345px] w-[280px] h-[480px]"
          />
        </div>

        {/* Right section with form */}
        <div className="border-2 text-center bg-[white] w-[280px] h-[480px] rounded-2xl border-[black]">
          <h3 className="mt-[100px] font-bold">Verify Email</h3>

          {/* Input field for email */}
          <h3 className="pt-5 font-bold">Email</h3>
          <input
            className="w-[250px] h-[40px] rounded-2xl px-5"
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          {/* Input field for OTP */}
          <h3 className='mt-5 font-bold'>Token</h3>
          <input
            className="w-[250px] h-[40px] rounded-2xl px-5"
            type="text"
            value={formData.otp}
            name="otp"
            placeholder="Enter the OTP sent to your email"
            onChange={handleChange}
          />

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-[250px] text-white mt-5 h-[40px] rounded-2xl bg-[blue]"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;


