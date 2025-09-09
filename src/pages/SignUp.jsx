// Import necessary libraries and components
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../auth/bankSlice';
import clipart from '../assetsone/carte.jpeg';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  // Initialize navigation hook
  let navigate = useNavigate();

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // Handle input field changes and update form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Dispatch the sign-up action
    dispatch(signUpUser(formData))
      .unwrap() // Wait for the action to complete
      .then(() => {
        // Navigate to the verification page after a delay
        setTimeout(() => {
          navigate('/verify');
        }, 2000);
      })
      .catch((error) => {
        // Handle errors during sign-up
        console.error("Sign-up failed:", error);
        alert("Error during sign-up. Please try again.");
      });
  };
  return (
    <div className='bg-[blue] w-100% lg:h-fit md:h-fit h-contain  overflow-y-auto'>

<div className='grid grid-cols-2  justify-self-center'>
      {/* Left section with promotional content */}
      <div className='w-50% lg:block md:block hidden '>
        <div className='lg:h-fit md:h-fit h-contain px-5 w-[320px] py-10 rounded-[42px]  my-5 bg-[#53534b] '>
          <img src={clipart} alt="okay" className='w-[200px] h-[200px] rounded-e-lg mx-10' />
          <h3 className='font-bold text-[white] text-[30px] mt-[20px] text-center'>Save money</h3>
          <h3 className='mt-5 text-white text-center font-sans'>
            We help you save money to reach your goals, stay prepared for the unexpected, and build a secure future.
            Enjoy the freedom that comes with financial independence. Saving money today lets you plan the life you want
            and rely less on credit or debt.
          </h3>
        </div>
      </div>

      {/* Right section with sign-up form */}
      <div className='w-50% my-2'>
        <div className='lg:h-fit md:fit h-contain w-[320px] py-10 mx-2 rounded-[40px] my-5 bg-[white] text-[#220f0f]'>
          <h3 className='font-bold  text-center'>Create Account</h3>

          {/* Input fields for user details */}
          <h3 className='pt-5 font-bold mx-5'>Firstname</h3>
          <input
            className='w-[300px] bg-transparent mx-2 border-black border-[1px] mt-3 rounded-2xl h-[40px] pl-2'
            type="text" value={formData.firstName} name="firstName" placeholder='Enter your firstname'
            onChange={handleChange}
          />

          <h3 className='pt-3 font-bold mx-5'>Lastname</h3>
          <input
            className='w-[300px] bg-transparent mx-2 border-black border-[1px] mt-3 rounded-2xl h-[40px] pl-2'
            type="text" value={formData.lastName} name="lastName" placeholder='Enter your lastname'
            onChange={handleChange}
          />

          <h3 className='pt-3 font-bold mx-5'>Email</h3>
          <input
            className='w-[300px] bg-transparent mx-2 border-black border-[1px] mt-3 rounded-2xl h-[40px] pl-2'
            type="email" value={formData.email} name="email" placeholder='Enter your email'
            onChange={handleChange}
          />

          <h3 className='pt-3 font-bold mx-5'>Password</h3>
          <input
            className='w-[300px] bg-transparent mx-2 border-black border-[1px] mt-3 rounded-2xl h-[40px] pl-5'
            type="password" value={formData.password} name="password" placeholder='Enter your password'
            onChange={handleChange}
          />

          {/* Submit button */}
          <button
            className='w-[300px] h-[50px] mx-2 bg-[blue] text-white rounded-md mt-3'
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </div>
     
    </div>
    <h3 className='justify-self-end font-bold  mx-5'>Already have an account  <Link to="/login"><span className=' text-[20px] text-[white]'>Sign in here</span></Link></h3>
    </div>
  );
};

export default SignUp;
