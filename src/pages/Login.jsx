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
        e.preventDefault();

        dispatch(signInUser(formData))
            .unwrap() // Wait for the action to_ complete
            .then((response) => {
                console.log("Logged in successfully");              
                navigate("/"); // Navigate to the homepage 
            })
            .catch((error) => {
                console.error('Login failed :', error); 
                alert("Invalid email or password"); 
            });
    };

    return (
        <div className='bg-[blue] h-screen  w-100% flex justify-center  pt-10'>
            <div className=' h-fit   my-5 lg:w-[400px] md:w-[400px] w-[300px] mb-[450px] bg-[white] font-bold text-center lg:mx-[270px] md:mx-[270px] mx-5 py-10 rounded-2xl'>
                <div className='mx-2'>
                    <div className='px-5'>
                        <h3 className='font-bold px-[50px]'>Welcome Back</h3>
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
                            className='lg:w-[300px] md:w-[300px] w-[250px] text-white mt-5 justify-self-center h-[40px] rounded-2xl bg-[blue]'
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

