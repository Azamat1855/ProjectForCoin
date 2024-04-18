import React, { useState } from 'react';


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      category: "Pizza",
      image: "https://againstthegraingourmet.com/cdn/shop/products/Pepperoni_Pizza_Beauty_1000x1000.jpg?v=1658703726",
      ingredients: ["Pepperoni", "Tomato", "Cheese", "Dough"],
      price: "2000"
    },
    {
      id: 2,
      name: "Vegetarian Pizza",
      category: "Pizza",
      image: "https://imgmedia.lbb.in/media/2023/02/63e39a8dc9ae884e143db091_1675860621236.jpg",
      ingredients: ["Peppers", "Mushrooms", "Olives", "Cheese", "Dough"],
      price: "2000"
    },
    {
      id: 11,
      name: "Coca-cola",
      category: "Beverage",
      image: "https://s0.rbk.ru/v6_top_pics/media/img/4/92/347034914676924.jpeg",
      ingredients: ["Carbonate", "Sugar", "Caramel", "Phosphoric", "Flavors", "Caffeine"],
      price: "2000"
    },
  ];

  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-between items-center'>
        <div>
          <h1 className="text-3xl font-semibold  mb-8 text-left">Fast food</h1>
        </div>
        <div className="flex justify-center mb-4">
          <button className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setSelectedCategory(null)}>All</button>
          <button className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === 'Pizza' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setSelectedCategory('Pizza')}>Pizza</button>
          <button className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === 'Beverage' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setSelectedCategory('Beverage')}>Beverage</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src={product.image} alt={product.name} />
            <div className="py-4 px-6">
              <h2 className="text-gray-800 text-xl font-semibold mb-2">{product.name}</h2>
              <div className="flex flex-col items-start justify-between">

                <p className='mb-2'>Ingredents:</p>
                <ul className='flex flex-wrap gap-1'>
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="py-1 px-2 bg-slate-900 text-white rounded-2xl flex items-center justify-center gap-3 text-[0.55em] font-mono font-medium flex-1 max-w-[33%] max-h-[30px]">{ingredient}</li>
                  ))}
                </ul>

                <p>
                  <span>Price:</span>
                  <span>{product.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
