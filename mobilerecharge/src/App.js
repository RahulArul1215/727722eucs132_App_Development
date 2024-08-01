// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import { Route, Routes, Switch } from 'react-router-dom';
// import LoginPage from './Components/LoginPage'
// import ContactUs from "./Components/Contact";
// import About from "./Components/About";
// import Adminportal from "./Admin/Adminportal";
// import RechargeHistory from "./Components/RechargeHistory";

// function App() {

  
//   return (
//     <>
//       {/* <div> */}
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/contact" element={<ContactUs/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path="/login" element={<LoginPage/>} />
//           <Route path="/admin" element={<Adminportal/>} />
//           <Route path="/history" element={<RechargeHistory/>} />
          
          
//         </Routes>
//       {/* </div> */}
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import ContactUs from './Components/Contact';
import About from './Components/About';
import Adminportal from './Admin/Adminportal';
import RechargeHistory from './Components/RechargeHistory';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/admin" element={<Adminportal />} />
                    <Route path="/history" element={<RechargeHistory />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </AuthProvider>
    );
}

export default App;
