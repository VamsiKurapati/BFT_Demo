import  React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Pages = [
    {
        Number: 1,
        Content:
            <div className='flex flex-col items-center'>
                <h1 className='font-titan font-weight-400 text-[36px] text-[#000000E5] text-center mb-4'>Blind Fold Trip Questionnaire</h1>
                
                <p className='font-poppins font-weight-400 text-[24px] text-[#000000BF] text-center mb-4'><span className="font-weight-700 text-[#0000000]">Welcome, explorer.</span> What you share here unlocks the journey meant just for you. Soon, the details will find their way to you.</p>
                
                <p className='font-poppins font-weight-400 text-[24px] text-[#000000BF] text-center mb-4'>Unlock the first step to the unknown. <span className="text-[#000000]">Fill in the details, receive your surprise proposal — all for free.</span> What happens next is up to you.</p>
                
                <button className='bg-[#A11616E5] text-[#FCD2B1] border border-1 border-[#FCD2B1] font-poppins font-weight-700 text-[20px] py-2 px-4 rounded-xl mt-4' onClick={() => navigate("/questionnaire/1")}>Know your destination</button>
            </div>
    },
    {
        question: "What is your favorite animal?",
        options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
        question: "What is your favorite food?",
        options: ["Pizza", "Burger", "Pasta", "Salad"],
    },
];

export default function Questionnaire() {
    return (
        <h1 className="text-center text-2xl font-bold mt-10">
            Questionnaire
        </h1>
        
    );
}