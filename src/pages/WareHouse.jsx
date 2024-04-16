import React, { useState, useEffect } from 'react';

const WareHouse = () => {
  const [customIngredients, setCustomIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    description: '',
    price: '',
    quantity: 1
  });

  useEffect(() => {
    const storedIngredients = localStorage.getItem('customIngredients');
    if (storedIngredients) {
      setCustomIngredients(JSON.parse(storedIngredients));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('customIngredients', JSON.stringify(customIngredients));
  }, [customIngredients]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  const addIngredient = () => {
    if (newIngredient.name.trim() !== '') {
      setCustomIngredients([...customIngredients, newIngredient]);
      setNewIngredient({
        name: '',
        description: '',
        price: '',
        quantity: 1
      });
    }
  };

  const removeIngredient = (index) => {
    const newIngredients = [...customIngredients];
    newIngredients.splice(index, 1);
    setCustomIngredients(newIngredients);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {customIngredients.map((ingredient, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 text-gray-900">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ingredient.name}</div>
              <p className="text-gray-800 text-base">{ingredient.description}</p>
              <p className="text-gray-800 text-base">Цена: {ingredient.price}</p>
              <div className="flex items-center mt-4">
                <button
                  onClick={() => {
                    const updatedIngredients = [...customIngredients];
                    updatedIngredients[index].quantity -= 1;
                    setCustomIngredients(updatedIngredients);
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded-l"
                >
                  -
                </button>
                <span className="bg-gray-700 py-2 px-4">{ingredient.quantity}</span>
                <button
                  onClick={() => {
                    const updatedIngredients = [...customIngredients];
                    updatedIngredients[index].quantity += 1;
                    setCustomIngredients(updatedIngredients);
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeIngredient(index)}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-8 mx-auto bg-gray-200 text-gray-900">
        <div className="px-6 py-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addIngredient();
            }}
          >
            <input
              className="border rounded mb-2 px-4 py-2 w-full bg-gray-700 text-gray-200"
              type="text"
              name="name"
              value={newIngredient.name}
              onChange={handleInputChange}
              placeholder="Название ингредиента"
            />
            <input
              className="border rounded mb-2 px-4 py-2 w-full bg-gray-700 text-gray-200"
              type="text"
              name="description"
              value={newIngredient.description}
              onChange={handleInputChange}
              placeholder="Описание"
            />
            <input
              className="border rounded mb-2 px-4 py-2 w-full bg-gray-700 text-gray-200"
              type="text"
              name="price"
              value={newIngredient.price}
              onChange={handleInputChange}
              placeholder="Цена"
            />
            <div className="flex items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                type="submit"
              >
                Добавить
              </button>
              <div className="flex items-center">
                <button
                  onClick={() => setNewIngredient({ ...newIngredient, quantity: newIngredient.quantity - 1 })}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded-l"
                >
                  -
                </button>
                <span className="bg-gray-700 py-2 px-4">{newIngredient.quantity}</span>
                <button
                  onClick={() => setNewIngredient({ ...newIngredient, quantity: newIngredient.quantity + 1 })}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
