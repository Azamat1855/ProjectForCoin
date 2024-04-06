import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WareHouse = () => {
  const [customIngredients, setCustomIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setCustomIngredients([...customIngredients, ingredient]);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...customIngredients];
    newIngredients.splice(index, 1);
    setCustomIngredients(newIngredients);
  };

  useEffect(() => {
    async function fetchWarehouseData() {
      try {
        const response = await axios.get('http://localhost:3001/warehouse');
        const warehouseData = response.data;
        // Допустим, в вашем warehouseData содержится массив объектов с полем name
        const ingredients = warehouseData.map(item => item.name);
        setCustomIngredients(ingredients);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }

    fetchWarehouseData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {/* Добавляем карточки */}

      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ваши ингредиенты</div>
          <ul className="list-disc list-inside">
            {customIngredients.map((ingredient, index) => (
              <li key={index} className="flex justify-between">
                <span>{ingredient}</span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <form
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.elements.ingredient;
              if (input.value.trim() !== '') {
                addIngredient(input.value.trim());
                input.value = '';
              }
            }}
          >
            <input
              className="border rounded px-4 py-2 mr-2"
              type="text"
              name="ingredient"
              placeholder="Добавить ингредиент"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
