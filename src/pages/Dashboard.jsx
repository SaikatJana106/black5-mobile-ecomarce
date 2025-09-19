import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("profile");
    // const [address, setAddress] = useState("");
    const [showNewAddress, setShowNewAddress] = useState(false);

    const orders = [
        {
            id: 1,
            image: "/path/to/product1.png",
            name: "Product 1",
            price: 499,
            quantity: 2,
            deliveryDate: "2025-09-20",
        },
        {
            id: 2,
            image: "/path/to/product2.png",
            name: "Product 2",
            price: 799,
            quantity: 1,
            deliveryDate: "2025-09-22",
        },
    ];


    //================================== api call ====================================
    // location fetch 
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

    return (
        <div className="min-h-screen flex flex-col items-center py-8">
            <div className="flex justify-center mb-5">
                <img
                    src="/4productpage/product-logo.png"
                    alt="logo"
                    className="h-40 w-auto"
                />
            </div>
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mx-auto">

                {/* Sidebar */}
                <div className="w-full md:w-1/4 bg-transparent border border-gray-600 rounded h-[50vh]">
                    <h2 className="bg-black text-white text-center py-3 font-bold rounded-t">
                        Snehashis Bhirisrestha
                    </h2>
                    <hr className=" text-white my-2"/>
                    <ul className="flex md:flex-col">
                        {["profile", "orders", "address"].map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer px-4 py-3 w-full text-center md:text-left 
                  ${activeTab === tab
                                        ? "bg-white text-black font-semibold"
                                        : "hover:bg-gray-800 text-gray-300"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4 bg-transparent border border-gray-600 rounded p-6 text-white">
                    {activeTab === "profile" && (
                        <div>
                            <h2 className="bg-black px-4 py-2 rounded text-lg font-bold mb-4">
                                Profile
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Snehashis"
                                        className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                    />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Bhirisrestha"
                                        className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        defaultValue="snehasish7031@gmail.com"
                                        disabled
                                        className="w-full px-3 py-2 border border-gray-500 bg-gray-800 text-gray-300 rounded"
                                    />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        placeholder="+91 1234567890"
                                        className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label>Address:</label>
                                <textarea
                                    rows={4}
                                    placeholder="Street address, Apartment, Suite etc."
                                    className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                />
                            </div>
                            <button className="mt-4 border border-white px-4 py-2 rounded text-white  hover:bg-white hover:text-black cursor-pointer">
                                Update Profile
                            </button>
                        </div>
                    )}

                    {activeTab === "orders" && (
                        <div>
                            <h2 className="bg-black px-4 py-2 rounded text-lg font-bold mb-4">
                                Orders
                            </h2>
                            <div className="hidden md:grid grid-cols-5 text-center font-semibold mb-2">
                                <p>Product</p>
                                <p>Title</p>
                                <p>Quantity</p>
                                <p>Price</p>
                                <p>Delivered At</p>
                            </div>
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="flex flex-wrap md:grid md:grid-cols-5 items-center gap-4 border-b border-gray-600 py-3"
                                >
                                    <img
                                        src={order.image}
                                        alt={order.name}
                                        className="h-20 w-20 object-cover rounded"
                                    />
                                    <h3>{order.name}</h3>
                                    <p className="text-center">{order.quantity}</p>
                                    <p className="text-center">₹{order.price}</p>
                                    <p className="text-center">{order.deliveryDate}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "address" && (
                        <div>
                            <h2 className="bg-black px-4 py-2 rounded text-lg font-bold mb-4">
                                Address
                            </h2>
                            {!showNewAddress && (
                                <div className="flex items-start gap-5 cursor-pointer flex-wrap justify-between">
                                    {address.map((addr, index) => (

                                        <div key={addr.id}>
                                            <p className="font-medium">
                                                {addr.billing_first_name} {addr.billing_last_name}
                                            </p>
                                            <p> {addr.billing_phone_number}</p>
                                            <p>
                                                {addr.billing_country}, {addr.billing_state}
                                            </p>
                                            <p>
                                                {addr.billing_city}, {addr.billing_zip_code}
                                            </p>
                                            <p className="text-sm text-gray-300">{addr.billing_address}</p>
                                        </div>

                                    ))}
                                </div>
                            )}
                            <button
                                className="mt-2 text-sm font-semibold border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
                                onClick={() => setShowForm(!showForm)}
                            >
                                {showForm ? "Cancel" : "➕ Add New Address"}
                            </button>

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

                                    <button onClick={addAddress} className="mt-2 w-full border border-white py-2 rounded font-semibold hover:bg-white hover:text-black cursor-pointer transition">
                                        Save Address
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
