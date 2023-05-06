import React from 'react';
import Rabbit from './RabbitPage';


function RabbitCards() {
  const rabbits = [
    {
      name: 'Кролик 1',
      image: 'rabbit1.jpg',
      description: 'Описание кролика 1'
    },
    {
      name: 'Кролик 2',
      image: 'rabbit2.jpg',
      description: 'Описание кролика 2'
    },
    {
      name: 'Кролик 3',
      image: 'rabbit3.jpg',
      description: 'Описание кролика 3'
    },
    {
      name: 'Кролик 4',
      image: 'rabbit4.jpg',
      description: 'Описание кролика 4'
    },
    {
      name: 'Кролик 5',
      image: 'rabbit5.jpg',
      description: 'Описание кролика 5'
    },
    {
      name: 'Кролик 6',
      image: 'rabbit6.jpg',
      description: 'Описание кролика 6'
    },
    {
      name: 'Кролик 7',
      image: 'rabbit7.jpg',
      description: 'Описание кролика 7'
    },
    {
      name: 'Кролик 8',
      image: 'rabbit8.jpg',
      description: 'Описание кролика 8'
    }
  ];

  return (
    <div className="rabbit-cards">
      {rabbits.map(rabbit => (
        <div key={rabbit.name} className="rabbit-card">
          <Rabbit name={rabbit.name} image={rabbit.image} description={rabbit.description} />
        </div>
      ))}
    </div>
  );
}

export default RabbitCards;