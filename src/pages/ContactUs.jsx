import React, { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const response = await fetch(
                "https://black5creations.orbitalwebworks.com/api/contact-us",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":
                            "Bearer ${process.env.API_TOKEN}",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                
                    const errorData = await response.json();
                    console.error("Validation errors:", errorData);
                    setErrors(errorData.data?.errors || {});
                    alert("Insert Correct Data");
               
                return;
            }

            const result = await response.json();
            console.log(" Success:", result);
            alert(result.message || " Message sent successfully!");

            // reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(" Error sending message:", error);
            alert("Failed to send message");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex min-h-screen justify-between items-center w-[90%] max-w-[1400px] max-[850px]:flex-col gap-2 mx-auto">
            {/* Left Section - Form */}
            <div className=" text-white flex flex-col justify-center items-center w-[48%] max-[850px]:w-full ">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-lg border-b border-gray-400 pb-1">
                    We'd love to hear from you
                </p>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="mt-6 w-full max-w-96 space-y-3">
                    <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                        <span className="material-icons">person</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-transparent ml-2 outline-none flex-grow"
                        />
                    </div>

                    <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                        <span className="material-icons">email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent ml-2 outline-none flex-grow"
                            required
                        />
                    </div>

                    <div>
                        <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                            <span className="material-icons">phone</span>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-transparent ml-2 outline-none flex-grow"
                                required
                            />
                        </div>
                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone[0]}</p>}
                    </div>


                    {/* Subject */}
                    <div>
                        <div className="flex items-center border border-gray-400 rounded-full px-3 py-2">
                            <span className="material-icons">subject</span>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="bg-transparent ml-2 outline-none flex-grow"
                                required
                            />
                        </div>
                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject[0]}</p>}
                    </div>


                    <div>
                        <div className="flex items-start border border-gray-400 rounded-2xl px-3 py-2">
                            <span className="material-icons">message</span>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-transparent ml-2 outline-none flex-grow"
                                required
                            />
                        </div>
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message[0]}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 bg-white text-black px-6 py-2 rounded-full w-full"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>


            </div>

            {/* Right Section - Image */}
            <div className="w-[48%] max-[850px]:w-full max-h-[600px]">
                <img
                    src="/home/biggirl.png"
                    alt="Contact"
                    className="w-full h-full max-h-[600px] object-contain object-center"
                />
            </div>
        </div>
    );
}   