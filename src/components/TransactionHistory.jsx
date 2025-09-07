import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const TransactionHistory = () => {
    const navigate = useNavigate();
    const transactions = useSelector((state) => state.auth.transactions);

    const handleGoback = () => {
        navigate('/homepage')
    };

    return (
        <div className='flex justify-center'>
            <div className='bg-white'>
            <div className=''>
            <h2 className='font-bold text-center  text-[30px] py-10'>Transaction History</h2>
             <div className='mx-5'>
             {transactions.length === 0 ? (
                    <p>No transactions yet.</p>
                ) : (
                    <div className='w-contain h-full justify-self-center  py-5 px-10 rounded-md'>
                        {transactions.map((transaction, index) => (
                            <div key={index} className='bg-[blue]  text-white py-5 h-[50px] px-5 rounded-xl border-2'>
                                <h3>{index}:   {transaction.type} : ${transaction.amount} {transaction.description} @ {new Date(transaction.date).toLocaleString()}</h3>
                            </div>
                        ))}
                    </div>
                )} 
             </div>

            <button
             className='w-[200px] h-[50px] mt-2 mx-[450px] text-white bg-[#1919c7] rounded-md'
           onClick={handleGoback}
             >Return back to home</button>
            </div>
        </div>
        </div>
    );
};

export default TransactionHistory;
