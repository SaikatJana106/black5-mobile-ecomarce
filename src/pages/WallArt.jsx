import React, { useRef, useEffect, useState } from 'react'
import phoneCases from "../json/phonecase.json"
import phones from "../json/phone.json"
import axios from "axios";
// ...existing code...
import data from '../json/wallartproduct.json'
import wallart from '../json/wallart.json'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import wallartfiltersData from '../json/wallartfilterdata.json';
import { Link } from 'react-router-dom';
const WallArt = () => {
    // const categories = [
    //     {
    //         title: 'Afordable Wall arts',
    //         items: [
    //             '/wallart/frame.png',
    //             '/wallart/frame2.png',
    //             '/wallart/frame.png',
    //             '/wallart/frame2.png',
    //         ],
    //     },
    //     {
    //         title: 'Premium Wall Arts',
    //         items: ['/wallart/house.png'],
    //     },
    //     {
    //         title: 'Best For Gifting',
    //         items: ['/images/gift1.png', '/images/custom1.png'],
    //         subtitles: ['Best For Gifting', 'Customized Wall arts'],
    //     },
    //     {
    //         title: 'Limited Edition Wall arts',
    //         items: ['/wallart/longframe3.png'],
    //     },
    // ];

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

    // api call 
    //======================= category api call =================
    const [categories, setCategories] = useState([]);
    const [categoryActiveSlug, setCategoryActiveSlug] = useState("wall-art"); // default active
    const [categoryType, setCategoryType] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
                // Extract categories from response
                const cattype = res.data.data.categories.data;
                setCategories(cattype);
                setCategoryType(cattype); // if you want to use categoryType separately
                console.log("Fetched categories:", cattype);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);


    const selected = categories.find((c) => c.slug === categoryActiveSlug);

    // =================category api call ===========================
    // ====================== fretured api call======================  
    const [featurepanels, setFeaturepanels] = useState([]);

    useEffect(() => {
        const fetchFeaturepanels = async () => {
            try {
                const token = localStorage.getItem("black5authtoken");

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/feature-panels/wall-art`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setFeaturepanels(response.data.data);
                console.log(response.data);

            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchFeaturepanels();
    }, []);
    // ====================== fretured api call======================  

    // ====================== product api call =====================
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchProducts = async (page = 1) => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/products?page=${page}&&type=wallart`
            );

            const productData = res.data.data.products.data.filter(
                (p) => p.is_visible === 1
            );
            setProducts(productData);

            // Set the last page from response
            setLastPage(res.data.data.products.last_page);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
        }
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < lastPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    // ====================== product api call =====================


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
    //======================category===================

    const categoryscrollRef = useRef(null);

    const categoryscroll = (direction) => {
        if (categoryscrollRef.current) {
            categoryscrollRef.current.scrollBy({
                left: direction === "left" ? -400 : 401,
                behavior: "smooth",
            });
        }
    };
    //======================category===================
    // arrow scroll logic

    return (
        <div>
            {/* ✅ Hero Section with Background */}
            <section className="relative h-screen w-full">
                <img
                    className="absolute inset-0 w-full h-full"
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
                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 max-sm:w-full p-4 space-y-3">
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

                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4 space-y-3 max-sm:hidden">
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

                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4 max-sm:hidden">
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


                <div className="bg-[#cfcfcf] rounded-xl shadow-md w-72 p-4 space-y-3 max-sm:hidden">
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
                        {Array.isArray(featurepanels) && featurepanels.length > 0 ? (
                            featurepanels.map((item) => (
                                <div
                                    key={item.id}
                                    className="min-w-[300px] max-w-[300px] flex-shrink-0 text-center relative"
                                >
                                    <img
                                        loading="lazy"
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-md object-cover"
                                    />
                                    <div className="absolute top-2 left-[5%]">
                                        <h3 className="mt-2 text-sm font-semibold bg-black/60 rounded-2xl p-2">{item.title}</h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No featured panels found.</p>
                        )}
                    </div>
                    <button onClick={() => wallartscroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
                </div>
            </section>



            {/*3 case oprtion choose  */}
            <section>
                <div className="text-center mb-6">
                    <button className="px-4 py-1 bg-white text-black rounded-full font-medium mb-2 text-2xl">
                        Explore Our Wall Arts
                    </button>
                    <p className="text-gray-400">Specilly Designed Wall Arts For Everyone</p>
                </div>

                {/* <div className="flex flex-wrap gap-2 items-start justify-around p-8 my-5  bg-cover bg-center h-fit text-black rounded-3xl z-10 relative w-[85%] max-lg:w-[90%] max-w-[1400px] mx-auto"
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
                </div> */}

                <div className="flex items-center w-[90%] mx-auto justify-center py-8">
                    {/* Left Arrow */}
                    <button
                        onClick={() => categoryscroll("left")}
                        className="h-fit bg-white p-2 rounded-full text-black"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Carousel categoryScroll Section */}
                    <div
                        ref={categoryscrollRef}
                        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-8"
                    >
                        {selected && selected.children?.length > 0 ? (
                            selected.children.map((child) => (
                                <div
                                    key={child.id}
                                    className="min-w-[15rem] bg-cover bg-center rounded-t-full h-[25rem] min-h-fit flex flex-col justify-end items-center"
                                >
                                    <img
                                        src={child.image_link}
                                        alt={child.name}
                                        className="w-full h-full"
                                    />
                                    <div className="bg-white w-full text-center py-2 rounded-b-md">
                                        <button className="text-black font-medium text-xl">
                                            {child.name}
                                        </button>
                                        <div>
                                            <button className="underline text-xs text-black">View All</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">No subcategories found</p>
                        )}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => categoryscroll("right")}
                        className="h-fit bg-white p-2 rounded-full text-black"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </section>
            {/* case oprtion choose  */}


            {/* ================================last section ============================================= */}

            <div ref={filterSectionRef} className=" bg-white text-black p-15 max-lg:p-6 rounded-3xl shadow-lg gap-6 h-screen w-[85%] max-lg:w-[95%] mx-auto mb-5 max-w-[1400px] max-h-96 min-h-fit">

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-between gap-5 h-fit w-full '>
                    {products.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center space-y-1">
                            <Link to={`/phone-case-product/${item.id}`}>
                                <img
                                    src={item.image_link ? item.image_link : "/5wallartproduct/persion.png"}
                                    alt={item.name}
                                    className="w-[clamp(150px,25vw,350px)] h-[clamp(150px,25vw,350px)] rounded-md "
                                    loading='lazy'
                                />
                            </Link>
                            <Link to={`/phone-case-product/${item.id}`} className="text-[clamp(1rem,1.5vw,5rem)] font-medium hover:underline">{item.name}</Link >
                            <Link to={`/phone-case-product/${item.id}`} className="text-xs font-medium hover:underline">{item.type}</Link >
                            <div className="text-yellow-500 text-sm">
                                {"★".repeat(4)}{"☆".repeat(1)}
                            </div>
                            <p className="text-[clamp(0.8rem,0.8vw,5rem)] font-semibold">Price: ₹{item.product_price}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-5 w-full justify-end items-end  mt-5" >
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-6 py-2 bg-black text-white font-medium rounded-full shadow-sm hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === lastPage}
                        className="px-6 py-2 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>

            </div>



            {/* <div ref={filterSectionRef} className="flex max-lg:p-0 text-white flex-col lg:flex-row p-15 rounded-3xl shadow-lg gap-6 min-h-screen w-[85%] max-lg:w-[95%] max-w-[1400px] mx-auto mb-5">
                Filter Sidebar
                <div className="lg:w-1/4 space-y-6 border-r pr-4 max-lg:hidden">
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

                <div className="lg:w-3/4 w-full space-y-10 bg-white p-10 text-black rounded-4xl">
                    {data.map((section, i) => (
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
            </div> */}

            {/* <div
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
            )} */}

        </div>
    )
}

export default WallArt
