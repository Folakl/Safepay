// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from './pages/SignUp';
// import Verify from './pages/Verify';
// import Login from './pages/Login';
// import HomePage from './pages/Homepage';
// import Addmoney from './components/Addmoney';
// import Withdrawmoney from './components/Withdrawmoney';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path='/' element={<SignUp />} />
//           {/* <Route path='/verify' element={<Verify />} /> */}
//           <Route path='/login' element={<Login />} />
//           <Route path='/homepage' element={<HomePage />} />
//           <Route path='/addmoney' element={<Addmoney />} />
//           <Route path='/withdrawmoney' element={<Withdrawmoney />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import SignUp from './pages/SignUp';
import Verify from './pages/Verify';
import TransactionHistory from './components/TransactionHistory';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import Addmoney from './components/Addmoney';
import Withdrawmoney from './components/Withdrawmoney';
import store, { persistor } from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <Routes>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<Login />} />
              <Route path='/homepage' element={<HomePage />} />
              <Route path='/addmoney' element={<Addmoney />} />
         
              <Route path='/withdrawmoney' element={<Withdrawmoney />} />
              <Route path='/transactionhistory' element={<TransactionHistory />} />
              <Route path='/verify' element={<Verify/>} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
