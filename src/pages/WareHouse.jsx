import React from 'react';
import './WareHouse.css'; // Подключаем файл стилей для карточки

const WareHouse = () => {
  return (
    <div className="card">
      <img src="burger.jpg" alt="Burger" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Hamburger</h2>
        <ul className="ingredients-list">
          <li>Булочка для гамбургера</li>
          <li>Котлета</li>
          <li>Салат айсберг</li>
          <li>Томат</li>
          <li>Лук</li>
          <li>Соус</li>
        </ul>
      </div>
    </div>
  );
}

export default WareHouse;
