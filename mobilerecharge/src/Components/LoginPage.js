// // // src/LoginPage.js
// // import React from 'react';
// // import image from '../Resource/image';
// // import { useState } from 'react';

// // const LoginPage = () => {

// //     const [loginOrReg, setLoginOrReg] = useState(false);

// //     return (
// //         <div className=' bg-white'>
// //             <div className='flex ml-[100px]'>
// //             <img src={image.pulse} width={50} height={50} className=" mt-9" alt="Pulse Logo" />
// //             <span className="ml-3 text-2xl font-poppins font-bold mt-[44px]">PulseTopUp</span>
// //             </div>

// //         <div className="min-h-screen flex items-center justify-center -mt-20 ">
// //             <div className=' flex shadow-xl'>
// //             <div className="bg-red-100 h-[600px] rounded-l-lg w-[600px] hidden sm:flex">
// //             <img src={image.login} width={700} height={200}/>
// //             </div>
        
// //             <div className="bg-white h-[600px]  rounded-r-lg w-[600px]">
// //                 <h2 className="text-2xl font-montserrat font-bold mt-[100px] text-red-600 mb-4 text-center">Flat 50% off on your first 3 recharges!</h2>
// //                 <p className="text-gray-600 mb-8 font-poppins text-center">Sign up and enjoy a massive 50% discount on your first three <br/>recharges. Don't miss out!</p>
// //                 <div className="flex justify-around mb-4    ">
               
// //                 <button className={` ${!loginOrReg ? 'text-red-600 text-lg' : 'text-gray-600 font-thin'}`} onClick={() => setLoginOrReg(false)}>
// //                 <h1 className='font-poppins font-semibold text-lg '>Login</h1>
// //               </button>
                    
// //               <button className={` ${loginOrReg ? 'text-red-600 text-lg' : 'text-gray-600 font-thin'}`} onClick={() => setLoginOrReg(true)}>
// //                 <h1 className='font-poppins font-semibold text-lg'>Register</h1>
// //               </button>


// //                 </div>
                
// //                 {!loginOrReg &&(
// //                     <>
// //                 <form className='flex flex-col justify-center items-center'>
// //                     <input 
// //                         type="email" 
// //                         placeholder="Email" 
// //                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600" 
// //                         />
// //                     <input 
// //                         type="password" 
// //                         placeholder="Password" 
// //                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600" 
// //                         />
// //                     <button className="w-[400px] bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300">
// //                         Login
// //                     </button>
// //                 </form>
// //                 <div className='flex flex-col justify-center items-center'>
// //                     <h2>or</h2>
// //                     <h1 className='text-blue-700'>SignUp</h1>
// //                 </div>
// //                 </>
// //                 )}
// //                 {loginOrReg &&(
// //                     <>
// //                 <form className='flex flex-col justify-center items-center'>
// //                     <input 
// //                         type="email" 
// //                         placeholder="Email" 
// //                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600" 
// //                         />
// //                     <input 
// //                         type="password" 
// //                         placeholder="cxvdsgs" 
// //                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600" 
// //                         />
// //                     <input 
// //                         type="password" 
// //                         placeholder="cxvdsgs" 
// //                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600" 
// //                         />
// //                     <button className="w-[400px] bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300">
// //                         Create Account
// //                     </button>
// //                 </form>
// //                 </>
// //                 )}

// //             </div>
// //         </div>
// //         </div>

// //         </div>
// //     );
// // }

// // export default LoginPage;
// // src/LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import image from '../Resource/image';

// const LoginPage = () => {
//     const [loginOrReg, setLoginOrReg] = useState(false);
//     const [loginPass, setloginPass] = useState('');
//     const [phone, setphone] = useState('');
//     const [pass, setpass] = useState('');
//     const [email, setemail] = useState('');
//     const navigate = useNavigate();

//     const login = async (e) => {
//         e.preventDefault();
//         try {
//             const { data: users } = await axios.get(`http://localhost:5000/user?email=${email}`);
//             const user = users[0];
//             if (user) {
//                 if (user.pass === loginPass) {
//                     toast.success('Login successful', { duration: 2000 });
//                     navigate('/');
//                 } else {
//                     alert('Invalid password');
//                 }
//             } else {
//                 toast.error('Invalid email', { duration: 2000 });
//             }
//         } catch (err) {
//             console.error(err);
//             toast.error('An error occurred during login', { duration: 2000 });
//         }
//     };

//     const register = async (e) => {
//         e.preventDefault();
//         try {
//             console.log({ email, phone, pass }); // Debugging line
//             const response = await axios.post(`http://localhost:5000/user`, { email, phone, pass });
//             console.log(response.data); // Debugging line
//             toast.success('Registration successful', { duration: 2000 });
//             navigate('/');
//         } catch (e) {
//             console.log(e.message);
//             toast.error('An error occurred during registration', { duration: 2000 });
//         }
//     };

//     return (
//         <div className='bg-white'>
//             <div className='flex ml-[100px]'>
//                 <img src={image.pulse} width={50} height={50} className="mt-9" alt="Pulse Logo" />
//                 <span className="ml-3 text-2xl font-poppins font-bold mt-[44px]">PulseTopUp</span>
//             </div>

//             <div className="min-h-screen flex items-center justify-center -mt-20">
//                 <div className='flex shadow-xl'>
//                     <div className="bg-red-100 h-[600px] rounded-l-lg w-[600px] hidden sm:flex">
//                         <img src={image.login} width={700} height={200} alt="Login Illustration" />
//                     </div>

//                     <div className="bg-white h-[600px] rounded-r-lg w-[600px]">
//                         <h2 className="text-2xl font-montserrat font-bold mt-[100px] text-red-600 mb-4 text-center">Flat 50% off on your first 3 recharges!</h2>
//                         <p className="text-gray-600 mb-8 font-poppins text-center">Sign up and enjoy a massive 50% discount on your first three <br />recharges. Don't miss out!</p>
//                         <div className="flex justify-around mb-4">
//                             <button className={` ${!loginOrReg ? 'text-red-600 text-lg' : 'text-gray-600 font-thin'}`} onClick={() => setLoginOrReg(false)}>
//                                 <h1 className='font-poppins font-semibold text-lg'>Login</h1>
//                             </button>
//                             <button className={` ${loginOrReg ? 'text-red-600 text-lg' : 'text-gray-600 font-thin'}`} onClick={() => setLoginOrReg(true)}>
//                                 <h1 className='font-poppins font-semibold text-lg'>Register</h1>
//                             </button>
//                         </div>

//                         {!loginOrReg && (
//                             <div>
//                                 <form className='flex flex-col justify-center items-center' onSubmit={login}>
//                                     <input
//                                         type="email"
//                                         placeholder="Email"
//                                         onChange={(e) => { setemail(e.target.value) }}
//                                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
//                                         required
//                                     />
//                                     <input
//                                         type="password"
//                                         placeholder="Password"
//                                         onChange={(e) => setloginPass(e.target.value)}
//                                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
//                                         required
//                                     />
//                                     <button type="submit" className="w-[400px] bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300">
//                                         Login
//                                     </button>
//                                 </form>
//                             </div>
//                         )}
//                         {loginOrReg && (
//                             <div>
//                                 <form className='flex flex-col justify-center items-center' onSubmit={register}>
//                                     <input
//                                         type="email"
//                                         placeholder="Email"
//                                         onChange={(e) => { setemail(e.target.value) }}
//                                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Phone"
//                                         onChange={(e) => { setphone(e.target.value) }}
//                                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
//                                         required
//                                     />
//                                     <input
//                                         type="password"
//                                         placeholder="Password"
//                                         onChange={(e) => { setpass(e.target.value) }}
//                                         className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
//                                         required
//                                     />
//                                     <button type="submit" className="w-[400px] bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300">
//                                         Create Account
//                                     </button>
//                                 </form>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../AuthContext';
import image from '../Resource/image';

const LoginPage = () => {
    const { login } = useAuth();
    const [loginOrReg, setLoginOrReg] = useState(false);
    const [loginPass, setLoginPass] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data: users } = await axios.get(`http://localhost:5000/user?email=${email}`);
            const user = users[0];
            if (user) {
                if (user.pass === loginPass) {
                    toast.success('Login successful', { duration: 2000 });
                    login();
                    navigate('/');
                } else {
                    toast.error('Invalid password', { duration: 2000 });
                }
            } else {
                toast.error('Invalid email', { duration: 2000 });
            }
        } catch (err) {
            console.error(err);
            toast.error('An error occurred during login', { duration: 2000 });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log({ email, phone, pass }); // Debugging line
            const response = await axios.post(`http://localhost:5000/user`, { email, phone, pass });
            console.log(response.data); // Debugging line
            toast.success('Registration successful', { duration: 2000 });
            navigate('/');
        } catch (e) {
            console.log(e.message);
            toast.error('An error occurred during registration', { duration: 2000 });
        }
    };

    return (
        <div className='bg-white'>
            <div className='flex ml-[100px]'>
                <img src={image.pulse} width={50} height={50} className="mt-9" alt="Pulse Logo" />
                <span className="ml-3 text-2xl font-poppins font-bold mt-[44px]">PulseTopUp</span>
            </div>

            <div className="min-h-screen flex items-center justify-center -mt-20">
                <div className='flex shadow-xl'>
                    <div className="bg-red-100 h-[600px] rounded-l-lg w-[600px] hidden sm:flex">
                        <img src={image.login} width={700} height={200} alt="Login Illustration" />
                    </div>

                    <div className="bg-white h-[600px] rounded-r-lg w-[600px]">
                        <h2 className="text-2xl font-montserrat font-bold mt-[100px] text-red-600 mb-4 text-center">Flat 50% off on your first 3 recharges!</h2>
                        <p className="text-gray-600 mb-8 font-poppins text-center">Sign up and enjoy a massive 50% discount on your first three <br />recharges. Don't miss out!</p>
                        <div className="flex justify-around mb-4">
                            <button className={` ${!loginOrReg ? 'text-red-600 text-lg' : 'text-gray-600 font-thin'}`} onClick={() => setLoginOrReg(false)}>
                                <h1 className='font-poppins font-semibold text-lg'>Login</h1>
                            </button>
                            <button className={` ${loginOrReg ? 'text-red-600 text-lg' : 'text-gray-600 font-thin'}`} onClick={() => setLoginOrReg(true)}>
                                <h1 className='font-poppins font-semibold text-lg'>Register</h1>
                            </button>
                        </div>

                        {!loginOrReg && (
                            <div>
                                <form className='flex flex-col justify-center items-center' onSubmit={handleLogin}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => setLoginPass(e.target.value)}
                                        className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                                        required
                                    />
                                    <button type="submit" className="w-[400px] bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300">
                                        Login
                                    </button>
                                </form>
                            </div>
                        )}
                        {loginOrReg && (
                            <div>
                                <form className='flex flex-col justify-center items-center' onSubmit={handleRegister}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        onChange={(e) => { setPhone(e.target.value) }}
                                        className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => { setPass(e.target.value) }}
                                        className="w-[400px] p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                                        required
                                    />
                                    <button type="submit" className="w-[400px] bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300">
                                        Create Account
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
