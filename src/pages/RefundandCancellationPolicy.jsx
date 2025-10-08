import React, { useEffect, useState } from 'react';
import axios from "axios";
import parse from "html-react-parser";
const RefundandCancellationPolicy = () => {
  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchTerms = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/pages/privacy-policy`
                );
                setData(res.data.data);
            } catch (err) {
                console.error("Error fetching terms and conditions:", err);
            }
        };
        fetchTerms();
    }, []);
    return (
        <div className="p-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-3xl font-semibold mb-4 text-center text-white">
                Refund and Cancellation Policy
            </h1>

            {data ? (
                <div className="text-white">
                    {parse(data.description || "")}
                </div>
            ) : (
                <p className="text-white">Loading...</p>
            )}
        </div>
    )
}

export default RefundandCancellationPolicy
