import React from 'react';

const TodayFood = ({ food }) => {
  return (
    <>
      <li>
        {food.quantity} {food.name} = {food.calories * food.quantity}cal
      </li>
    </>
  );
};

export default TodayFood;
