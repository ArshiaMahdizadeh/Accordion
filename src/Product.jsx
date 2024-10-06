import React from 'react';

const Product = ({ title, description, image, price }) => {
    return (
        <div className="border p-4 rounded-md shadow-md my-2 h-72 w-64">
            <img
                src={image}
                alt={title}
                className="h-32 w-full object-cover rounded-t-md mb-2"
            />
            <h4 className="text-lg font-semibold">{title}</h4>
            <h4 className="text-lg font-semibold">{price}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default Product;
