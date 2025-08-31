import React, { useRef, useEffect, useState } from 'react'
import phoneCases from "../json/phonecase.json"
import phones from "../json/phone.json"
import data from '../json/wallartproduct.json'
import wallart from '../json/wallart.json'
import { FaStar } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import wallartfiltersData from '../json/wallartfilterdata.json';
const WallArt = () => {
    const categories = [
        {
            title: 'Afordable Wall arts',
            items: [
                '/wallart/frame.png',
                '/wallart/frame2.png',
                '/wallart/frame.png',
                '/wallart/frame2.png',
            ],
        },
        {
            title: 'Premium Wall Arts',
            items: ['/wallart/house.png'],
        },
        {
            title: 'Best For Gifting',
            items: ['/images/gift1.png', '/images/custom1.png'],
            subtitles: ['Best For Gifting', 'Customized Wall arts'],
        },
        {
            title: 'Limited Edition Wall arts',
            items: ['/wallart/longframe3.png'],
        },
    ];

    // filter logic 
    const filterSectionRef = useRef(null);
    const [showFilterButton, setShowFilterButton] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowFilterButton(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (filterSectionRef.current) {
            observer.observe(filterSectionRef.current);
        }

        return () => {
            if (filterSectionRef.current) {
                observer.unobserve(filterSectionRef.current);
            }
        };
    }, []);

    // filter logic 

    // arrow scroll logic 
    // =================phone case=============
    const wallartRef = useRef(null);

    const wallartscroll = (direction) => {
        if (wallartRef.current) {
            wallartRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };
    // ===============phone case==============
    // arrow scroll logic

    return (
        <div>
            {/* ✅ Hero Section with Background */}
            <section className="relative h-screen w-full">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/wallart/banner.png"
                    alt="Banner"
                />
                {/* <div className='bg-black/50 h-fit w-full'></div> */}
                {/* Overlay Text */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full">
                    <h1 className="text-white text-[clamp(2rem,4vw,4rem)] font-bold w-full">Premium Phone Cases</h1>
                    <p className="text-white text-[clamp(1.3rem,2.2vw,4rem)] mt-2">We Make The Best Cases For You!</p>
                    <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-lg">
                        Shop Now
                    </button>
                </div>


            </section>
            {/* ✅ Phone Selector and Category Section */}
            <section className="grid grid-cols-4 max-[1235px]:grid-cols-2 max-sm:grid-cols-1 w-fit gap-5 p-8  bg-cover bg-center h-fit text-black rounded-3xl -mt-20 z-10 relative max-w-[1400px] mx-auto"
                style={{ placeItems: "center" }}
            >
                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4 space-y-3">
                    <h3 className="text-sm font-semibold text-gray-800">Afordable Wall arts</h3>
                    <div className="grid grid-cols-2 gap-2 h-56">
                        <div className="overflow-hidden rounded-md">
                            <img
                                src="/wallart/frame.png"
                                alt={`wallart`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="overflow-hidden rounded-md">
                            <img
                                src="/wallart/frame2.png"
                                alt={`wallart`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="overflow-hidden rounded-md">
                            <img
                                src="/wallart/frame.png"
                                alt={`wallart`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="overflow-hidden rounded-md">
                            <img
                                src="/wallart/frame2.png"
                                alt={`wallart`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <button className="mt-2 w-full bg-gradient-to-l from-red-700 to-red-600  text-white text-sm py-2 rounded">
                        Explore Now
                    </button>
                </div>

                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4 space-y-3">
                    <h3 className="text-sm font-semibold text-gray-800">Afordable Wall arts</h3>
                    <div className="overflow-hidden rounded-md">
                        <img
                            src="/wallart/house.png"
                            alt={`wallart`}
                            className="object-cover w-full h-56"
                        />
                    </div>
                    <button className="mt-2 w-full bg-gradient-to-l from-red-700 to-red-600  text-white text-sm py-2 rounded">
                        Explore Now
                    </button>
                </div>

                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4">
                    <div className='space-y-3'>
                        <div>
                            <p>Best For Gifting</p>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="/wallart/longframe.png"
                                    alt={`wallart`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Best For Gifting</p>

                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="/wallart/longframe.png"
                                    alt={`wallart`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="mt-2 w-full bg-gradient-to-l from-red-700 to-red-600   text-white text-sm py-2 rounded">
                        Explore Now
                    </button>
                </div>


                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4 space-y-3">
                    <h3 className="text-sm font-semibold text-gray-800">Afordable Wall arts</h3>
                    <div className="overflow-hidden rounded-md">
                        <img
                            src="/wallart/longframe3.png"
                            alt={`wallart`}
                            className="object-cover w-full h-56"
                        />
                    </div>
                    <button className="mt-2 w-full bg-gradient-to-l from-red-700 to-red-600 text-white text-sm py-2 rounded">
                        Explore Now
                    </button>
                </div>
            </section>

            {/* ==================crousel================*/}
            <section className="bg-black text-white py-10">
                <div className="text-center mb-6 flex flex-col justify-between items-center">
                    <h1 className="px-4 py-1 bg-white text-black rounded-full font-medium mb-2 text-2xl w-fit">
                        Get to know Black5 Creatives
                    </h1>
                    <p className="text-gray-400">The Feature Panel</p>
                </div>
                <div className="flex items-center justify-center gap-2 mb-6 w-[75%] max-xl:w-[95%] max-w-[1400px] mx-auto">
                    <button onClick={() => wallartscroll("left")} className="text-2xl text-white hover:text-gray-300">&#10094;</button>
                    <div ref={wallartRef} className="flex overflow-hidden gap-6 scrollbar-hide px-4">
                        {phoneCases.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[150px] max-w-[150px] flex-shrink-0 text-center relative"
                            >
                                <img loading='lazy'
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-auto rounded-lg shadow-md "
                                />
                                <div className='absolute top-0 left-2 '>
                                    <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
                                    <div className="flex mt-1 text-yellow-400 text-sm">
                                        {Array(5)
                                            .fill()
                                            .map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                    </div>
                                    <p className="text-white mt-1 text-sm text-left">
                                        Price: <span className="font-bold">₹{item.price}/-</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => wallartscroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
                </div>
            </section>



            {/*3 case oprtion choose  */}
            <section>
                <div className="text-center mb-6">
                    <button className="px-4 py-1 bg-white text-black rounded-full font-medium mb-2 text-2xl">
                        Explore Our Cases
                    </button>
                    <p className="text-gray-400">The Feature Panel</p>
                </div>

                <div className="flex flex-wrap gap-2 items-start justify-around p-8 my-5  bg-cover bg-center h-fit text-black rounded-3xl z-10 relative w-[85%] max-lg:w-[90%] max-w-[1400px] mx-auto"
                    style={{ backgroundImage: "url('/2phonecover/3banner.png')" }}
                >
                    {wallart.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg bg-black relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-contain absolute top-[10%]"
                                />
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <h3 className='text-white bg-black px-2 py-1 rounded-full'>{item.type}</h3>

                            <p className="text-xs text-black hover:underline cursor-pointer underline">
                                {item.link}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* case oprtion choose  */}


            {/* ================================last section ============================================= */}
            <div ref={filterSectionRef} className="flex max-lg:p-0 text-white flex-col lg:flex-row p-15 rounded-3xl shadow-lg gap-6 min-h-screen w-[85%] max-lg:w-[95%] max-w-[1400px] mx-auto mb-5">
                {/* Filter Sidebar */}
                <div className="lg:w-1/4 space-y-6 border-r pr-4 max-lg:hidden">
                    {/* Filter */}
                    {wallartfiltersData.filters.map((section, index) => (
                        <div key={index}>
                            <h2 className="font-semibold mb-2">{section.title}</h2>
                            {section.options.map((item, i) => (
                                <label key={i} className="block text-sm flex mb-2 items-center">
                                    <input type="checkbox" className="mr-2" /> {item}
                                </label>
                            ))}
                            {index !== wallartfiltersData.filters.length - 1 && (
                                <hr className="bg-gray-400 mt-5" />
                            )}
                        </div>
                    ))}

                </div>

                {/* Product Grid */}
                <div className="lg:w-3/4 w-full space-y-10 bg-white p-10 text-black rounded-4xl">
                    {[
                        {
                            label: "Phone Cases For Women's",
                            items: data.filter(item => item.category === "school")
                        },
                        {
                            label: "Phone Cases For Men",
                            items: data.filter(item => item.category === "culture")
                        },
                        // {
                        //   label: "Phone Cases For Couples",
                        //   items: data.products.filter(item => item.category === "couples")
                        // },
                        // {
                        //   label: "Phone Cases Unisex",
                        //   items: data.products.filter(item => item.category === "unisex")
                        // },
                        // {
                        //   label: "Customized Phone Cases",
                        //   items: data.products.filter(item => item.category === "customized")
                        // }
                    ].map((section, i) => (
                        <div key={i}>
                            <h3 className=" text-white bg-black font-semibold text-center w-max mx-auto px-4 py-1 text-lg rounded-full mb-1">
                                {section.label}
                            </h3>
                            <p className="text-center text-xs text-gray-600 mb-4">
                                iodirf grdf grf with premium designs and quality
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {section.items.map((item, j) => (
                                    <div key={j} className="flex flex-col items-center text-center space-y-1">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-fit w-fit object-cover rounded-md"
                                        />
                                        <p className="text-xs font-medium">{item.name}</p>
                                        <div className="text-yellow-500 text-sm">
                                            {"★".repeat(item.stars)}
                                            {"☆".repeat(5 - item.stars)}
                                        </div>
                                        <p className="text-sm font-semibold">Price: {item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Filter Offcanvas */}
            <div
                id="mobile-filter"
                className="hidden fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                onClick={() => document.getElementById('mobile-filter').classList.add('hidden')}
            >
                <div
                    className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Filters</h2>
                        <button
                            className="text-gray-500"
                            onClick={() => document.getElementById('mobile-filter').classList.add('hidden')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6">
                        {wallartfiltersData.filters.map((filterSection, index) => (
                            <div key={index}>
                                <h2 className="font-semibold mb-2">{filterSection.title}</h2>
                                {filterSection.options.map((option, i) => (
                                    <label key={i} className="text-sm flex mb-2 items-center">
                                        <input type="checkbox" className="mr-2" /> {option}
                                    </label>
                                ))}
                                {index < wallartfiltersData.filters.length - 1 && <hr className='bg-gray-400 mt-5' />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showFilterButton && (
                <div className="lg:hidden fixed bottom-5 right-5 z-50">
                    <button
                        className="bg-black text-white p-3 rounded-full shadow-lg"
                        onClick={() => document.getElementById('mobile-filter').classList.remove('hidden')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            />
                        </svg>
                    </button>
                </div>
            )}

        </div>
    )
}

export default WallArt
