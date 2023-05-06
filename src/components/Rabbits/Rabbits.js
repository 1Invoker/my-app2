import React from 'react';

function Rabbit(props) {
  return (
    <div className="rabbit">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>{props.description}</p>
    </div>
  );
}

export default Rabbit;