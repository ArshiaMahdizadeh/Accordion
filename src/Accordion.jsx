import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./shimmer.css"

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        } else {
            setLoading(true);
        }
    }, [isOpen]);

    return (
        <div className={`border p-4 my-2 rounded-md transition-all duration-300 ${isOpen ? 'border-blue-500' : 'border-gray-300'} ${isOpen ? 'rounded-b-none' : 'rounded-md'}`}>
            <div className={`flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'} p-3`} onClick={toggleAccordion}>
                <h3 className="font-semibold">{title}</h3>
                <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4">
                    {loading ? (
                        <div className="flex flex-wrap gap-4 justify-center">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="border p-4 rounded-md shadow-md my-2 h-72 w-64 bg-gray-200 relative overflow-hidden">
                                    <div className="h-32 w-full mb-2 bg-gray-300 rounded-t-md shimmer"></div>
                                    <div className="h-6 w-3/4 bg-gray-300 mb-2 shimmer"></div>
                                    <div className="h-4 w-1/2 bg-gray-300 shimmer"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        content
                    )}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
