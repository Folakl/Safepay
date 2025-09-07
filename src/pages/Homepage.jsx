import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  // Retrieve balance and account number from Redux store
  const balance = useSelector((state) => state.auth.balance);
  const AccountNumber = useSelector((state) => state.auth.AccountNumber);
  const user = useSelector((state)=> state.auth.name);

  // Initialize navigation hook
  const navigate = useNavigate();
 

  return (
    <div className='bg-[blue]  w-full  h-full flex justify-center py-5'>
      <div className='mx-5 py-5 justify-self-center  bg-[white] lg:h-fit md:h-fit h-contain w-[500px] text-center rounded-2xl'>
        {/* User greeting and account details */}
        <div className='pt-10'>
          <h3 className='text-[20px]'>Hello<b>{user}</b></h3>
          <h3>Account Number: {AccountNumber} <b></b></h3>
          <h3 className='text-[14px]'>Remember to save today</h3>
        </div>

        {/* Balance display section */}
        <div className='bg-[blue] justify-self-center text-white text-center mt-3 py-2 lg:w-[350px] md:w-[350px] w-[300px] h-[80px]'>
          <h3 className='font-extrabold text-white text-center pt-5'>Balance: ${balance}</h3>
        </div>

        {/* Action links for transactions */}
        <div className='flex justify-center my-5 text-center gap-5'>
          <Link to ='/addmoney'><button className='lg:w-[150px] lg:h-[50px] md:w-[150px]  font-bold md:h-[50px] w-[150px] h-[50px] bg-[green] rounded-md pt-3 text-white' >Add money</button></Link>
          <Link to='/withdrawmoney'><button className='lg:w-[150px] lg:h-[50px] md:w-[150px]  font-bold md:h-[50px] w-[150px] h-[50px] bg-[blue] rounded-md pt-3 text-white' >Withdraw money</button></Link>

        </div>

        {/* Additional features */}
        <div>
          <h3 className='font-bold mt-2'>Get your money working for you</h3>
          <button className='w-[350px] h-[70px] rounded-md border-[1px] my-2' onClick={() => navigate('/transactionhistory')}>Transaction History</button>
          <h3 className='mt-2 font-bold'>Ways to earn more money</h3>
          <button className='mt-2 w-[350px] h-[70px] rounded-md border-[1px]'>Invite your friends and get a bonus</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
