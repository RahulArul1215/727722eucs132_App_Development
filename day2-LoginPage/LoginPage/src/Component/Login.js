import React, { useState } from 'react';

const Login = () => {
    const [reg, setReg] = useState(true);

    const switchReg = () => {
        setReg(!reg);
    };

    return (
        // <div className='flex justify-center min-h-screen items-center bg-gradient-to-r from-blue-500 to-purple-500'>

        //     <div className='border border-black p-10 rounded-md bg-white bg-opacity-80 shadow-lg'>
        //         {reg &&
        //             <p className='text-1xl flex'>
        //                 If you are a new user
        //                 <span className='text-lg cursor-pointer text-black ml-2 underline' onClick={switchReg}>
        //                     Register
        //                 </span>
        //             </p>}
        //         {reg && (
        //             <div>
        //                 <p className='text-2xl relative font-serif '>Login</p>
        //                 <form className='grid grid-rows-3 '>
        //                     <div className='p-2'><input type="email" className='border border-black rounded-md p-2' placeholder='Email' /></div>
        //                     <div className='p-2'><input type="password" className='border border-black rounded-md p-2' placeholder='Password' /></div>
        //                     <div><button className='border border-black rounded-md bg-blue-300 px-2 py-1 mt-2'>Sign in</button></div>
        //                 </form>
        //             </div>
        //         )}
        //         {!reg && (
        //             <div>
        //                 <p className='text-2xl font-serif'>Register</p>
        //                 <form className='grid grid-rows-4'>
        //                     <div className='p-2'><input type="text" className='border border-black rounded-md p-2' placeholder='Name' /></div>
        //                     <div className='p-2'><input type="email" className='border border-black rounded-md p-2' placeholder='Email' /></div>
        //                     <div className='p-2'><input type="password" className='border border-black rounded-md p-2' placeholder='Password' /></div>
        //                     <div><button className='border border-black rounded-md bg-blue-300 px-2 py-1 mt-2'>Register</button></div>
        //                 </form>
        //             </div>
        //         )}
        //     </div>
        // </div>
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex w-[1500px] h-[740px] rounded-[22px] shadow-2xl bg-black">
                <div className='ml-auto'>
                <img 
                    src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1721757173~exp=1721757773~hmac=b63a24e11961c1bcd1b2443437cbf46cd76ce714f025c359113fed8807057384" 
                    className=" inset-0 object-cover rounded-[20px]"
                /> 
                </div>
            </div>
        </div>
    );
};

export default Login;

