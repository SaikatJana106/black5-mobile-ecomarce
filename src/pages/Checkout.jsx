import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CheckoutWithAddresses() {

  // Dummy saved addresses
  const savedAddresses = [
    {
      id: 1,
      name: "Snehasish",
      phone: "7031182870",
      address: "123 Park Street, Kolkata, West Bengal, 700016, India",
    },
    {
      id: 2,
      name: "Saikat",
      phone: "6294623319",
      address: "Payragacha, Hooghly, West Bengal, 712304, India",
    },
    {
      id: 3,
      name: "Rahul",
      phone: "9876543210",
      address: "MG Road, Bangalore, Karnataka, 560001, India",
    },
  ];
  // const countries = Country.getAllCountries();
  // const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];
  // const cities = selectedState ? City.getCitiesOfState(selectedCountry, selectedState) : [];
  //================================== api call ====================================
  //========================= city state countriy fetch========================================= 
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch all countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/countries`);
        setCountries(res.data.data);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (!selectedCountry) return;
    const fetchStates = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/states/${selectedCountry}`
        );
        setStates(res.data.data);
        setCities([]); // reset cities
        setSelectedState(""); // reset state
      } catch (err) {
        console.error("Error fetching states:", err);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (!selectedState) return;
    const fetchCities = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/cities/${selectedState}`
        );
        setCities(res.data.data);
        setSelectedCity(""); // reset city
      } catch (err) {
        console.error("Error fetching cities:", err);
      }
    };
    fetchCities();
  }, [selectedState]);
  //========================= city state countriy fetch========================================= 

  //==================================== add adress =================================
  const [selectedAddress, setSelectedAddress] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const [showForm, setShowForm] = useState(false);

  const addAddress = async () => {
    try {
      const token = localStorage.getItem("black5authtoken");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-new-addresss-book`,
        {
          billing_first_name: selectedAddress.first_name,
          billing_last_name: selectedAddress.last_name,
          billing_email: selectedAddress.email,
          billing_phone_number: selectedAddress.phone_number,
          billing_address: selectedAddress.address,
          billing_country: selectedAddress.country,
          billing_state: selectedAddress.state,
          billing_city: selectedAddress.city,
          billing_zip_code: selectedAddress.zip_code,

          shipping_first_name: selectedAddress.first_name,
          shipping_last_name: selectedAddress.last_name,
          shipping_email: selectedAddress.email,
          shipping_phone_number: selectedAddress.phone_number,
          shipping_address: selectedAddress.address,
          shipping_country: selectedAddress.country,
          shipping_state: selectedAddress.state,
          shipping_city: selectedAddress.city,
          shipping_zip_code: selectedAddress.zip_code,
          is_default: 1
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data; // axios parses JSON automatically

      if (data.success) {
        alert("Address added successfully ✅");
        setFormState("login"); // or redirect user
      } else {
        alert(data.message || "Adding address failed ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  //==================================== add adress =================================
  //================================= featch adress ==========================================
  const [address, setaddress] = useState([]);
  useEffect(() => {
    const fetchaddress = async () => {
      try {
        const token = localStorage.getItem("black5authtoken");

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-saved-address`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setaddress(response.data.data);

      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchaddress();
  }, []);
  //================================= featch adress ==========================================
  //==================================== Razor pay=========================================
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [razorpayData, setRazorpayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const [isRazorpayError, setIsRazorpayError] = useState(false);

  useEffect(() => {
    // If the script is already loaded, do nothing
    if (window.Razorpay) {
      setIsRazorpayLoaded(true);
      return;
    }

    // Create a script element
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    // Handle script load success
    script.onload = () => {
      setIsRazorpayLoaded(true);
    };

    // Handle script load error
    script.onerror = () => {
      setIsRazorpayError(true);
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);


  useEffect(() => {
    if (isRazorpayLoaded && !isRazorpayError) {
      const fetchRazorpayOrder = async () => {
        try {
          const token = localStorage.getItem("black5authtoken");
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/create-razorpay-order`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setRazorpayData(response.data.data);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching Razorpay order:", err);
          setError("Failed to fetch Razorpay order.");
          setLoading(false);
        }
      };
      fetchRazorpayOrder();
    }
  }, [isRazorpayLoaded, isRazorpayError]);

  const handlePayClick = () => {
    if (paymentMethod === "cod") {
      alert("Proceeding with Cash on Delivery...");
      // Add your COD order submission logic here
      return;
    }

    // Guard clause: ensure data and script are ready
    if (paymentMethod === "razorpay") {
      if (!razorpayData || !isRazorpayLoaded) {
        console.error("Razorpay script or order data not ready.");
        return;
      }

      // Razorpay options
      const options = {
        key: razorpayData.key,
        amount: razorpayData.amount,
        currency: razorpayData.currency,
        order_id: razorpayData.order_id,
        name: "Black5 Creatives",
        description: "Payment for your order",
        handler: async (response) => {
          const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
          } = response;
          try {
            const token = localStorage.getItem("black5authtoken");
            const verificationResponse = await axios.post(
              `${import.meta.env.VITE_API_URL}/place-order`,
              {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (verificationResponse.data.status === true) {
              alert("Payment successful and order placed!");
              // Redirect to a success page or update UI
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Error verifying payment:", err);
            alert("An error occurred during payment verification.");
          }
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Open the payment modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  };

  //================================== api call ====================================

  return (
    <div>
      <div className="flex justify-center">
        <img
          src="/4productpage/product-logo.png"
          alt="logo"
          className="h-40 w-auto"
        />
      </div>
      <div className="min-h-screen flex justify-center items-start py-5 px-6  text-white">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Billing Details */}
          <div className="col-span-2 p-6 border border-gray-700 rounded h-fit">
            <h2 className="text-lg font-semibold mb-4">Billing Details</h2>

            {/* Saved addresses */}
            <div className="space-y-3 mb-4 max-h-[40vh] overflow-auto custom-scrollbar">
              {address.map((addr, index) => (
                <label
                  key={addr.id}
                  className="flex items-start gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === index}
                    onChange={() => setSelectedAddress(index)}
                    className="mt-1 accent-blue-500"
                  />
                  <div>
                    <p className="font-medium">
                      {addr.billing_first_name} {addr.billing_last_name}, {addr.billing_phone_number}
                    </p>
                    <p>
                      {addr.billing_country}, {addr.billing_state}
                    </p>
                    <p>
                      {addr.billing_city}, {addr.billing_zip_code}
                    </p>
                    <p className="text-sm text-gray-300">{addr.billing_address}</p>
                  </div>
                </label>
              ))}
            </div>

            {/* Add New Address Button */}
            <button
              className="mt-2 text-sm font-semibold border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancel" : "➕ Add New Address"}
            </button>

            {/* Add New Address Form */}
            {showForm && (
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={selectedAddress.first_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-white"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={selectedAddress.last_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={selectedAddress.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-white"
                  />
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={selectedAddress.phone_number}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <select
                    name="country"
                    value={selectedCountry}
                    onChange={(e) => {
                      setSelectedCountry(e.target.value);
                      handleChange(e);
                    }}
                    className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600"
                  >
                    <option disabled value="">
                      Select Country
                    </option>
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>

                  <select
                    name="state"
                    disabled={!selectedCountry}
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      handleChange(e);
                    }}
                    className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600"
                  >
                    <option value="">Select State</option>
                    {states.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <select
                    name="city"
                    disabled={!selectedState}
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      handleChange(e);
                    }}
                    className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600"
                  >
                    <option value="">Select City</option>
                    {cities.map((ct) => (
                      <option key={ct.id} value={ct.id}>
                        {ct.name}
                      </option>
                    ))}
                  </select>

                  <input
                    type="number"
                    name="zip_code"
                    placeholder="Zip Code"
                    value={selectedAddress.zip_code}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-white"
                  />
                </div>

                <textarea
                  name="address"
                  placeholder="Address"
                  rows="6"
                  value={selectedAddress.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-transparent border border-gray-600 text-white"
                ></textarea>

                <button onClick={addAddress} className="mt-2 w-full bg-blue-600 py-2 rounded font-semibold hover:bg-blue-500 transition">
                  Save Address
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Order Summary */}
          <div className="p-6 border border-gray-700 rounded flex flex-col justify-between h-[70vh]">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-white">Your Order</h2>

              <div className="max-h-[45vh] overflow-auto border border-gray-700 rounded">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-4 py-2 border border-gray-700">Product Name</th>
                      <th className="px-4 py-2 border border-gray-700 text-center">Qty</th>
                      <th className="px-4 py-2 border border-gray-700 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-700">Professional Sound</td>
                      <td className="px-4 py-2 border border-gray-700 text-center">3</td>
                      <td className="px-4 py-2 border border-gray-700 text-right">Rs 2160.00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-700">Acoustic Guitar</td>
                      <td className="px-4 py-2 border border-gray-700 text-center">1</td>
                      <td className="px-4 py-2 border border-gray-700 text-right">Rs 2100.00</td>
                    </tr>
                    {/* Total Row */}
                    <tr className="font-bold">
                      <td className="px-4 py-2 border border-gray-700">Total</td>
                      <td className="px-4 py-2 border border-gray-700 text-center"></td>
                      <td className="px-4 py-2 border border-gray-700 text-right">Rs 8580</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>Rs 4260</span>
              </div>

              {/* Payment Options */}
              <div className="mt-6 space-y-3">
                {/* <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-blue-500"
                />
                <span>Cash on Delivery (COD)</span>
              </label> */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="razorpay"
                    checked={paymentMethod === "razorpay"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-blue-500"
                  />
                  <span>Razorpay (Online Payment)</span>
                </label>
              </div>

              {/* Place Order */}
              <button onClick={handlePayClick} className="mt-6 w-full border border-white text-white py-2 rounded font-semibold hover:bg-white hover:text-black cursor-pointer transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
