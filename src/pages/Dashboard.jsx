import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
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
    const [showToolbox, setShowToolbox] = useState(null);
    const addAddress = async () => {
        try {
            const token = localStorage.getItem("black5authtoken");
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/add-addresses`,
                {
                    first_name: selectedAddress.first_name,
                    last_name: selectedAddress.last_name,
                    email: selectedAddress.email,
                    phone: selectedAddress.phone_number,
                    country: selectedAddress.country,
                    state: selectedAddress.state,
                    city: selectedAddress.city,
                    address: selectedAddress.address,
                    pincode: selectedAddress.zip_code,
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
            console.error("add adress  Error:", error);
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
                    `${import.meta.env.VITE_API_URL}/user/get-addresses`,
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
    //==================================== get user profile===================================
    const [userProfile, setuserProfile] = useState(null);
    useEffect(() => {
        const fetchuserProfile = async () => {
            try {
                const token = localStorage.getItem("black5authtoken");

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/user/get-profile`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setuserProfile(response.data.data);
                console.log(response.data);

            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchuserProfile();
    }, []);

    //==================================== get user profile===================================
    //==================================== order fetch =====================================
    const [userOrder, setuserOrder] = useState([]);
    useEffect(() => {
        const fetchuserOrder = async () => {
            try {
                const token = localStorage.getItem("black5authtoken");

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/user/orders`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setuserOrder(response.data.data);

            } catch (error) {
                console.error("Error fetching orer items:", error);
            }
        };

        fetchuserOrder();
    }, []);
    //==================================== order fetch =====================================

    // ==================================order details fetch=============================== 
    const [orderDetaldata, setOrderDetaldata] = useState(null);
    const [orderAddress, setOrderAddress] = useState(null);
    const [orderItems, setOrderItems] = useState([]);

    const orderDetails = async (orderId) => {
        try {
            const token = localStorage.getItem("black5authtoken");
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/user/orders/${orderId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const data = response.data.data;
            setOrderDetaldata(data.order);
            setOrderAddress(data.address);
            setOrderItems(data.items);
        } catch (error) {
            console.error("error fetching order details",error);
        }
    };

    // ==================================order details fetch=============================== 
    //================================= delete address ==============================
    const deleteAdd = async (orderid) => {
        try {
            const token = localStorage.getItem("black5authtoken");

            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/user/delete-addresses/${orderid}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = response.data;

            if (data.success) {
                alert("Address deleted successfully");

                // Remove the deleted address from UI immediately
                setAddress((prev) => prev.filter((addr) => addr.id !== orderid));
            } else {
                alert(data.message || "Deleting address failed");
            }
        } catch (error) {
            console.error("delete address Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    //================================= delete address ==============================
    //    ====================================== api call ===========================================
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
                        {userProfile?.first_name || ""} {userProfile?.last_name || ""}
                    </h2>
                    <hr className=" text-white my-2" />
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
                <div className="w- bg-transparent border border-gray-600 rounded p-6 text-white">
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
                                        defaultValue={userProfile?.first_name || ""}
                                        className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                    />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue={userProfile?.last_name || ""}
                                        className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        defaultValue={userProfile?.email || ""}
                                        className="w-full px-3 py-2 border border-gray-500 bg-gray-800 text-gray-300 rounded"
                                    />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        defaultValue={userProfile?.phone || ""}
                                        className="w-full px-3 py-2 border border-gray-500 bg-transparent rounded text-white"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label>Address:</label>
                                <textarea
                                    rows={4}
                                    defaultValue={userProfile?.adress || ""}
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
                            <div className="grid grid-cols-7 text-center font-semibold mb-2">
                                <p>#</p>
                                <p>Date</p>
                                <p>Order ID</p>
                                <p>Price</p>
                                <p>Status</p>
                                <p>Payment</p>
                                <p>Details</p>
                            </div>
                            {userOrder.map((order) => (
                                <div
                                    key={order.id}
                                    className="grid grid-cols-7 items-center gap-4 border-b border-gray-600 py-3"
                                >
                                    <h3>{order.id}</h3>
                                    <p className="text-center">{order.created_at}</p>
                                    <p className="text-center">{order.order_number}</p>
                                    <p className="text-center">₹{order.total_amount}</p>
                                    <p className="text-center">{order.order_status}</p>
                                    <p className="text-center">{order.payment_method}</p>
                                    <button onClick={() => {
                                        orderDetails(order.id);  // Call the function with the correct ID
                                        setActiveTab("orderDetail");     // Set the active tab
                                    }}>View</button>
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

                                        <div key={addr.id} className="min-w-40">
                                            <div className="flex justify-between items-center">
                                                <p className="font-medium">
                                                    {addr.billing_first_name} {addr.billing_last_name}
                                                </p>
                                                <HiOutlineDotsVertical onClick={() => setShowToolbox(showToolbox === addr.id ? null : addr.id)
                                                }
                                                    className="cursor-pointer" />
                                            </div>
                                            <p> {addr.billing_phone_number}</p>
                                            <p>
                                                {addr.billing_country}, {addr.billing_state}
                                            </p>
                                            <p>
                                                {addr.billing_city}, {addr.billing_zip_code}
                                            </p>
                                            <p className="text-sm text-gray-300">{addr.billing_address}</p>
                                            {showToolbox === addr.id && (
                                                <div className="mt-2">
                                                    <button
                                                        onClick={() => deleteAdd(addr.id)}
                                                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}

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

                    {activeTab === "orderDetail" &&
                        <div className="p-6 border border-white text-white bg-transparent rounded-lg">


                            {/* Order Number */}
                            <div className="text-center my-6">
                                <h2 className="text-2xl font-bold">
                                    Order Number: #{orderDetaldata?.order_number || ""}
                                </h2>
                            </div>

                            {/* Status & Payment Info */}
                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div>
                                    <p>
                                        Status:{" "}
                                        <span className="font-semibold">
                                            {orderDetaldata?.order_status || "N/A"}
                                        </span>
                                    </p>
                                    <p>Payment Method: {orderDetaldata?.payment_method || "N/A"}</p>
                                    <p>Payment Status: {orderDetaldata?.payment_status || "N/A"}</p>
                                    <p>Transaction ID: {orderDetaldata?.transaction_id || "N/A"}</p>
                                </div>
                                <div className="text-right">
                                    <p>
                                        Date:{" "}
                                        {orderDetaldata?.payment_date
                                            ? new Date(orderDetaldata.payment_date).toLocaleString()
                                            : "N/A"}
                                    </p>
                                    <p>
                                        Updated:{" "}
                                        {orderDetaldata?.updated_at
                                            ? new Date(orderDetaldata.updated_at).toLocaleString()
                                            : "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Addresses */}
                            <div className="grid grid-cols-2 gap-8 mb-6 text-sm">
                                {/* Shipping */}
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Shipping Address</h3>
                                    <p>First Name: {orderAddress?.shipping_first_name || ""}</p>
                                    <p>Last Name: {orderAddress?.shipping_last_name || ""}</p>
                                    <p>Email: {orderAddress?.shipping_email || ""}</p>
                                    <p>Phone Number: {orderAddress?.shipping_phone_number || ""}</p>
                                    <p>Address: {orderAddress?.shipping_address || ""}</p>
                                    <p>Country: {orderAddress?.shipping_country || ""}</p>
                                    <p>State: {orderAddress?.shipping_state || ""}</p>
                                    <p>City: {orderAddress?.shipping_city || ""}</p>
                                    <p>Pincode: {orderAddress?.shipping_zip_code || ""}</p>
                                </div>

                                {/* Billing */}
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Billing Address</h3>
                                    <p>First Name: {orderAddress?.billing_first_name || ""}</p>
                                    <p>Last Name: {orderAddress?.billing_last_name || ""}</p>
                                    <p>Email: {orderAddress?.billing_email || ""}</p>
                                    <p>Phone Number: {orderAddress?.billing_phone_number || ""}</p>
                                    <p>Address: {orderAddress?.billing_address || ""}</p>
                                    <p>Country: {orderAddress?.billing_country || ""}</p>
                                    <p>State: {orderAddress?.billing_state || ""}</p>
                                    <p>City: {orderAddress?.billing_city || ""}</p>
                                    <p>Pincode: {orderAddress?.billing_zip_code || ""}</p>
                                </div>
                            </div>

                            {/* Products */}
                            <h3 className="font-semibold text-lg mb-3">Products</h3>
                            <table className="w-full border border-white text-sm">
                                <thead>
                                    <tr className="border-b border-white">
                                        <th className="p-2 text-left">Product</th>
                                        <th className="p-2">Unit Price</th>
                                        <th className="p-2">Quantity</th>
                                        <th className="p-2">GST</th>
                                        <th className="p-2">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItems?.map((item) => (
                                        <tr key={item.id} className="border-b border-white">
                                            <td className="flex items-center gap-2 p-2">{item.product_name}</td>
                                            <td className="p-2 text-center">{item.price}</td>
                                            <td className="p-2 text-center">{item.quantity}</td>
                                            <td className="p-2 text-center">0</td>
                                            <td className="p-2 text-center">{item.subtotal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Totals */}
                            <div className="mt-6 text-right space-y-1 text-sm">
                                <p>
                                    Subtotal <span className="ml-4 font-semibold">{orderDetaldata?.price_subtotal || 0}</span>
                                </p>
                                <p>
                                    GST <span className="ml-4 font-semibold">{orderDetaldata?.price_gst || 0}</span>
                                </p>
                                <p>
                                    Shipping <span className="ml-4 font-semibold">{orderDetaldata?.price_shipping || 0}</span>
                                </p>
                                <p>
                                    Coupon Discount <span className="ml-4 font-semibold">{orderDetaldata?.coupone_discount || 0}</span>
                                </p>
                                <p>
                                    Total Discount <span className="ml-4 font-semibold">{orderDetaldata?.discounted_price || 0}</span>
                                </p>
                                <p className="text-lg font-bold">
                                    Total <span className="ml-4">{orderDetaldata?.total_amount || 0}</span>
                                </p>
                            </div>
                        </div>

                    }

                </div>

            </div>
        </div>
    );
};

export default Dashboard;
