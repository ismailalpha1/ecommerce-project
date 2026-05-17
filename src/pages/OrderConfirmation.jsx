import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12">
        <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto 
        text-center mt-12 border-green-700 text-white"></div>
      </div>
    </>
  );
};

export default OrderConfirmation;
