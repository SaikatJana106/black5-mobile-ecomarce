import React from 'react'
import { GiShoppingBag } from "react-icons/gi";
const CardCongrats = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white rounded-xl shadow-lg w-[350px] p-6 text-center relative overflow-hidden border border-gray-200">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="/home/design.png"
                        alt="pattern"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <h1 className="text-2xl font-bold relative z-10">Congratulations</h1>

                <div className="mt-2 px-4 py-1 border rounded-full text-sm font-medium relative z-10">
                    You Get the silver Card !
                </div>

                <p className="mt-4 text-lg font-medium relative z-10">Priyanka!</p>

                <div className="mt-4 flex justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center">
                       <GiShoppingBag size={30}/>
                    </div>
                </div>

                <p className="mt-2 relative z-10">Lets Start Shopping!</p>

                <button className="mt-4 bg-black text-white px-6 py-2 rounded-full w-full relative z-10 cursor-pointer" >
                    Shop Now Phone Cases
                </button>

                <p className="mt-2 text-xs text-gray-500 relative z-10">
                    Use the cards before expiring ! or it will be too late
                </p>
            </div>
        </div>
    )
}

export default CardCongrats
