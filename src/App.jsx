import React from 'react';
import Accordion from './Accordion';
import Product from './Product';

function App() {
  const productData = [
    { title: 'Product 1', description: 'This is the description for product 1', image: 'https://via.placeholder.com/150', price: '19.88' },
    { title: 'Product 2', description: 'This is the description for product 2', image: 'https://via.placeholder.com/150', price: '29.88' },
    { title: 'Product 3', description: 'This is the description for product 3', image: 'https://via.placeholder.com/150', price: '39.88' },
    { title: 'Product 4', description: 'This is the description for product 4', image: 'https://via.placeholder.com/150', price: '49.88' },
  ];

  return (
    <div className="container mx-auto p-4">
      <Accordion
        title="Accordion Title"
        content={
          <div className="flex flex-wrap gap-4 justify-center">
            {productData.map((product, index) => (
              <Product
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        }
      />
    </div>
  );
}

export default App;
