import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black px-6 py-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center max-[1020px]:flex-col gap-y-8">

                {/* Email Subscription */}
                <div className="w-auto max-[1020px]:w-full max-w-xl flex flex-col items-center">
                    <h2 className="font-bold text-lg mb-4">Subscribe to our email alerts!</h2>
                    <div className="flex items-center bg-gray-200 rounded-md overflow-hidden w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-2 bg-transparent outline-none text-sm"
                        />
                        <button className="bg-gray-300 p-2">
                            <IoIosArrowForward className="text-black text-xl" />
                        </button>
                    </div>
                </div>
                <div className="flex items-start justify-between w-[70%] max-[750px]:flex-col max-[750px]:items-center gap-y-8 ">
                    {/* Shop */}
                    <div className="flex flex-col max-[750px]:items-center">
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm flex flex-col max-[750px]:items-center">
                            <Link className="text-lg hover:underline w-fit" to={"/contact-us"}>Contact Us</Link>
                            <Link className="text-lg hover:underline w-fit" to={"/terms-and-conditions"}>Terms and Conditions</Link>
                            <Link className="text-lg hover:underline w-fit" to={"/privacy-policy"}>Privacy Policy</Link>
                            <Link className="text-lg hover:underline w-fit" to={"/refund-and-cancellation-policy"}>Refund and Cancellation Policy</Link>
                            <Link className="text-lg hover:underline w-fit" to={"/shipping-and-delivery-policy"}>Shipping and Delivery Policy</Link>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="flex flex-col max-[750px]:items-center">
                        <h3 className="font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm flex flex-col max-[750px]:items-center">
                            <Link className="text-lg hover:underline w-fit" to={"/phonecase"}>Phone Case</Link>
                            <Link className="text-lg hover:underline w-fit" to={"/wallart"}>Wall Art</Link>
                           
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col max-[750px]:items-center">
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm flex flex-col max-[750px]:items-center">
                            <li className="text-lg hover:underline w-fit">About boAt</li>
                            <li className="text-lg hover:underline w-fit">News</li>
                            <li className="text-lg hover:underline w-fit">Read Our Blog</li>
                            <li className="text-lg hover:underline w-fit">Careers</li>
                            <li className="text-lg hover:underline w-fit">Investor Relations</li>
                            <li className="text-lg hover:underline w-fit">Social Responsibility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
