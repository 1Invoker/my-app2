import { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления товара в корзину
  function addToCart(item) {
    setCartItems(prevItems => [...prevItems, item]);
  }

  // Функция для удаления товара из корзины
  function removeFromCart(item) {
    setCartItems(prevItems => prevItems.filter(prevItem => prevItem.id !== item.id));
  }

  // Функция для подсчета общей стоимости товаров в корзине
  function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price} руб.</p>
                  <button onClick={() => removeFromCart(item)}>Удалить</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Общая стоимость: {calculateTotalPrice()} руб.</p>
        </>
      )}
    </div>
  );
}

export default Cart;
