import React, { useState } from "react";

const Login = ({handleLogin}) => {

// console.log(handleLogin);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();  //this prevents the the reloading of the form page after it is submitted.
        // console.log("hello guys, form submitted!!");
        // console.log("email is",email);
        // console.log("password is",password);


        handleLogin(email,password)


        setEmail("");
        setPassword("");
    }
    return (
        <div className = 'flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit = {(e) =>{submitHandler(e)}}
                 className = 'flex flex-col items-center justify-center' action="">
                    <input value ={email} 
                    onChange={(e)=>{
                        // console.log(e.target.value);
                        setEmail(e.target.value)
                    }} 
                    required 
                    className="text-white placeholder:text-gray-400 outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full" type="email" placeholder="Enter your Email"/>
                    <input 
                    value = {password}
                    onChange={(e) =>{
                        setPassword(e.target.value);
                    }}
                    required 
                    className="text-white placeholder:text-gray-400 mt-4 outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full" type="password" placeholder="Enter Password"/>
                    <button className="mt-5 text-white border-none placeholder:text-white outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full">Login</button>
                </form> 

            </div>
        </div>
    )
}

export default Login;