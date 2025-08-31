import React, { useRef, useState } from 'react'
import { FaStar } from "react-icons/fa";
import caseData from '../json/phonecasefiter.json'
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from 'react-icons/ci';
import { FaWhatsapp } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Customise = () => {
    const sampleCases = [
        { id: 1, image: "/2phonecover/1.png" },
        { id: 2, image: "/2phonecover/1.png" },
        { id: 3, image: "/2phonecover/1.png" },
    ];
    const reviews = [
        { id: 1, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 2, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },

    ];

    // arrow scroll logic 
    // =================1st phone case=============
    const PhoneProductfirstscrollRef = useRef(null);

    const PhoneProductfirstscroll = (direction) => {
        if (PhoneProductfirstscrollRef.current) {
            PhoneProductfirstscrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };
    // ===============1st phone case==============

    // =================2nd phone case=============
    const PhoneProductsecondscrollRef = useRef(null);

    const PhoneProductsecondscroll = (direction) => {
        if (PhoneProductsecondscrollRef.current) {
            PhoneProductsecondscrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };
    // ===============2nd phone case==============


    // =================reviews=============
    const reviewsscrollRef = useRef(null);

    const reviewsscroll = (direction) => {
        if (reviewsscrollRef.current) {
            reviewsscrollRef.current.scrollBy({
                top: direction === "up" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };
    // ===============reviews==============

    // =================sample case=============
    const samplecasescrollRef = useRef(null);

    const samplecasescroll = (direction) => {
        if (samplecasescrollRef.current) {
            samplecasescrollRef.current.scrollBy({
                top: direction === "up" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };
    // ===============sample case==============


    // const samplecasescrollRef = useRef(null);

    // const samplecasescroll = (direction) => {
    //     if (samplecasescrollRef.current) {
    //         const firstItem = samplecasescrollRef.current.querySelector(".sample-item"); // target one item
    //         const itemWidth = firstItem ? firstItem.offsetWidth : 0; // get item width

    //         samplecasescrollRef.current.scrollBy({
    //             left: direction === "left" ? -itemWidth : itemWidth,
    //             behavior: "smooth",
    //         });
    //     }
    // };


    // arrow scroll logic

    // customise logic 
    const images = [
        "/customise/1.png",
        "/customise/2.png",
        "/customise/3.png",
        "/customise/4.png"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // customise logic 

    const [selectedModel, setSelectedModel] = useState("");
    return (
        <div>
            <section className='flex flex-col w-full justify-center items-center pt-10 pb-5'>
                <div className='h-40 w-40'>
                    <img loading='lazy' src="/4productpage/product-logo.png" alt="" />
                </div>
                <h1 className='text-white text-[clamp(2rem,4vw,4rem)]'>Premium Phone Case</h1>
                <p className='text-white text-[clamp(1.3rem,2.2vw,4rem)]'>We Make The Best Cases For You!</p>
            </section>

            <section className="w-[80%] text-white  px-4 flex justify-between items-center mx-auto max-w-5xl ">
                <div className='flex flex-col justify-center items-center w-[45%] max-[1150px]:w-full max-w-md max-[1150px]:mx-auto'>
                    <img src="/w1.png" alt="women" className='h-80 z-50 max-[640px]:hidden' />

                    <div className="bg-white text-black w-full h-60 rounded-3xl mt-[-100px] max-[640px]:mt-0  p-4 flex flex-col sm:flex-row gap-4 items-end min-h-fit min-w-fit">
                        {/* Left - Product image */}
                        <img
                            src="/customise/1.png"
                            alt="Phone Case"
                            className="w-32 h-32 object-cover rounded-2xl max-[640px]:w-auto  max-[640px]:flex-[1]"
                        />

                        {/* Right - Text and button */}
                        <div className="text-left max-[640px]:w-full">
                            <p className="text-sm font-medium text-gray-600">The Best Phone Cases For You !</p>
                            <h2 className="text-2xl font-bold mb-2">Phone Cases</h2>

                            <button className="bg-black text-white px-4 py-1 rounded-full text-sm mb-2">
                                Customize Now
                            </button>

                            {/* Stars */}
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center w-[45%] max-[1150px]:hidden max-w-md  '>
                    <img src="/w1.png" alt="women" className='h-80 z-50' />

                    <div className="bg-white text-black w-full h-60 rounded-3xl mt-[-100px]  p-4 flex flex-col sm:flex-row gap-4 items-end min-h-fit min-w-fit">
                        {/* Left - Product image */}
                        <img
                            src="/customise/1.png"
                            alt="Phone Case"
                            className="w-32 h-32 object-cover rounded-2xl"
                        />

                        {/* Right - Text and button */}
                        <div className="text-left ">
                            <p className="text-sm font-medium text-gray-600">The Best Phone Cases For You !</p>
                            <h2 className="text-2xl font-bold mb-2">Phone Cases</h2>

                            <button className="bg-black text-white px-4 py-1 rounded-full text-sm mb-2">
                                Customize Now
                            </button>

                            {/* Stars */}
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-black text-white min-h-screen flex flex-col items-center py-6">
                <h1 className="text-[clamp(1.6rem,3vw,4rem)] font-semibold mb-1">Customize Your Phone Cases</h1>
                <p className="text-[clamp(0.80rem,1.5vw,4rem)] mb-6">We Make the best Cases for You! greg y5ey757 yrtye</p>

                <div className="bg-white text-black rounded-3xl p-4 w-[85%]  flex justify-around shadow-lg max-[1050px]:flex-col-reverse max-w-[1400px]">
                    {/* Left - Scrollable Phone Cases */}
                    <div className='flex flex-col justify-center items-center  max-h-[800px] bg-[#e9e9e9] py-2 px-7 rounded-4xl w-fit max-[1350px]:hidden'>
                        <IoIosArrowDown onClick={() => samplecasescroll("down")} className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-4xl' />
                        <div ref={samplecasescrollRef} className="overflow-hidden  flex flex-col items-center gap-4  scrollbar-hide">
                            {sampleCases.map((item, i) => (
                                <div key={i} className='h-96 '>
                                    <img src={item.image} alt="" className='h-full object-cover object-center' />
                                </div>
                            ))}
                        </div>
                        <IoIosArrowUp onClick={() => samplecasescroll("up")} className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-4xl' />
                    </div>
                    {/* Center - Customization Section */}
                    <div className="w-[33.33%] max-[1350px]:w-[45%] space-y-4 max-[1050px]:w-full  ">
                        <h2 className="text-[clamp(2rem,3vw,4rem)] font-semibold">Let’s Customize</h2>
                        <div className='  text-lg flex flex-col max-[1270px]:flex-row max-[1270px]:flex-wrap items-start w-fit gap-2 '>
                            <div className='flex justify-center items-center gap-2'>
                                <strong className='bg-black h-2 w-2 rounded-full'></strong>
                                <span className="px-2  bg-black rounded-full text-lg text-white">Premium Metal Case</span>
                            </div>

                            <div className='flex justify-center items-center gap-2'>
                                <strong className='bg-black h-2 w-2 rounded-full'></strong>
                                <span className="px-2  bg-black/30 rounded-full text-lg text-white">Premium Soft Case</span>
                            </div>

                            <div className='flex justify-center items-center gap-2'>
                                <strong className='bg-black h-2 w-2 rounded-full'></strong>
                                <span className="px-2  bg-black/30 rounded-full text-lg text-white">Premium Hard Case</span>
                            </div>
                        </div>

                        <div className="flex items-center text-yellow-500 text-lg">
                            ★★★★★ <span className="text-black ml-2 underline font-bold">1,000+ reviews</span>
                        </div>

                        {/* Benefits */}
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                            <li>Tempered glass back with a glossy finish</li>
                            <li>Rubber edges for soft landing and a good grip</li>
                            <li>Edge-to-edge standard buttons and ports</li>
                            <li>Sleek style</li>
                            <li>Case friendly charging</li>
                        </ul>

                        {/* Price */}
                        <div className="flex items-center gap-4  border-3 border-black rounded-lg w-fit h-fit px-1 max-[1350px]:py-1 ">
                            <div className='flex flex-col'>
                                <p>Include All Taxes</p>
                                <span className="text-sm font-semibold text-black">Rs. <span className='text-[clamp(1rem,2vw,50rem)]'>299/-</span> Only</span>
                            </div>
                            <div className='bg-black px-4 py-1  rounded-lg hover:bg-gray-800 flex flex-col justify-center items-center'>
                                <RiShoppingBag3Fill className='text-xl' color='white' />
                                <button className=" text-white ">
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center bg-black w-fit px-4 py-2 rounded-lg gap-2'>
                            <FaTruck className='text-xl text-white' />
                            <p className="text-xs text-gray-100">
                                Buy Any 3 Cases And Get Free Shipping
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-l-md"
                                type="text"
                                placeholder="Select Your Phone"
                            />
                            <button className=" text-white bg-black px-4 py-2 rounded-r-md">
                                <CiSearch size={26} />
                            </button>
                        </div>
                        <label className="text-sm flex items-center mt-2">
                            <input type="checkbox" className="mr-1" />
                            One plus
                        </label>

                        <div className='max-[1050px]:flex flex-wrap justify-between items-center gap-2'>
                            <div className='flex justify-around mb-2 w-full flex-wrap gap-y-2'>
                                <div className="flex flex-col items-center text-sm bg-[#e9e9e9] p-3 rounded-2xl">
                                    < FaSackDollar className='text-6xl text-black' />
                                    <p className="mt-1 text-black">100%</p>
                                    <p className='text-black font-semibold'>Secure payment</p>
                                </div>
                                <div className="flex flex-col items-center text-sm bg-[#e9e9e9] p-3 rounded-2xl">
                                    <img loading='lazy' className='h-15 w-12' src="/customise/r.png" alt="" />
                                    <p className="mt-1 text-black">Easy Returns</p>
                                    <p className='text-black font-semibold'>& Instant Refunds</p>
                                </div>
                            </div>
                            <div className='flex justify-around w-full flex-wrap gap-y-2'>

                                <div className="flex flex-col items-center text-sm bg-[#e9e9e9] p-3 rounded-2xl">
                                    <img loading='lazy' className='h-15 w-11' src="/customise/b.png" alt="" />
                                    <p className="mt-1 text-black">100%</p>
                                    <p className='text-black font-semibold text-xs'>Genuine Product</p>
                                </div>
                                <div className="flex flex-col items-center text-sm bg-[#e9e9e9] p-3 rounded-2xl">
                                    <img loading='lazy' className='h-15 w-11' src="/customise/md.png" alt="" />
                                    <p className="mt-1 text-black">100%</p>
                                    <p className='text-black font-semibold text-xs'>Time Drop Tested</p>
                                </div>

                                <div className="flex flex-col items-center text-sm bg-[#e9e9e9] p-3 rounded-2xl">
                                    <img loading='lazy' className='h-15 w-11' src="/customise/dboy.png" alt="" />
                                    <p className="mt-1 text-black text-xs">Shipping in</p>
                                    <p className='text-black font-semibold text-xs'>Just 10 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image Upload */}
                    <div className="flex flex-col items-center justify-around p-4 w-[32.33%] max-[1350px]:w-[48%] max-[1050px]:flex-row-reverse max-[1050px]:w-full flex-wrap-reverse gap-y-5">
                        <div className='flex justify-between space-x-2'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <div className='h-40 w-fit bg-[#e9e9e9] rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                                    <img loading='lazy' className='h-28 w-fit' src="/4productpage/1img.png" alt="" />
                                    <div className='h-3 w-3 rounded-full bg-black'></div>
                                </div>
                                <div>
                                    <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                                    <p className='text-xs text-center'>To get the best expereince</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <div className='h-40 w-fit bg-[#e9e9e9] rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                                    <img loading='lazy' className='h-28 w-fit' src="/4productpage/1img.png" alt="" />
                                    <div className='h-3 w-3 rounded-full bg-black'></div>
                                </div>
                                <div>
                                    <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                                    <p className='text-xs text-center'>To get the best expereince</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <div className='h-40 w-fit bg-[#e9e9e9] rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                                    <img loading='lazy' className='h-28 w-fit' src="/4productpage/1img.png" alt="" />
                                    <div className='h-3 w-3 rounded-full bg-black'></div>
                                </div>
                                <div>
                                    <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                                    <p className='text-xs text-center'>To get the best expereince</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center space-y-2 bg-[#e9e9e9] p-5 rounded-4xl'>
                            <div>
                                <img className='h-96' src="/customise/3.png" alt="" />
                            </div>
                            <p className='text-center bg-black rounded-2xl text-white px-2'>Upload your image</p>
                            <p className='text-xs text-center'>Actual Prouct will be delivert as your phone model</p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="bg-black text-white py-10 px-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2">
                    You May Also Like
                </h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    We Make the best Cases for You! greg y5ey757 yrtye
                </p>

                <div className="flex items-center justify-center gap-2 mb-6 w-[75%] max-xl:w-[95%] max-w-[1400px] mx-auto">
                    <button onClick={() => PhoneProductfirstscroll("left")} className="text-2xl text-white hover:text-gray-300">&#10094;</button>
                    <div ref={PhoneProductfirstscrollRef} className="flex overflow-hidden gap-6 scrollbar-hide px-4">
                        {caseData.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[150px] max-w-[150px] flex-shrink-0 text-center"
                            >
                                <img loading='lazy'
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                                <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
                                <div className="flex justify-center text-yellow-400 text-sm">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                                <p className="text-white mt-1 text-sm">
                                    Price: <span className="font-bold">₹{item.price}/-</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => PhoneProductfirstscroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
                </div>
            </section>


            <section className="bg-[#fcfcfc] rounded-2xl pt-3 p-5 max-lg:p-2 w-[95%] max-w-[1400px]  mx-auto  shadow-lg">
                {/* Top Features */}
                <div className="flex justify-around items-center flex-wrap gap-4 text-center bg-[#282828] h-48 min-h-fit rounded-2xl p-4">
                    <div className="flex flex-col items-center text-sm">
                        < FaSackDollar className='text-6xl text-white' />
                        <p className="mt-1 text-white">100%</p>
                        <p className='text-white font-semibold'>Secure payment</p>
                    </div>
                    <div className="flex flex-col items-center text-sm">
                        <img loading='lazy' className='h-15 w-12' src="/4productpage/return.png" alt="" />
                        <p className="mt-1 text-white">Easy Returns</p>
                        <p className='text-white font-semibold'>& Instant Refunds</p>
                    </div>
                    <div className="flex flex-col items-center text-sm">
                        <img loading='lazy' className='h-15 w-11' src="/4productpage/bage.png" alt="" />
                        <p className="mt-1 text-white">100%</p>
                        <p className='text-white font-semibold'>Genuine Product</p>
                    </div>
                    <div className="flex flex-col items-center text-sm">
                        <img loading='lazy' className='h-15 w-11' src="/4productpage/drop.png" alt="" />
                        <p className="mt-1 text-white">100%</p>
                        <p className='text-white font-semibold'>Time Drop Tested</p>
                    </div>

                    <div className="flex flex-col items-center text-sm">
                        <img loading='lazy' className='h-15 w-11' src="/4productpage/delivery.png" alt="" />
                        <p className="mt-1 text-white">Shipping in</p>
                        <p className='text-white font-semibold'>Just 10 Days</p>
                    </div>
                </div>
                <div className='flex max-lg:flex-col  justify-between items-center gap-5 px-5 max-lg:p-0'>
                    {/* Rating Bar */}
                    <div className="mt-6 w-1/3 max-[1400px]:w-full">
                        <h3 className="text-lg font-semibold mb-4">Reviews & Ratings</h3>
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((stars, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <div className="flex">
                                        {[...Array(stars)].map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
                                        <div className={`bg-black h-2`} style={{ width: `${(5 - i) * 20}%` }}></div>
                                    </div>
                                    <span className="text-sm text-gray-600">{[18, 3, 3, 0, 0][i]}</span>
                                </div>
                            ))}
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col gap-3 mt-6">
                            <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">Write a review</button>
                            <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">Watch all Video review</button>
                            <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">Ask a Question</button>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className='flex flex-col justify-center items-center max-[1400px]:w-full'>
                        <IoIosArrowDown onClick={() => reviewsscroll("down")} className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
                        <div ref={reviewsscrollRef} className="space-y-6 w-full max-h-80 overflow-hidden scrollbar-hide">
                            {reviews.map((review) => (
                                <div key={review.id} className="flex flex-wrap items-start gap-4 border-b-2 p-5">
                                    <div className="h-10 w-10 rounded-full bg-black" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{review.name}</h4>
                                        <div className='flex items-center gap-x-2 flex-wrap'>
                                            <p className="text-sm text-gray-700 line-clamp-1 w-fit">
                                                {review.text}
                                            </p>
                                            <span className="text-blue-600">See More</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {review.images.map((img, i) => (
                                            <div key={i} className="h-10 w-10 rounded-md bg-black " />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <IoIosArrowUp onClick={() => reviewsscroll("up")} className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
                    </div>
                </div>
            </section>


            <section className="bg-black text-white py-10 px-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2">
                    Recently Viewed Product
                </h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    We Make the best Cases for You! greg y5ey757 yrtye
                </p>

                <div className="flex items-center justify-center gap-2 mb-6 w-[75%] max-xl:w-[95%] max-w-[1400px] mx-auto">
                    <button onClick={() => PhoneProductsecondscroll("left")} className="text-2xl text-white hover:text-gray-300">&#10094;</button>
                    <div ref={PhoneProductsecondscrollRef} className="flex overflow-hidden gap-6 scrollbar-hide px-4">
                        {caseData.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[150px] max-w-[150px] flex-shrink-0 text-center"
                            >
                                <img loading='lazy'
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                                <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
                                <div className="flex justify-center text-yellow-400 text-sm">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                                <p className="text-white mt-1 text-sm">
                                    Price: <span className="font-bold">₹{item.price}/-</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => PhoneProductsecondscroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
                </div>
            </section>




            {/* <section className=" flex flex-col items-center py-6"> */}
            <div className="bg-[#fcfcfc] text-black rounded-3xl py-6 px-10 w-[80%] max-[1390px]:w-[95%] max-[1390px]:px-5 flex max-[1390px]:flex-col-reverse flex-row items-center md:items-start gap-8 shadow-lg mx-auto mb-5 max-w-[1400px]">
                {/* Left Content Section */}
                <div className="w-1/2 space-y-4 self-center max-[1390px]:w-full max-[1390px]:max-w-xl" style={{ alignSelf: "start" }}>
                    <h2 className="text-[clamp(1.5rem,2vw,4rem)] font-semibold">Want Something More</h2>
                    <h3 className="text-[clamp(2.5rem,4vw,4rem)] font-semibold text-black " style={{ lineHeight: "50%" }}>Personalized</h3>
                    <button className="bg-black text-white px-4 py-2 rounded-xl mt-7 flex gap-2 justify-center items-center"><span className='text-[clamp(2rem,4.5vw,4rem)]'>Just Like This</span>  <TbPlayerPlayFilled size={40} /></button>

                    <p className="text-sm text-gray-800 mt-2">
                        Best Combos for our best best customers fewt4fet5 6yt54y6754y y5467y7tf5y6 563e4trg grtg4retg y544h y456t754yt5t customyeyt5y
                        Best Combos for our best best customy5y rfg fewrt4fe 34otu5to43j 4wu404uj 4rutg094v 3ewurf
                    </p>
                    <div>
                        <p>Price are different for cutomise cases</p>
                        <div className="flex flex-wrap items-center gap-4  border-3 border-black rounded-lg w-fit h-fit px-1 max-[1350px]:py-1  ">
                            <div className='flex flex-col'>
                                <p>Include All Taxes</p>
                                <span className="text-sm font-semibold text-black">Rs. <span className='text-[clamp(1rem,2vw,50rem)]'>999/-</span> Only</span>
                            </div>
                            <div className='bg-black px-4 py-1  rounded hover:bg-gray-800 flex flex-col justify-center items-center'>
                                <RiShoppingBag3Fill className='text-xl' color='white' />
                                <button className=" text-white ">
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white px-5 py-3  rounded-xl w-fit text-[clamp(0.80rem,1vw,4rem)]"> Text us on whatsapp and tell us your dessire</div>
                    <button className="bg-black text-white px-4 py-2 flex items-center justify-center gap-2 w-fit rounded-xl">
                        <FaWhatsapp size={55} />
                        <span className='text-[clamp(2rem,3.5vw,4rem)] font-semibold'>Chat With Us !</span>
                    </button>
                </div>

                {/* Right Image Display */}
                <div className="w-1/2 flex items-center justify-center max-[1390px]:w-full min-h-fit">
                    <IoIosArrowForward onClick={nextImage} className="bg-white rounded-full text-black p-1 text-2xl shadow-2xl w-10 h-10" />

                    <div className="w-[95%] rounded-xl overflow-hidden min-h-fit">
                        <img
                            src={images[currentIndex]}
                            alt="Wall Art"
                            className="w-full object-contain"
                        />
                    </div>

                    <IoIosArrowBack onClick={prevImage} className="bg-white rounded-full text-black p-1 text-2xl shadow-2xl w-10 h-10" />
                </div>

            </div>
            {/* </section> */}
        </div>
    )
}

export default Customise
