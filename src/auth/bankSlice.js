// Import necessary libraries from Redux Toolkit and Axios for API requests
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Import storage and persistReducer for state persistence
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// Configuration for persisting the bank authentication state
const persistConfig = {
    key: 'bankAuth',  // Unique key for local storage
    storage,          // Defines where to store the data
};

// Initial state definition for the bank slice
const initialState = {
    user: 'Register',                          // Default user status
    AccountNumber: null,                      // Random account number
    balance: 0,                               // Initial balance
    transactions: [],                         // Transaction history
    loading: false,      
    token: "",                                // Authentication token
};

// Async thunk for user signup API call
export const signUpUser = createAsyncThunk('signUpUser', async (data, thunkAPI) => {
    try {
        const response = await axios.post('https://healthbackend-2kaw.onrender.com/api/auth/signup', data);
        return response.data;  // Return API response data if successful
    } catch (error) {
        // Handle errors from API or network issues
        return thunkAPI.rejectWithValue(error.response?.data || "An unexpected error occurred");
    }
});

// Async thunk for user login API call
export const signInUser = createAsyncThunk('signInUser', async (data, thunkAPI) => {
    try {
        const response = await axios.post('https://healthbackend-2kaw.onrender.com/api/auth/login', data);
        return response.data;  // Return login details
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || "An unexpected error occurred");
    }
});

// Async thunk for OTP verification API call
export const verifyOtp = createAsyncThunk('verifyOtp', async (data, thunkAPI) => {
    try {
        const response = await axios.post('https://healthbackend-2kaw.onrender.com/api/auth/verify-otp', data);
        return response.data;  // Return token if OTP verification succeeds
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || "An unexpected error occurred");
    }
});

// Create the bank slice using createSlice
const bankSlice = createSlice({
    name: 'auth',   // Slice name for action types
    initialState,   // Initial state reference
    reducers: {
        // Action to add balance to the user's account
        addBalance(state, action) {
            state.balance += action.payload;  // Update balance
            state.transactions.push({
                type: "Deposit",              // Transaction type
                amount: action.payload,       // Amount deposited
                date: new Date().toISOString(), // Current timestamp
                description: "Deposited",    // Transaction description
            });
        },
        
        // Action to withdraw money if balance is sufficient
        withdrawBalance(state, action) {
            if (state.balance >= action.payload) {
                state.balance -= action.payload;
                state.transactions.push({
                    type: "withdrawal",
                    amount: action.payload,
                    date: new Date().toISOString(),
                    description: "withdrawn", 
                });
            } else {
                state.error = 'Insufficient balance'; // Error message if funds are low
            }
        }
    },

    // Handle async actions using extraReducers
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;   // Set loading state during signup request
                state.error = null;     // Clear previous errors
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                const token = action.payload.token;
                state.loading = false;  // Stop loading state
                state.user = action.payload;
                state.token = token;    // Store authentication token
                state.AccountNumber = Math.floor(Math.random() * 10000000000 + 1);
                state.balance = action.payload.balance || 0;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;  // Stop loading on failure
                state.error = action.payload || "Failed to sign up";
            })
            .addCase(signInUser.pending, (state) => {
                state.loading = true;   // Set loading state during login request
                state.error = null;     // Clear previous errors
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                const token = action.payload.token;
                state.loading = false;  // Stop loading state
                state.user = action.payload;
                state.token = token;
            })    // Save token on success
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;  // Stop loading on failure
                state.error = action.payload || "Failed to sign in";
            })
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;   // Start loading during OTP verification
                state.error = null;     // Clear previous errors
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = false;  // Stop loading after success
                state.token = action.payload; // Save token after OTP verification
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;  // Stop loading on failure
                state.error = action.payload || "Failed to verify";
            });
    },
});
// Export actions for use in components
export const { addBalance,  withdrawBalance } = bankSlice.actions;

// Export the persisted reducer
export default persistReducer(persistConfig, bankSlice.reducer);
