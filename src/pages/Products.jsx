import React, { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      category: "Pizza",
      image: "https://againstthegraingourmet.com/cdn/shop/products/Pepperoni_Pizza_Beauty_1000x1000.jpg?v=1658703726",
      ingredients: ["Pepperoni", "Tomato Sauce", "Cheese", "Dough"],
      price: "2000"
    },
    {
      id: 2,
      name: "Vegetarian Pizza",
      category: "Pizza",
      image: "https://imgmedia.lbb.in/media/2023/02/63e39a8dc9ae884e143db091_1675860621236.jpg",
      ingredients: ["Bell Peppers", "Mushrooms", "Olives", "Cheese", "Dough"],
      price: "2000"
    },
    {
      id: 3,
      name: "Coca-cola",
      category: "Beverage",
      image: "https://s0.rbk.ru/v6_top_pics/media/img/4/92/347034914676924.jpeg",
      ingredients: ["Carbonated Water", "Sugar", "Caramel Color", "Phosphoric Acid", "Natural Flavors"],
      price: "2000"
    },
    {
      id: 4,
      name: "Cheeseburger",
      category: "Hamburger",
      image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Pickles", "Onions", "Ketchup", "Mustard", "Bun"],
      price: "1500"
    },
    {
      id: 5,
      name: "Veggie Burger",
      category: "Hamburger",
      image: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
      ingredients: ["Veggie Patty", "Lettuce", "Tomato", "Pickles", "Onions", "Ketchup", "Mustard", "Bun"],
      price: "1200"
    }
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold  mb-8 text-left">Fast food</h1>
        </div>
        <div className="flex justify-center mb-4">
          <button
            className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === "Pizza"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setSelectedCategory("Pizza")}
          >
            Pizza
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === "Beverage"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setSelectedCategory("Beverage")}
          >
            Beverage
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-lg ${selectedCategory === "Hamburger"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setSelectedCategory("Hamburger")}
          >
            Hamburger
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={product.image}
              alt={product.name}
            />
            <div>
              <div className="py-4 px-6">
                <h2 className="text-gray-800 text-xl font-semibold mb-2">{product.name}</h2>
               <marquee c behavior="" direction="">
               <div className="flex flex-wrap justify-center" style={{ overflowX: "auto" }}>
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-gray-200 rounded-full flex px-3 py-1 m-1">
                      <span className="text-gray-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
               </marquee>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700">
                <span>Price:</span>
                <span className="font-semibold ml-1">{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Menu;
