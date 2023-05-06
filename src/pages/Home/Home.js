import React from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import RabbitsList from "../../components/RabbitsList/RabbitsList";
import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import RabbitType from "../../components/RabbitPage/RabbitPage";
const rabbits = [
  {
    name: 'Кролик 1',
    breed: 'Кролик породы 1',
    price: 1000,
    description: 'Описание кролика 1',
    imageUrl: 'https://example.com/rabbit1.jpg',
  },
  {
    name: 'Кролик 2',
    breed: 'Кролик породы 2',
    price: 2000,
    description: 'Описание кролика 2',
    imageUrl: 'https://example.com/rabbit2.jpg',
  },
  {
    name: 'Кролик 3',
    breed: 'Кролик породы 3',
    price: 1500,
    description: 'Описание кролика 3',
    imageUrl: 'https://example.com/rabbit3.jpg',
  },
];

function Home() {
  return (
    <div className="Home">
      <h1>Добро пожаловать на наш сайт!</h1>
      <p>
        Мы занимаемся продажей кроликов и изделий из кролика. На нашем сайте вы
        можете найти как домашних кроликов, так и породистых, а также множество
        продуктов, приготовленных из кроличьего мяса.
      </p>

      <h2>Новые поступления:</h2>
      <div>
        <h1>Главная страница</h1>
        <Cart />
        <Product name="Товар 1" price={100} />
        <Product name="Товар 2" price={200} />
        <Product name="Товар 3" price={300} />
      </div>

      <h2>Кролики:</h2>
      <div className="RabbitsList">
        {rabbits.map((rabbit) => (
          <RabbitType
            key={rabbit.name}
            name={rabbit.name}
            breed={rabbit.breed}
            price={rabbit.price}
            description={rabbit.description}
            imageUrl={rabbit.imageUrl}
          />
        ))}
      </div>

      <ProductsList />
    </div>
  );
}

export default Home;
