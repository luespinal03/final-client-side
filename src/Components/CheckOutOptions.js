import { useState, useEffect } from 'react'
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";
import './CheckOutOptions.css'

const CheckOutOptions = () => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    // const [error, setError] = useState(false);
    const [message, setMessage] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();



    const loginHandler = async () => {
        const loginResult = await auth.login(email, password);
        if (email.length > 0 && password.length > 0) {

            if (loginResult.success) {
                // setError(false)
                navigate("/shoppingcart");
            }
            if (!loginResult.success) {
                // setError(true)
                setLoginMessage(loginResult.message);
            }
        }
        if (email.length < 1) {
            setEmailError('Please enter a valid Email address.');
        }
        if (password.length < 1) {
            setPasswordError('Please enter a valid Password.');
        }
        if (email.length < 1 && password.length < 1) {
            setMessage('Email or password cannot be empty')
            // setError(true)
        }
    }


    // this is watching email and password, if hteir lenghts are longer than 0 then error message goes away
    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            // setError(false)
            setMessage('')
        }
        if (email.length > 0) setEmailError('');
        if (password.length > 0) setPasswordError('');

    }, [email, password])



    return (
        <div className="container mt-[145px] bg-gray-100">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-4">
                    <div className="border-b pb-8">
                        <h1 className="justify-center font-semibold text-2xl h-[80px]">Welcome to GAMESHAK</h1>
                        <p>Sign in to your GAMESHAK account</p>
                    </div>
                    {/* if error is true then show message */}
                    <p className='text-red-600 text-lg'>{message}</p>

                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='border-2 border-gray-300 mt-10 mr-[20px] text-2xl h-[50px] w-[359px]'></input>
                    <p className='text-red-600 text-lg mr-[400px]'>{emailError}</p>


                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' className='border-2 border-gray-300 text-2xl h-[50px] mr-[20px] w-[359px]'></input>
                    <p className='text-red-600 text-lg mr-[400px]'>{passwordError}</p>

                    <br />
                    <a className='text-[15px] mr-[280px] mt-[5px]'>Forgot password?</a>

                    <br />
                    <input type='checkbox' className='h-[20px] w-[20px] mt-[20px]'></input>
                    <label className='text-[25px] ml-[20px] text-neutral-500'>Keep me signed in</label>
                    <p className='text-neutral-500'>You won't have to sign in as often on this device, only check this box on personal devices.</p>
                    <br />
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 px-5 py-4 text-sm text-white uppercase w-[400px]" onClick={loginHandler}>Sign In</button>
                    <div className='hr-line mt-10'><span className='hr-span'>Or</span></div>
                    <button className="bg-white font-semibold hover:bg-gray-600 border-black px-5 py-4 text-sm text-black uppercase w-[400px] mt-10" onClick={() => { navigate('/signup') }}>Create Account</button>
                    <br />
                    <button className="bg-white font-semibold hover:bg-gray-600 border-black px-5 py-4 text-sm text-black uppercase w-[400px] mt-10" onClick={() => { navigate('/checkout') }}>guest checkout</button>
                </div>
            </div>
        </div>

    )
}

export default CheckOutOptions