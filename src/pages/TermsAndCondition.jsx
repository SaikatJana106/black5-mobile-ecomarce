import React, { useEffect, useState } from 'react';
import axios from "axios";
import parse from "html-react-parser";

const TermsAndCondition = () => {
  const [tcdata, setTcdata] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/pages/terms-and-conditions`
        );
        setTcdata(res.data.data);
      } catch (err) {
        console.error("Error fetching terms and conditions:", err);
      }
    };
    fetchTerms();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center text-white">
        Terms and Conditions
      </h1>

      {tcdata ? (
        <div className="text-white">
          {parse(tcdata.description || "")}
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default TermsAndCondition;
