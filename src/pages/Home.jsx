import React, { useEffect, useRef, useState } from 'react'
import category from '../json/category.json'
import modelImage from '/2phonecover/1.png';
import statueImage from '/w1.png';
import phoneCases from '../json/phonecasefiter.json'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom'

// import phone1 from '../assets/phone1.png';
// import phone2 from '../assets/phone2.png';
import phone3 from '/2phonecover/1.png';
import statue from '/w1.png';
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { CiSearch } from 'react-icons/ci';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // const reviews = Array(8).fill({
    //     title: 'Best Artistic Designs',
    //     text: 'The Bes gvedgf gogr gvdgf pgvn grdt Phone Cases for high fitting high grip!',
    // });

    const ideas = [
        { id: 1, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 2, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
        { id: 3, name: 'Ruma Bose', text: 'Ruma Bo gfg vgfgfg vgse etffhefdgvdgyr relef vfgv', images: [1, 2, 3] },
    ];
    const products = [
        {
            name: "Mayur Mayuri",
            price: "299/-",
            image: "/2phonecover/1.png",
        },
        {
            name: "Mayur Mayuri",
            price: "299/-",
            image: "/2phonecover/1.png",
        },
        {
            name: "Mayur Mayuri",
            price: "299/-",
            image: "/2phonecover/1.png",
        },
        {
            name: "Mayur Mayuri",
            price: "299/-",
            image: "/2phonecover/1.png",
        },
    ];
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -400 : 401,
                behavior: "smooth",
            });
        }
    };


    //======================= category api call =================
    const [categories, setCategories] = useState([]);
    const [categoryActiveSlug, setCategoryActiveSlug] = useState("phone-case"); // default active
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

    // get selected category

    const selected = categories.find((c) => c.slug === categoryActiveSlug);

    // =================category api call ===========================


    // ==================best selling mobile product api call====================
    const [bestSellingMobileProducts, setBestSellingMobileProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {


        const fetchProducts = async (page = 1) => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products/best-selling?type=phonecase`
                );
                setBestSellingMobileProducts(res.data.data.products);

            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    // ==================best selling mobile product api call====================

    // ==================best selling mobile product api call====================
    const [bestSellingWallArtProducts, setBestSellingWallArtProducts] = useState([]);
    const [WallArtloading, setWallArtLoading] = useState(true);
    useEffect(() => {


        const fetchProducts = async (page = 1) => {
            try {
                setWallArtLoading(true);
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products/best-selling?type=wallart`
                );
                setBestSellingWallArtProducts(res.data.data.products);

            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setWallArtLoading(false);
            }
        };
        fetchProducts();
    }, []);
    // ==================best selling mobile product api call====================


    //============================= review api call==================================
    const [reviews, setReviews] = useState([]);
    const [reviewsVideo, setReviewsVideo] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get("https://admin.black5creatives.in/api/reviews");
                const reviewData = res.data.data;
                setReviews(reviewData);
                console.log(reviewData[0].videos);

                setReviewsVideo(reviewData.videos);

                // console.log("Fetched reviews:", reviewUsers );
            } catch (err) {
                console.error("Error fetching reviews:", err);
            }
        };
        fetchReviews();
    }, []);
    //============================= review api call==================================

    // video play logic
    const [selectedVideo, setSelectedVideo] = useState("phone");

    return (
        <div>
            <section className="w-[95%] lg:w-[75%] xl:w-[70%] max-w-[1400px] mx-auto py-5 mt-5 flex max-[780px]:flex-col flex-row justify-between gap-6 text-white font-sans max-[780px]:max-w-md h-[90vh] max-h-[600px] min-h-fit">
                {/* Left Column w-[95%] xl:w-[80%]*/}
                <div className="max-[780px]:w-full w-[48%] flex flex-col gap-4 md:gap-6 min-h-fit">
                    {/* Welcome Section */}
                    <div className="flex z-10 bg-[#ebebeb] rounded-3xl shadow-xl justify-between relative overflow-visible  " >
                        <div className="text-black p-6 flex flex-col justify-center">
                            <h2 className="text-[clamp(1rem,1.5vw,3rem)] font-medium mb-1">Hey! Welcome to</h2>
                            <h1 className="text-[clamp(1rem,1.9vw,3rem)] font-bold mb-1">Black5 Creatives</h1>
                            <p className="text-[clamp(0.8rem,1vw,3rem)] mb-3">We Sell Creative Premium</p>
                            <ul className=' list-disc marker:text-black text-lg list-outside flex flex-col w-fit gap-1 '>
                                <li className="px-2 py-1 bg-black rounded-full text-xs text-white text-center">Phone Cases</li>
                                <li className="px-2 py-1 bg-black rounded-full text-xs text-white text-center">Wall arts</li>
                            </ul>
                        </div>
                        <img src="/w1.png" alt="phone" className="absolute bottom-0 right-0  h-[clamp(14rem,20vw,22rem)] z-[999] drop-shadow-xl" />
                    </div>

                    {/* Two Product Cards */}
                    <div className="flex justify-between gap-4">
                        <div className="bg-white w-1/2 rounded-4xl p-2 flex flex-col items-center overflow-hidden ">
                            <p className="text-black text-sm mb-2 underline font-semibold">Phone Case</p>
                            <div className='bg-[#eeeeee] rounded-4xl p-4 flex flex-col justify-center items-center w-full'>
                                <div className=" rounded-xl bg-[url('/home/design.png')] bg-cover bg-center max-h-80 h-[34vh] w-40 min-h-fit flex justify-center items-center">
                                    <img className="max-h-64 h-[34vh] rounded-xl" src="/4productpage/2img.png" alt="Phone Case" />
                                </div>


                                <Link to="/phonecase" className="mt-2 px-3 py-1 text-xs bg-black text-white rounded-full">Shop Now</Link>
                            </div>
                        </div>
                        <div className="bg-white w-1/2 rounded-4xl p-2 flex flex-col items-center overflow-hidden">
                            <p className="text-black text-sm mb-2 underline font-semibold">Wall art</p>
                            <div className='bg-[#eeeeee] rounded-4xl p-4 flex flex-col justify-center items-center w-full'>
                                <div className=" rounded-xl bg-[url('/home/design.png')] bg-cover bg-center max-h-80 h-[34vh] w-32 flex justify-center items-center">
                                    <img className="max-h-32 h-[34vh] rounded-xl" src="/5wallartproduct/persion.png" alt="Wall Art" />
                                    {/* <video className="h-64 rounded-xl" autoPlay src="/home/wallart.mp4"></video> */}
                                </div>
                                <Link to="/wallart" className="mt-2 px-3 py-1 text-xs bg-black text-white rounded-full">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="max-[780px]:w-full w-[48%] bg-[url('/home/homebg.png')] bg-cover bg-center rounded-4xl relative overflow-hidden flex flex-col justify-center lg:mt-0 h-[83vh] min-h-fit max-h-[1000px]">
                    <div className='flex items-center justify-center h-[100%] '>
                        {/* <img src="/home/phone.png" alt="Main Phone Case" className="h-[80%] mx-auto drop-shadow-2xl object-cover object-center min-h-72 max-h-96" /> */}
                        <video
                            key={selectedVideo} // reloads when switching
                            className="h-full w-full  object-fill object-center min-h-72  rounded-2xl"
                            src={selectedVideo === "phone" ? "/home/ph.mp4" : "/home/wallart.mp4"}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className='absolute top-10 right-4 h-40 w-14 bg-white rounded-full  flex items-center justify-center flex-col gap-4'>
                            <button
                                onClick={() => setSelectedVideo("phone")}
                                className={`flex items-center justify-center flex-col gap-1 ${selectedVideo === "phone" ? "bg-[#b7b7b7]" : "bg-white"
                                    } w-full h-1/2 rounded-t-full pt-1`}>
                                <img loading='lazy' className='h-16 w-fit' src="/4productpage/1img.png" alt="" />
                                <div className='h-2 w-2 rounded-full bg-black'></div>
                            </button>
                            <button
                                onClick={() => setSelectedVideo("wallart")}
                                className={`flex items-center justify-center flex-col gap-1 pb-1 w-full h-1/2 rounded-b-full ${selectedVideo === "wallart" ? "bg-[#b7b7b7]" : "bg-white"
                                    }`}
                            >
                                <img
                                    loading="lazy"
                                    className="h-12 w-12"
                                    src="/5wallartproduct/persion.png"
                                    alt="Wall Art Selector"
                                />
                                <div className="h-2 w-2 rounded-full bg-black"></div>
                            </button>
                        </div>
                    </div>
                    <Link to="/phonecase" className=" px-6 py-2 text-sm bg-black text-white rounded-full w-fit absolute bottom-5 left-5">Shop Now</Link>

                </div>
            </section >

            <section className=" py-8">
                <div className="text-center mb-6 text-white">
                    <h2 className="text-xl font-semibold bg-white text-black inline-block px-6 py-2 rounded-full">Shop By Category</h2>
                    <div className='flex mt-4 space-x-6 justify-center items-center'>
                        {categoryType.map((data, i) => (
                            <div key={i} className="">
                                <button
                                    className={`underline`}
                                    onClick={() => setCategoryActiveSlug(data.slug)}
                                >
                                    {data.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center w-[90%] mx-auto justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="h-fit bg-white p-2 rounded-full"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Carousel Scroll Section */}
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-hidden scrollbar-hide scroll-smooth px-8"
                    >
                        {selected && selected.children?.length > 0 ? (
                            selected.children.map((child) => (
                                <div
                                    key={child.id}
                                    className="min-w-[15rem] bg-cover bg-center rounded-t-full h-[25rem] flex flex-col justify-end items-center"
                                >
                                    <img
                                        src={child.image_link}
                                        alt={child.name}
                                        className="w-full h-full max-h-[21rem]"
                                    />
                                    <div className="bg-white w-full text-center py-2 rounded-b-md">
                                        <button className="text-black font-medium text-xl">
                                            {child.name}
                                        </button>
                                        <div>
                                            <button className="underline text-xs">View All</button>
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
                        onClick={() => scroll("right")}
                        className="h-fit bg-white p-2 rounded-full"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </section>


            <section>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/home/card-text-first.png" className='w-[clamp(3rem,70vw,100rem)]  z-[-1] mb-[-12%]' data-aos="fade-up" data-aos-delay="1800" alt="" />
                    <div className='flex justify-center items-center'>
                        <img src="/home/small-card.png" className='w-[clamp(1rem,8vw,10rem)] z-10' alt="" />
                        <div className=" w-full sm:rounded-2xl md:rounded-[30px] overflow-hidden shadow-lg mx-2 flex justify-center items-center ml-[-4%] z-0 rounded-2xl" data-aos="fade-up" data-aos-delay="500">
                            <img
                                src="/home/card.png"
                                alt="Platinum Card"
                                className="w-[clamp(10vw,80vw,80vw)] h-auto object-contain rounded-2xl relative"
                                loading="lazy"
                            />

                            {/* Button Image should be inside this relative container */}
                            <img
                                src="/home/card-button.png"
                                className="absolute bottom-[20%] left-[37%]  w-[clamp(1rem,20vw,50rem)]"
                                alt=""
                            />
                            <img
                                src="/home/whatpcard.png"
                                alt="What P Card"
                                className="w-[clamp(10rem,25vw,30vw)] absolute bottom-0" // use margin-top instead of absolute positioning
                            />
                        </div>

                    </div>


                </div>
            </section>



            <div className="bg-white text-black py-10 px-2 sm:px-10 font-sans w-[85%] max-lg:w-[95%] rounded-4xl mx-auto my-5 flex justify-between max-lg:flex-col-reverse flex-row max-lg:max-w-2xl max-w-[1400px] " style={{ rowGap: '1rem' }}>
                <div className=" w-full lg:w-auto">
                    <h2 className="text-xl font-semibold mb-2 text-center">Our Customer Reviews</h2>
                    <div className='flex flex-col justify-center items-center '>
                        <IoIosArrowDown className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl max-lg:hidden' />
                        {/* Left: Customer Reviews */}
                        <div className='flex flex-col max-lg:flex-row  w-full max-lg:overflow-x-auto  gap-4 h-96 max-lg:h-fit  overflow-y-auto scrollbar-hide'>
                            {reviews.map((review, index) => (
                                <div key={index} className="flex  items-center gap-4 bg-white rounded-full shadow pr-2 h-14 min-h-fit border max-lg:min-w-[400px]">
                                    <div className="w-16 h-16 bg-black rounded-full"></div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold line-clamp-1">{review.user.name}</h3>
                                        <p className="text-xs text-gray-500 max-lg:line-clamp-2 line-clamp-1">{review.review_text}</p>
                                    </div>
                                    <Link to={`/phone-case-product/${review.product.id}`} className="bg-black text-white text-xs rounded-full px-4 py-[6px] max-lg:min-w-fit">Shop Now</Link>
                                </div>
                            ))}
                        </div>
                        <IoIosArrowUp className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl max-lg:hidden' />

                    </div>
                </div>
                {/* Middle: Model Image */}


                {/* Right: Video Review Placeholders */}
                <div className="w-full lg:w-2/3 flex flex-col justify-between items-center gap-4">
                    <h2 className="text-[clamp(1rem,1.5vw,1.75rem)] font-semibold mb-2 text-center">See What Our Customers are talking</h2>
                    <div className='flex justify-center items-center '>
                        <IoIosArrowForward className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
                        <div className="flex gap-5 w-full justify-start overflow-auto scrollbar-hide">
                            {reviews.map((review, rIndex) =>
                                review.videos?.map((reviewVideo, vIndex) => (
                                    <video
                                        key={`${rIndex}-${vIndex}`}
                                        className="rounded-4xl h-[450px] w-72 object-cover"
                                        src={reviewVideo}
                                        controls
                                    />
                                ))
                            )}

                        </div>

                        <IoIosArrowBack />
                    </div>
                    {/*<button className="bg-black text-white mt-4 rounded-full px-6 py-2 text-[clamp(0.80rem,1vw,1.75rem)]">View All Video Reviews</button>*/}
                </div>
            </div>


            <div className='flex flex-col max-xl:flex-col-reverse'>
                <section className="flex flex-row gap-6  w-[85%] max-xl:w-[98%] mx-auto text-white max-lg:max-w-xl max-w-7xl">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/5 flex flex-col gap-4 self-center max-lg:hidden">
                        <ul className="space-y-3 text-sm flex flex-col items-start justify-start max-lg:items-center">
                            <div className='flex lg:flex-col gap-2' style={{ columnGap: '2rem' }}>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Upload an Image
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Private Customization
                                </li>
                            </div>

                            <div className='flex lg:flex-col gap-2' style={{ columnGap: '2rem' }}>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Customized Gifting
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Bulk Corporate Gifting
                                </li>
                            </div>
                        </ul>

                        <h3 className="mt-6 text-xl font-semibold">Customize</h3>
                        <div className=" h-48 bg-white rounded-4xl mt-2 w-32"></div>
                    </div>
                    <div className='border-l-4 border-white h-100vh rounded-full max-lg:hidden'></div>

                    {/* Center Content */}
                    <div className="w-full lg:w-3/5 text-black rounded-xl  relative mx-auto">
                        <div className='bg-white rounded-4xl min-h-fit min-w-fit'>
                            <div className="flex flex-col-reverse md:flex-row items-center bg-white px-5 rounded-4xl py-2 max-md:w-fit w-full" style={{ justifySelf: 'center' }}>
                                <div className="flex-1">
                                    <h1 className="font-medium text-[clamp(1.5rem,2.2vw,2.5rem)]">
                                        We Can <br />
                                        <span className="text-[clamp(2rem,2.7vw,2.7rem)]">Customize For You</span>
                                    </h1>

                                    <p className="text-sm mt-1">lets customize your special moments for us</p>

                                    <div className="mt-4 flex flex-wrap gap-3 items-center">
                                        <div className='bg-black text-white rounded-full p-2 flex items-center'>
                                            <HiOutlineLightBulb size={28} />
                                        </div>
                                        <button className="bg-black text-white rounded-full px-4 py-2 flex items-cente ">
                                            Phone Case
                                        </button>
                                        <button className="bg-black text-white rounded-full px-4 py-2 flex items-center ">Wall Art</button>
                                    </div>
                                </div>

                                <img
                                    src={statueImage}
                                    alt="Statue"
                                    className="rounded-xl w-[clamp(15rem,19vw,20rem)] h-[clamp(15rem,19vw,20rem)] -mt-[clamp(1rem,5vw,2.5rem)]"
                                />

                            </div>
                            <div className='lg:hidden flex justify-around'>
                                <div className='flex flex-col items-center'>
                                    <h3 className="text-white text-lg font-semibold mb-2">Phone Case</h3>
                                    <div className="bg-white h-44 rounded-4xl mb-2 w-40 p-2 flex flex-col">
                                        <div className="   h-40 w-32 flex justify-center items-center">
                                            <img className="h-24 rounded-xl" src="/4productpage/2img.png" alt="Wall Art" />
                                        </div>
                                        <button className="w-full bg-black text-white py-2 rounded-full mt-auto">Customize Yours</button>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h3 className="text-white text-lg font-semibold mb-2">Wall Art</h3>
                                    <div className="bg-white h-44 rounded-4xl mb-2 w-40 p-2 flex flex-col">
                                        <div className="   h-40 w-32 flex justify-center items-center">
                                            <img className="h-24 rounded-xl" src="/5wallartproduct/persion.png" alt="Wall Art" />
                                        </div>
                                        <button className="w-full bg-black text-white py-2 rounded-full mt-auto">Customize Yours</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:hidden my-4'>
                            <div className='flex justify-around' style={{ columnGap: '2rem' }}>
                                <li className="flex items-center gap-2 text-white text-[clamp(0.9rem,1vw,50rem)]">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Upload an Image
                                </li>
                                <li className="flex items-center gap-2 text-white text-[clamp(0.9rem,1vw,50rem)]">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Private Customization
                                </li>
                            </div>

                            <div className='flex justify-around' style={{ columnGap: '2rem' }}>
                                <li className="flex items-center gap-2 text-white text-[clamp(0.9rem,1vw,50rem)]">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Customized Gifting
                                </li>
                                <li className="flex items-center gap-2 text-white text-[clamp(0.9rem,1vw,50rem)]">
                                    <span className="w-2 h-2 rounded-full bg-white"></span> Bulk Corporate Gifting
                                </li>
                            </div>
                        </div>

                        <div className="my-6">
                            <p className="text-center mb-3 text-white">Do you have a cretive design idea? Share with Us! We Will Make it for you!</p>
                            <div className="flex gap-2 items-center bg-white rounded-full h-fit ">
                                <input
                                    type="text"
                                    placeholder="Write Down You Idea Here!"
                                    className="flex-1 rounded-full px-4 py-2 text-sm bg-white"
                                />
                                <button className="bg-black text-white rounded-full py-2 px-5 my-1 mx-1 text-sm">Submit Idea</button>
                            </div>
                        </div>


                        <div className='flex flex-col justify-center items-center'>
                            <IoIosArrowDown className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
                            <div className="space-y-6 flex-[1] max-h-80 overflow-auto scrollbar-hide max-lg:w-full">
                                {ideas.map((item, idx) => (
                                    <div key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-4 border-b-2 p-5 bg-black text-white">
                                        <div className='flex flex-wrap items-center gap-4'>
                                            <div className="w-3 h-3 bg-white rounded-full mt-1"></div>
                                            <div className="h-10 w-10 rounded-full bg-white" />
                                            <h4 className="font-semibold">{item.name}</h4>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm line-clamp-2">
                                                {item.text}...<span className="underline px-2">See More</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="text-white">See Design</button>
                                            <span className="text-2xl">🤍</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <IoIosArrowUp className='text-black shadow-2xl w-fit h-fit bg-gray-100 rounded-full text-xl' />
                        </div>
                    </div>
                    <div className='border-l-4 border-white h-100vh rounded-full max-lg:hidden'></div>

                    {/* Right Cards */}
                    <div className="w-full lg:w-1/5 flex flex-col gap-6 self-center max-lg:hidden">
                        <div className='flex flex-col items-start'>
                            <h3 className="text-white text-lg font-semibold mb-2">Phone Case</h3>
                            <div className="bg-white h-44 rounded-4xl mb-2 w-40 p-2 flex flex-col">
                                <button className="w-full bg-black text-white py-2 rounded-full mt-auto">Customize Yours</button>
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className="text-white text-lg font-semibold mb-2">Wall Art</h3>
                            <div className="bg-white h-44 rounded-4xl mb-2 w-40 p-2 flex flex-col">
                                <button className="w-full bg-black text-white py-2 rounded-full mt-auto">Customize Yours</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='flex flex-col'>
                    <section className=" text-white py-10">
                        <div className="w-[95%] xl:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center relative max-w-[1400px] max-xl:max-w-2xl">

                            <div className="bg-white text-black rounded-4xl px-6 max-md:px-2 py-8 w-[60%] -mr-56 mb-10 max-lg:w-full  max-lg:-mr-0">

                                <h3 className="text-center text-sm mb-1 font-light">A Premium Experience In Every Detail</h3>
                                <h2 className="text-center text-[clamp(1rem,1.5vw,50rem)] font-bold my-4">
                                    <span className="bg-black text-white px-4 py-1 rounded-full">Our Best Selling Phone Cases</span>
                                </h2>
                                <div className='flex items-center justify-between gap-2 max-w-[400px]'>
                                    <button className=" bg-black text-white p-2 rounded-full z-20 h-fit">
                                        <FaChevronLeft />
                                    </button>
                                    <div className="flex justify-start gap-5 overflow-auto  max-lg:w-[95%] scrollbar-hide">
                                        {bestSellingMobileProducts.map((product, index) => (
                                            <div key={index} className="text-center flex-shrink-0">
                                                <img src={product.image_link} alt={product.name} className="max-w-40 w-full h-64 object-contain mx-auto" />
                                                <h3 className="mt-3 font-semibold">{product.name}</h3>
                                                <div className="flex justify-center text-yellow-500 my-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} className="text-sm" />
                                                    ))}
                                                </div>
                                                <div className="bg-black text-white px-3 py-1 rounded-full inline-block mt-1">
                                                    Price: {product.total_price}
                                                </div>
                                                <div>
                                                    <Link to={`/phone-case-product/${product.id}`} className="underline text-sm mt-2">More Details</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="bg-black text-white p-2 rounded-full z-20 h-fit">
                                        <FaChevronRight />
                                    </button>
                                </div>
                                <div className="text-center mt-6">
                                    <Link to={"/phonecase"} className="underline font-medium">View All Phone Cases</Link>
                                </div>
                            </div>

                            <div className="z-0 w-[480px] max-lg:hidden">
                                <img
                                    src="/home/biggirl.png"
                                    alt="Woman Holding Phone"
                                    className="rounded-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>


                    <section className="bg-black text-white py-10">
                        <div className="w-[95%] xl:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center relative max-w-[1400px] max-xl:max-w-2xl">
                            <div className=" z-0 w-[700px] max-lg:hidden">
                                <img
                                    src="/home/bigwall.png"
                                    alt="Woman Holding Phone"
                                    className="rounded-full w-full object-cover"
                                />
                            </div>
                            <div className="bg-white text-black rounded-4xl px-6 max-md:px-2 py-8 w-[60%] -ml-72 mb-10 max-lg:w-full  max-lg:-ml-0">

                                <h3 className="text-center text-sm mb-1 font-light">A Premium Experience In Every Detail</h3>
                                <h2 className="text-center text-[clamp(1rem,1.5vw,50rem)] font-bold my-4">
                                    <span className="bg-black text-white px-4 py-1 rounded-full">Our Best Selling Wall Arts</span>
                                </h2>
                                <div className='flex items-center justify-between gap-2 max-w-[400px] mx-auto'>
                                    <button className=" bg-black text-white p-2 rounded-full z-20 h-fit">
                                        <FaChevronLeft />
                                    </button>
                                    <div className="flex justify-start overflow-auto  scrollbar-hide gap-5">
                                        {bestSellingWallArtProducts.map((product, index) => (
                                            <div key={index} className="text-center flex-shrink-0">
                                                <img src={product.image_link} alt={product.name} className="w-40  h-40 object-contain mx-auto" />
                                                <h3 className="mt-3 font-semibold">{product.name}</h3>
                                                <div className="flex justify-center text-yellow-500 my-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} className="text-sm" />
                                                    ))}
                                                </div>
                                                <div className="bg-black text-white px-3 py-1 rounded-full inline-block mt-1">
                                                    Price: {product.total_price}
                                                </div>
                                                <div>
                                                    <button className="underline text-sm mt-2">More Details</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="bg-black text-white p-2 rounded-full z-20 h-fit">
                                        <FaChevronRight />
                                    </button>
                                </div>
                                <div className="text-center mt-6">
                                    <Link to={"/wallart"} className="underline font-medium">View All Phone Cases</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* free shipping  */}
            <section>
                <div className='w-[90%] mx-auto pt-5 max-xl:flex overflow-auto max-xl:space-x-5'>

                    <div className='flex justify-around mb-5 gap-5'>
                        <div className="w-1/2 min-w-[500px] h-56 bg-[url('/home/manbg.png')] bg-cover bg-center  p-6 rounded-2xl flex flex-col md:flex-row items-start justify-between gap-6 shadow-md overflow-hidden">
                            {/* Left - Text Section */}
                            <div className="flex-1 text-left">
                                <h2 className="text-[clamp(1.5rem,2vw,50rem)] font-bold text-black">Free Shipping</h2>
                                <p className="text-[clamp(0.8rem,1vw,50rem)] text-gray-700 mt-2">On any Phone Case Percahse</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 text-sm rounded-full">
                                    Silver Card Experies Today 12:00 am
                                </button>
                            </div>
                        </div>

                        <div className="h-56 bg-[url('/home/manbg.png')] bg-cover bg-center w-1/2 min-w-[500px] p-6 rounded-2xl flex flex-col md:flex-row items-start justify-between gap-6 shadow-md overflow-hidden">
                            {/* Left - Text Section */}
                            <div className="flex-1 text-left">
                                <h2 className="text-[clamp(1.5rem,2vw,50rem)] font-bold text-black">Free Shipping</h2>
                                <p className="text-[clamp(0.8rem,1vw,50rem)] text-gray-700 mt-2">On any Phone Case Percahse</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 text-sm rounded-full">
                                    Silver Card Experies Today 12:00 am
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around gap-5'>
                        <div className="bg-[url('/home/manbg.png')] h-56 bg-cover bg-center w-1/2 min-w-[500px] p-6 rounded-2xl flex flex-col md:flex-row items-start justify-between gap-6 shadow-md overflow-hidden">
                            {/* Left - Text Section */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-[clamp(1.5rem,2vw,50rem)] font-bold text-black">Free Shipping</h2>
                                <p className="text-[clamp(0.8rem,1vw,50rem)] text-gray-700 mt-2">On any Phone Case Percahse</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 text-sm rounded-full">
                                    Silver Card Experies Today 12:00 am
                                </button>
                            </div>
                        </div>

                        <div className="bg-[url('/home/manbg.png')] h-56 bg-cover bg-center w-1/2 min-w-[500px] p-6 rounded-2xl flex flex-col md:flex-row items-start justify-between gap-6 shadow-md overflow-hidden">
                            {/* Left - Text Section */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-[clamp(1.5rem,2vw,50rem)] font-bold text-black">Free Shipping</h2>
                                <p className="text-[clamp(0.8rem,1vw,50rem)] text-gray-700 mt-2">On any Phone Case Percahse</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 text-sm rounded-full">
                                    Silver Card Experies Today 12:00 am
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-white text-center font-smeibold text-xl my-3'>Apply now before they expires</h1>
            </section>

            <div className=" bg-cover bg-center p-4 text-white font-sans w-[90%] max-md:w-[98%] max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-8 h-fit">
                    {/* <div className="w-full lg:w-2/3 flex flex-col items-center justify-around">

                        <div className="mt-4 space-y-5">
                            <h1 className='text-black text-center font-semibold text-3xl'>We Are Proudly From <br /><span className='text-black text-center font-semibold text-6xl'>India</span></h1>
                            <h1 className="bg-black text-white px-4 py-1 text-2xl font-semibold rounded-full hover:bg-gray-800 transition text-center">
                                Shop By Your State
                            </h1>

                            <div
                                className="flex items-center mb-4 rounded-xl"
                                style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)' }} // Adjust as needed
                            >
                                <input
                                    className="w-full px-3 py-2 rounded-l-md placeholder:text-black bg-white"
                                    type="text"
                                    placeholder="Select Your Phone"
                                />
                                <button className="text-white bg-black px-4 py-2 rounded-r-md">
                                    <CiSearch size={26} />
                                </button>
                            </div>

                        </div>



                        <div className="flex items-center justify-center gap-4 w-full mx-auto">
    
                            <div className="bg-white p-2 rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer">
                                <MdKeyboardArrowLeft className="text-black text-[clamp(1.5rem,2vw,50rem)]" />
                            </div>

                            <div className="w-[clamp(14rem,18vw,50rem)] h-[clamp(14rem,18vw,50rem)] rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                                <img
                                    src="/home/statue.png"
                                    alt="West Bengal"
                                    className="w-[clamp(14rem,18vw,50rem)] h-[clamp(14rem,18vw,50rem)] object-cover"
                                />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-[clamp(0.7rem,1vw,50rem)] px-4 py-1 rounded-full z-20">
                                    West Bengal
                                </div>
                            </div>

                            <div className="bg-white p-2 rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer">
                                <MdKeyboardArrowRight className="text-black text-[clamp(1.5rem,2vw,50rem)]" />
                            </div>
                        </div>


                        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-4 shadow-lg w-fit mx-auto">
                            <img
                                src="/home/footer-small-img.png"
                                alt="Durga Puja West Bengal"
                                className="w-full md:w-1/2 rounded-xl object-cover h-44"
                            />


                            <div className="md:ml-6 md:mt-0 text-center md:text-left">
                                <h2 className="text-lg text-gray-500">Are You From</h2>
                                <h1 className="text-3xl font-bold text-black">West Bengal?</h1>
                                <p className="text-gray-600 mt-2">
                                    Explore The Beauty and Specility<br />
                                    Of West Bengal. Join WIth Your
                                    Community.
                                </p>

                                <div className="flex justify-center md:justify-start gap-3 mt-2">
                                    <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">
                                        Wall Art
                                    </button>
                                    <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">
                                        Phone Case
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Right Section - Social and FAQ */}

                    <div className='lg:w-1/2 bg-[url("/home/homebg.png")] bg-center bg-cover w-full space-y-5 flex flex-col justify-center rounded-4xl p-2'>
                        <h3 className="text-[clamp(2rem,3.5vw,50rem)] font-semibold text-center">Lets Get Social !</h3>
                        <div className='flex justify-evenly'>
                            <div className="flex flex-col gap-4 mt-2 text-4xl space-y-5">
                                <FaInstagram />
                                <FaEnvelope />
                            </div>
                            <div className='border-l-4 border-white rounded-full'></div>
                            <div className='flex flex-col  gap-4 mt-2 text-4xl space-y-5'>
                                <FaFacebookF />
                                <FaPaperPlane />
                            </div>
                            <div className='border-l-4 border-white rounded-full'></div>

                            <div className="flex flex-col gap-4 mt-2 text-4xl space-y-5">

                                <FaWhatsapp />

                                <FaPhoneAlt />
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-full flex flex-col border border-white rounded-4xl p-4'>
                        <div className="mt-6">
                            <h2 className="text-3xl font-semibold mb-2 text-center">Have a <br />  <span className='text-6xl font-semibold'>Question?</span></h2>
                            <div className="flex items-center bg-black rounded-full overflow-hidden  justify-center max-w-md mx-auto">
                                <button className="bg-black text-white p-3">
                                    <FaSearch size={40} />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Write Your Question Here"
                                    className="px-4 py-2 w-full text-white outline-none placeholder:text-3xl border-b border-b-gray-300 "
                                />

                            </div>
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            <h4 className="text-md mb-2 font-medium text-center">Commonly Asked</h4>
                            <div className='flex gap-3 max-sm:flex-col'>
                                <div className="flex items-center gap-2 w-1/2 max-sm:w-full">
                                    <strong className="bg-white h-2 w-2 rounded-full"></strong>
                                    <span className="px-2 py-1 bg-white rounded-full text-md text-black text-center font-semibold w-full">
                                        Write Your Question Here
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 w-1/2 max-sm:w-full">
                                    <strong className="bg-white h-2 w-2 rounded-full"></strong>
                                    <span className="px-2 py-1 bg-white rounded-full text-md text-black text-center font-semibold w-full">
                                        Write Your Question Here
                                    </span>
                                </div>
                            </div>

                            <div className='flex gap-3 max-sm:flex-col'>
                                <div className="flex items-center gap-2 w-1/2 max-sm:w-full">
                                    <strong className="bg-white h-2 w-2 rounded-full"></strong>
                                    <span className="px-2 py-1 bg-white rounded-full text-md text-black text-center font-semibold w-full">
                                        Write Your Question Here
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 w-1/2 max-sm:w-full">
                                    <strong className="bg-white h-2 w-2 rounded-full"></strong>
                                    <span className="px-2 py-1 bg-white rounded-full text-md text-black text-center font-semibold w-full">
                                        Write Your Question Here
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Bottom Section - West Bengal Card */}

            </div>
        </div >
    )
}

export default Home
