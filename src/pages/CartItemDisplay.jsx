import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const CartItemDisplay = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const token = localStorage.getItem("black5authtoken");

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/get-cart-items`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setCartItems(response.data.data.items);
                setTotalPrice(response.data.data.total_amount);
                console.log(response.data);

            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    const removecartitems = async (itemId) => {
        try {
            const token = localStorage.getItem("black5authtoken");
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/remove-from-cart`,
                { cart_id: itemId },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = response.data;

            if (data.success) {
                alert("Cart item removed successfully");
                setCartItems((prev) => prev.filter((item) => item.cart_id !== itemId));
                setTotalPrice(data.data?.total_amount || 0);
            } else {
                alert(data.message || "Failed to remove item");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };


    return (
        <div className="container mx-auto px-6 py-10 min-h-screen">

           {(!cartItems || cartItems.length === 0)? (
                <div className="text-white h-full w-full flex justify-center items-center">Your cart is empty.</div>
            ) : (
                <>
                    {/* Header Row (Hidden on small screens) */}
                    <div className="grid grid-cols-6 items-center mb-4 text-lg font-semibold text-gray-700">
                        <p className="text-white text-center">Product</p>
                        <p className="text-white text-center">Title</p>
                        <p className="text-white text-center">Price</p>
                        <p className="text-white text-center">Quantity</p>
                        <p className="text-white text-center">Total</p>
                        <p className="text-white text-center">Remove</p>
                    </div>

                    <hr className="border-gray-600 mb-4" />

                    {/* Cart Items */}
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.cart_id}
                                className="grid grid-cols-6 items-center gap-4 border-b border-gray-600 pb-4"
                                style={{ justifyItems: "center" }}
                            >
                                {/* Product Image */}
                                <img
                                    src={item.product_image}
                                    alt={item.product_name}
                                    className="w-24 h-24 object-contain rounded-lg mx-auto md:mx-0"
                                />

                                {/* Product Info */}
                                <div className="text-center md:text-left">
                                    <h2 className="text-base md:text-lg font-semibold text-white">
                                        {item.product_name}
                                    </h2>
                                    {item.variation_name && (
                                        <p className="text-gray-300 text-sm">{item.variation_name}</p>
                                    )}
                                </div>

                                {/* Price */}
                                <p className="text-white text-center md:text-left">₹ {item.price}</p>

                                {/* Quantity */}
                                <p className="text-white text-sm text-center md:text-left">
                                    {item.quantity}
                                </p>

                                {/* Subtotal */}
                                <div className="font-bold text-white text-center md:text-left">
                                    ₹ {item.subtotal}
                                </div>

                                {/* Remove Icon */}
                                <button onClick={() => removecartitems(item.cart_id)} className="flex justify-center md:justify-start">
                                    <MdOutlineRemoveShoppingCart
                                        size={28}
                                        // onClick={() => removeFromCart(item.cart_id)}
                                        className="cursor-pointer text-red-500 hover:text-red-600 transition"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Checkout Box */}
                    <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-lg md:text-xl font-semibold text-white">
                            Total:{" "}
                            <span className="text-green-500 font-bold">₹ {totalPrice}</span>
                        </div>
                        <Link to={"/checkout"} className=" text-white  py-3  font-semibold transition w-full md:w-auto cursor-pointer border-b-2 border-white">
                            Proceed to Checkout
                        </Link>
                    </div>
                </>

            )}
        </div>
    );
};

export default CartItemDisplay;
