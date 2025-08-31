import React, { useRef } from 'react'
import phoneCases from "../json/phonecase.json"
import { FaStar, FaTruck } from 'react-icons/fa';
import wallartData from '../json/wallartproduct.json'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { RiShoppingBag3Fill } from 'react-icons/ri';
const WallArtproductpage = () => {
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
    const wallartfirstscrollRef = useRef(null);

    const wallartfirstscroll = (direction) => {
        if (wallartfirstscrollRef.current) {
            wallartfirstscrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };
    // ===============1st phone case==============

    // =================2nd phone case=============
    const wallartsecondscrollRef = useRef(null);

    const wallartsecondscroll = (direction) => {
        if (wallartsecondscrollRef.current) {
            wallartsecondscrollRef.current.scrollBy({
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

    // arrow scroll logic 

    return (
        <div>
            <section className="bg-white p-5 rounded-xl shadow-lg w-[70%] max-lg:w-[99%] max-lg:p-3 max-w-[1400px] mx-auto">
                {/* Image section */}
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 bg-[#ebebeb] flex items-center justify-center rounded-l-2xl max-lg:rounded-t-2xl max-lg:rounded-b-none px-8 max-lg:p-0 min-h-[300px]">
                        <img
                            src="/5wallartproduct/bigbanner.png"
                            alt="Mayur Mayuri"
                            className="w-full h-auto object-cover object-center"
                        />
                    </div>

                    {/* Sidebar features */}
                    <div className='flex flex-col max-lg:flex-row gap-2 bg-[#cccccc] rounded-r-2xl max-lg:rounded-b-2xl max-lg:rounded-t-none py-5 px-2 h-full justify-between'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className='h-28 w-fit bg-white rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                                <img loading='lazy' className='w-[60px] h-[60px]' src="/5wallartproduct/persion.png" alt="" />
                                <div className='h-3 w-3 rounded-full bg-black'></div>
                            </div>
                            <div>
                                <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                                <p className='text-xs text-center'>View the prouct in 3d</p>
                                <p className='text-xs text-center'>To get the best expereince</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className='h-28 w-fit bg-white rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                                <img loading='lazy' className='w-[60px] h-[60px]' src="/5wallartproduct/persion.png" alt="" />
                                <div className='h-3 w-3 rounded-full bg-black'></div>
                            </div>
                            <div>
                                <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                                <p className='text-xs text-center'>View the prouct in 3d</p>
                                <p className='text-xs text-center'>To get the best expereince</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className='h-28 w-fit bg-white rounded-full px-3 flex items-center justify-center flex-col gap-2'>
                                <img loading='lazy' className='w-[60px] h-[60px]' src="/5wallartproduct/persion.png" alt="" />
                                <div className='h-3 w-3 rounded-full bg-black'></div>
                            </div>
                            <div>
                                <h1 className='text-center bg-black rounded-2xl text-white'>View In 3d</h1>
                                <p className='text-xs text-center'>View the prouct in 3d</p>
                                <p className='text-xs text-center'>To get the best expereince</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-8 flex max-[1374px]:flex-col flex-row space-y-2">
                    {/* ─────────── LEFT ─────────── */}
                    <div className="flex-[1.5] space-y-2">
                        <h2 className="text-4xl font-semibold">Mayur Mayuri</h2>
                        <div className="flex items-center text-yellow-500 text-lg mt-2">
                            ★★★★★
                            <span className="text-black ml-2 underline font-bold">1,000+ reviews</span>
                        </div>
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
                    </div>

                    {/* ─────────── MIDDLE (slightly narrower now) ─────────── */}
                    <div className="flex-[2.3] space-y-4">
                        <div className="flex items-center flex-wrap justify-center gap-4 border-2 border-black rounded-lg px-3 py-1 w-fit">
                            <div className="flex flex-col leading-snug">
                                <p className="text-xs uppercase">inclusive of all taxes</p>
                                <span className="text-[clamp(0.9rem,1.2vw,50rem)] font-semibold">
                                    Rs. <span className="text-[clamp(1rem,2vw,50rem)]">4,999/-</span> Only
                                </span>
                            </div>
                            <button className="bg-black hover:bg-gray-800 text-white rounded-lg px-6 py-3 flex items-center gap-2 flex-wrap justify-center">
                                <RiShoppingBag3Fill className="text-[clamp(1rem,1.3vw,50rem)]" />
                                Add to Bag
                            </button>
                        </div>

                        <div className="bg-black text-gray-100 rounded-lg flex items-center gap-2 px-5 py-3 w-max">
                            <FaTruck className="text-xl" />
                            <span className="text-sm">Buy Any 3 Cases And Get Free Shipping</span>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-1">Product Description :</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>ifel vfgrvo gfr pokgv prd htyeryhgt grtfegy gretgygtq</li>
                                <li>ifel vfgrvo gfr pokgv prd htyeryhgt grtfegy gretgygtq</li>
                                <li>ifel vfgrvo gfr pokgv prd htyeryhgt grtfegy gretgygtq</li>
                                <li>ifel vfgrvo gfr pokgv prd htyeryhgt grtfegy gretgygtq</li>
                            </ul>
                        </div>
                    </div>

                    {/* ─────────── RIGHT ─────────── */}
                    <div className="flex-[1.7] text-sm text-gray-700">
                        <h3 className="font-semibold mb-1 text-black">Product Description :</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Tempered glass back with a glossy finish</li>
                            <li>Rubber edges for soft landing and </li>
                            <li>Easy access to standard buttons and ports</li>
                            <li>Sleek profile</li>
                            <li>Promotes wireless charging</li>
                            <li>Classic shiny finish</li>
                        </ul>
                    </div>
                </div>

            </section>


            <section className="bg-black text-white">
                <h2 className="text-2xl lg:text-4xl font-bold text-center my-2">
                    You May Also Like
                </h2>
                <p className="text-center text-sm text-gray-400 mb-5">
                    We Make the best Cases for You! greg y5ey757 yrtye
                </p>

                <div className="flex items-center justify-center gap-2 mb-6 w-[75%] max-xl:w-[95%] max-w-[1400px] mx-auto">
                    <button onClick={() => wallartfirstscroll("left")} className="text-2xl text-white hover:text-gray-300">&#10094;</button>
                    <div ref={wallartfirstscrollRef} className="flex overflow-hidden gap-6 scrollbar-hide px-4">
                        {wallartData.map((item) => (
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
                    <button onClick={() => wallartfirstscroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
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


            <section className="bg-black text-white ">
                <h2 className="text-2xl lg:text-4xl font-bold text-center my-2">
                    Recently Viewed Product
                </h2>
                <p className="text-center text-sm text-gray-400 mb-5">
                    We Make the best Cases for You! greg y5ey757 yrtye
                </p>

                <div className="flex items-center justify-center gap-2 mb-6 w-[75%] max-xl:w-[95%] max-w-[1400px] mx-auto">
                    <button onClick={() => wallartsecondscroll("left")} className="text-2xl text-white hover:text-gray-300">&#10094;</button>
                    <div ref={wallartsecondscrollRef} className="flex overflow-hidden gap-6 scrollbar-hide px-4">
                        {wallartData.map((item) => (
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
                    <button onClick={() => wallartsecondscroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
                </div>
            </section>
        </div>
    )
}

export default WallArtproductpage
