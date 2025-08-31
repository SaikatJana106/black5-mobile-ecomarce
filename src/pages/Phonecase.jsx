import React, { useEffect, useRef, useState } from 'react';
import phoneCases from "../json/phonecase.json"
import phones from "../json/phone.json"
import data from '../json/phonecasefiter.json'
import cases from '../json/cases.json'
import { FaStar } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import phonecasefilterdata from '../json/phonecasefilterdata.json';
const Phonecase = () => {



  // filter button for product
  const filtersectionRef = useRef(null);
  const [isFilterSectionVisible, setIsFilterSectionVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFilterSectionVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (filtersectionRef.current) {
      observer.observe(filtersectionRef.current);
    }

    return () => {
      if (filtersectionRef.current) {
        observer.unobserve(filtersectionRef.current);
      }
    };
  }, []);
  // filter button for product


  // arrow scroll logic 
  // =================phone case=============
  const PhoneProductscrollRef = useRef(null);

  const scroll = (direction) => {
    if (PhoneProductscrollRef.current) {
      PhoneProductscrollRef.current.scrollBy({
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
        top: direction === "up" ? -200 : 200, // vertical scroll
        behavior: "smooth",
      });
    }
  };

  //======================category=================== 
  // arrow scroll logic 


  //======================= category api call =================
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://black5creations.orbitalwebworks.com/api/categories");
        const data = await res.json();

        // only home + root categories
        const filtered = data.data.categories.data.filter(
          (c) => c.is_home === 1 && c.parent_id === null
        );
        setCategories(filtered);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // get selected category
  const selected = categories.find((c) => c.slug === "phone-case");
  // =================category api call ===========================

  return (
    <div className=" text-white font-sans">
      {/* ✅ Hero Section with Background */}
      <div className="relative h-screen w-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/2phonecover/banner.png"
          alt="Banner"
        />
        {/* Overlay Text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full">
          <h1 className="text-white text-[clamp(2rem,4vw,4rem)] font-bold w-full">Premium Phone Cases</h1>
          <p className="text-white text-[clamp(1.3rem,2.2vw,4rem)] mt-2">We Make The Best Cases For You!</p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* ✅ Phone Selector and Category Section */}
      <section className="flex max-[1400px]:flex-col flex-row items-start justify-center md:p-8 p-3  bg-cover bg-center h-fit text-black rounded-3xl -mt-16 z-10 relative w-[85%] max-lg:w-[95%] mx-auto max-w-[1400px]"
        style={{ backgroundImage: "url('/2phonecover/2banner.png')" }}
      >
        {/* Left Side - Select Phone */}
        <div className="max-[1400px]:w-full w-1/2  p-6 mr-4">
          <h2 className="text-lg font-semibold mb-4">Select Your Phone</h2>
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
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-2 h-36 overflow-auto custom-scrollbar">
            {phones.map((phn, i) => (
              <label key={phn.id || i} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                {phn.name}
              </label>
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Select Your Phone Model</h2>
          <div className="flex items-center mb-4">
            <input
              className="w-full px-3 py-2 border rounded-l-md"
              type="text"
              placeholder="Select Your Phone Model"
            />
            <button className=" text-white bg-black px-4 py-2 rounded-r-md">
              <CiSearch size={26} />
            </button>
          </div>
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3  gap-2 h-36 overflow-auto custom-scrollbar">
            {phones.map((phn, i) => (
              <label key={phn.id || i} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                {phn.name}
              </label>
            ))}
          </div>
        </div>

        {/* Right Side - Category Cards */}
        <div className="max-[1400px]:w-full w-1/2 bg-black  rounded-xl  p-6 mt-8 md:mt-0">
          <h2 className="text-lg font-semibold text-white text-center mb-4">Select Your Category</h2>
          <div className='flex flex-col justify-center items-center'>
            <IoIosArrowDown onClick={() => categoryscroll("down")} className='bg-white rounded-full text-black p-1 text-2xl shadow-2xl' />
            <div ref={categoryscrollRef} className='h-[400px] overflow-hidden m-auto scrollbar-hide w-full'>
              {/* {[1, 2, 3, 4, 5].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap   items-center bg-white rounded-lg p-4 mb-4 shadow-md "
                  style={{ rowGap: '0.5rem', columnGap: '1rem' }}
                >
                  <img
                    src="/2phonecover/banner.png"
                    alt="Phone Case"
                    className="w-40 h-48 object-cover rounded-md flex-[1]"
                  />
                  <div className="">
                    <p className="text-[clamp(1.3rem,1.8vw,2.5rem)] text-gray-900">The Best Phone Cases For</p>
                    <h3 className="text-xl font-semibold text-black">Men</h3>
                    <button className="mt-2 px-4 py-1 bg-black text-white text-sm rounded-md">
                      Shop Now
                    </button>
                    <div className="text-yellow-500 mt-1 text-sm">★★★★★</div>
                  </div>
                </div>
              ))} */}

              {selected && selected.children?.length > 0 ? (
                selected.children.map((child) => (
                  <div
                    key={child.id}
                    className="flex flex-wrap   items-center bg-white rounded-lg p-4 mb-4 shadow-md "
                    style={{ rowGap: '0.5rem', columnGap: '1rem' }}
                  >
                    <img
                      src="/2phonecover/banner.png"
                      alt="Phone Case"
                      className="w-40 h-48 object-cover rounded-md flex-[1]"
                    />
                    <div className="">
                      <p className="text-[clamp(1.3rem,1.8vw,2.5rem)] text-gray-900">The Best Phone Cases For</p>
                      <h3 className="text-xl font-semibold text-black">{child.name}</h3>
                      <button className="mt-2 px-4 py-1 bg-black text-white text-sm rounded-md">
                        Shop Now
                      </button>
                      <div className="text-yellow-500 mt-1 text-sm">★★★★★</div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No subcategories found</p>
              )}
            </div>
            <IoIosArrowUp onClick={() => categoryscroll("up")} className='bg-white rounded-full text-black p-1 text-2xl shadow-2xl' />
          </div>
        </div>
      </section>


      {/* ==================crousel================*/}
      <section className="bg-black text-white py-10  mx-auto">
        <div className="text-center mb-6">
          <button className="px-4 py-1 bg-white text-black rounded-full font-medium mb-2 text-2xl">
            Get to know Black5 Creatives
          </button>
          <p className="text-gray-400">The Feature Panel</p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-6 w-[75%] max-xl:w-[95%] max-w-[1400px] mx-auto">
          <button onClick={() => scroll("left")} className="text-2xl text-white hover:text-gray-300">&#10094;</button>
          <div ref={PhoneProductscrollRef} className="flex overflow-hidden gap-6 scrollbar-hide px-4">
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
          <button onClick={() => scroll("right")} className="text-2xl text-white hover:text-gray-300">&#10095;</button>
        </div>
      </section>
      {/* ==================crousel================*/}


      {/*---------------------------- case oprtion choose -------------------------------------------- */}
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
          {cases.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg bg-black relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain absolute top-[20%]"
                />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-xs text-black hover:underline cursor-pointer underline">
                {item.link}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*========================================== case oprtion choose ================================ */}


      {/* ================================last section ============================================= */}
      <div ref={filtersectionRef} className="flex bg-white text-black p-15 max-lg:p-6 rounded-3xl shadow-lg gap-6 min-h-screen w-[85%] max-lg:w-[95%] mx-auto mb-5 max-w-[1400px]">
        {/* Filter Sidebar */}
        <div className="lg:w-1/4 space-y-6 border-r pr-4 max-lg:hidden">
          {phonecasefilterdata.filters.map((filterSection, index) => (
            <div key={index}>
              <h2 className="font-semibold mb-2">{filterSection.title}</h2>
              {filterSection.options.map((option, i) => (
                <label key={i} className="text-sm flex mb-2 items-center">
                  <input type="checkbox" className="mr-2" /> {option}
                </label>
              ))}
              {index < phonecasefilterdata.filters.length - 1 && <hr className='bg-gray-400 mt-5' />}
            </div>
          ))}
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
              {phonecasefilterdata.filters.map((filterSection, index) => (
                <div key={index}>
                  <h2 className="font-semibold mb-2">{filterSection.title}</h2>
                  {filterSection.options.map((option, i) => (
                    <label key={i} className="text-sm flex mb-2 items-center">
                      <input type="checkbox" className="mr-2" /> {option}
                    </label>
                  ))}
                  {index < phonecasefilterdata.filters.length - 1 && <hr className='bg-gray-400 mt-5' />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        {isFilterSectionVisible && (
          <div className="lg:hidden fixed bottom-5 right-5 z-10">
            <button
              className="bg-black text-white p-3 rounded-full shadow-lg"
              onClick={() => document.getElementById('mobile-filter').classList.remove('hidden')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        )}




        {/* Product Grid */}
        <div className="lg:w-3/4 w-full space-y-10">

          {[
            {
              label: "Phone Cases For Women's",
              items: data.filter(item => item.category === "women")
            },
            {
              label: "Phone Cases For Men",
              items: data.filter(item => item.category === "men")
            },
            {
              label: "Phone Cases For Couples",
              items: data.filter(item => item.category === "couples")
            },
            {
              label: "Phone Cases Unisex",
              items: data.filter(item => item.category === "unisex")
            },
            {
              label: "Customized Phone Cases",
              items: data.filter(item => item.category === "customized")
            }
          ].map((section, i) => (
            <div key={i}>
              <h3 className=" text-white bg-black font-semibold text-center w-max mx-auto px-4 py-1 text-lg rounded-full mb-1">
                {section.label}
              </h3>
              <p className="text-center text-xs text-gray-600 mb-4">
                iodirf grdf grf with premium designs and quality
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 h-fit">
                {section.items.map((item, j) => (
                  <div key={j} className="flex flex-col items-center text-center space-y-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-fit w-fit object-cover rounded-md max-h-60"
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
    </div>
  );
};

export default Phonecase;
