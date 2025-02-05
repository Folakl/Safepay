import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const TransactionHistory = () => {
    const navigate = useNavigate();
    const transactions = useSelector((state) => state.auth.transactions);

    const handleGoback = () => {
        navigate('/homepage')
    };

    return (
        <div className='bg-white'>
            <div className=''>
            <h2 className='font-bold mx-[400px] text-[30px] py-10'>Transaction History</h2>
                {transactions.length === 0 ? (
                    <p>No transactions yet.</p>
                ) : (
                    <ul className='w-[600px] h-full mx-[250px] bg-[blue] text-white py-10 px-10 rounded-md'>
                        {transactions.map((transaction, index) => (
                            <li key={index}>
                                <strong>{transaction.type}</strong> : ${transaction.amount} {transaction.description} @ {new Date(transaction.date).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                )} 

            <button
             className='w-[200px] h-[50px] mt-2 mx-[450px] text-white bg-[#1919c7] rounded-md'
           onClick={handleGoback}
             >Return back to home</button>
            </div>
        </div>
    );
};

export default TransactionHistory;
