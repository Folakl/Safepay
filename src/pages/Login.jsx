// Import necessary libraries and components
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../auth/bankSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Initialize navigation hook
    const navigate = useNavigate();

    // Initialize dispatch function for Redux actions
    const dispatch = useDispatch();

    // State to store form input values
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input field changes and update form data state
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Dispatch the login action
        dispatch(signInUser(formData))
            .unwrap() // Wait for the action to complete
            .then((response) => {
                console.log("Logged in successfully");              
                navigate("/homepage"); // Navigate to the homepage on success
            })
            .catch((error) => {
                console.error('Login failed :', error); // Log error for debugging
                alert("Invalid email or password"); // Display error message to the user
            });
    };

    return (
        <div className='bg-[blue] h-[1000px] w-100% flex justify-center items-center'>
            <div className='h-[450px] lg:w-[500px] md:w-[500px] w-[350px] mb-[450px] bg-[white] font-bold text-center lg:mx-[270px] md:mx-[270px] mx-5 rounded-2xl'>
                <div className='mx-2'>
                    <div className='px-5'>
                        <h3 className='font-bold pt-[120px] px-[50px]'>Welcome Back</h3>
                        <h3 className='font-semibold px-[40px]'>Log in to your Account</h3>
                        
                        {/* Input field for email */}
                        <h3 className='pt-3'>Email</h3>
                        <input
                            type="email"
                            className='mt-3 lg:w-[350px] md:w-[350px] w-350px h-[40px] border-2 outline-none border-[blue] px-5 rounded-2xl'
                            value={formData.email}
                            name="email"
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />

                        {/* Input field for password */}
                        <h3 className='pt-3 text-center'>Password</h3>
                        <input
                            type="password"
                            className='mt-3 lg:w-[350px] md:w-[350px] w-350px h-[40px] border-2 outline-none border-[blue] px-5 rounded-2xl'
                            value={formData.password}
                            name="password"
                            placeholder='Enter your password'
                            onChange={handleChange}
                        />

                        {/* Submit button */}
                        <button
                            onClick={handleLogin}
                            className='lg:w-[350px] md:w-[350px] w-[250px] text-white mt-5 lg:mx-10 md:mx-10 mx-5 h-[40px] rounded-2xl bg-[blue]'
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

