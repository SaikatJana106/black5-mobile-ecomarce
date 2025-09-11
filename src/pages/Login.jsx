import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
const Login = () => {
    return (
        <div className='bg-white'>
            <div className="flex min-h-screen w-[90%] max-w-[1400px] mx-auto max-[850px]:flex-col gap-2">
                {/* Left Section */}
                <div className=" text-white flex flex-col justify-center items-center w-fit max-[850px]:w-full p-8 bg-black rounded-4xl m-8 mx-auto max-w-fit">
                    <h1 className="text-4xl font-bold">Wellcome !</h1>
                    <p className="mt-2 text-lg border-b border-gray-400 pb-1">
                        Create an Account
                    </p>

                    {/* Google Sign in */}
                    <button className="mt-6 flex items-center justify-between bg-white text-black rounded-full px-6 py-2 w-72 shadow">
                        <span>Sign in with google</span>
                        <img
                            src="https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_1280.png"
                            alt="Google"
                            className="w-5 h-5"
                        />
                    </button>

                    {/* Phone Sign in */}
                    <button className="mt-3 flex items-center justify-between bg-white text-black rounded-full px-6 py-2 w-72 shadow">
                        <span>Sign in with number</span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp"
                            className="w-5 h-5"
                        />
                    </button>

                    <div className="flex items-center mt-4 w-72">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-2">or</span>
                        <hr className="flex-grow border-gray-400" />
                    </div>

                    {/* Form Fields */}
                    <div className="mt-4 w-72 space-y-3">
                        <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                            <FaUser className='text-white'/>
                            <input
                                type="text"
                                placeholder="Name:"
                                className="bg-transparent ml-2 outline-none flex-grow"
                            />
                        </div>
                        <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                            <MdEmail className='text-white'/>
                            <input
                                type="email"
                                placeholder="Email:"
                                className="bg-transparent ml-2 outline-none flex-grow"
                            />
                        </div>
                        <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                           <MdLock className='text-white'/>
                            <input
                                type="password"
                                placeholder="Password:"
                                className="bg-transparent ml-2 outline-none flex-grow"
                            />
                        </div>
                    </div>

                    <button className="mt-4 bg-white text-black px-6 py-2 rounded-full w-72">
                        Crete Your Acoount
                    </button>
                </div>

                {/* Right Section */}
                <div className=" flex flex-col justify-center items-center w-auto max-w-xl mx-auto max-[850px]:w-full p-8 bg-white">
                    <div className="bg-black text-white px-6 py-2 rounded-full text-lg font-medium">
                        What Is
                    </div>
                    <h2 className="mt-4 text-3xl font-bold">Platinum Card</h2>
                    <p className="text-sm text-gray-600">By Black5 Creatives</p>

                    {/* Logos */}
                    {/* <div className="mt-4 grid grid-cols-4 gap-3">
                        {Array(12)
                            .fill(0)
                            .map((_, i) => (
                                <img
                                    key={i}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Black_circle.svg/1024px-Black_circle.svg.png"
                                    alt="Black5"
                                    className="w-12 h-12"
                                />
                            ))}
                    </div> */}
                    <div className='h-30 w-full'>
                        <img src="/login/login_right.png" className='h-full w-full object-center object-contain' alt="logo" />
                    </div>

                    <hr className="my-4 w-3/4 border-gray-500" />

                    <p className="text-xs text-center px-6">
                        ifelftry vfgro;jvgfr pokgvpr ty grt gry5ty Ruma Bo gfrg vdfdrfg
                        vgse edfwfftedgvdgrv ifelftry vfgro;jvgfr pokgvpr ty y5tygoi yktkhg
                        5tery
                    </p>

                    <hr className="my-4 w-3/4 border-gray-500" />

                    <p className="mt-4 text-xl">Done Creating</p>
                    <h3 className="text-4xl font-bold">Your Acount ?</h3>

                    <Link to={"/congratulation"} className="mt-3 bg-black text-white px-6 py-2 rounded-full">
                        Lets Open Your Card
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
