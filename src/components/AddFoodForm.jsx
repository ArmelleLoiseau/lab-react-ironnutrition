import React, { useState } from 'react';

const AddFoodBtn = ({ addFood }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const food = { name, calories, image, quantity:0 };
    console.log(food);
    addFood(food);
    setIsClicked(!isClicked);
    setName('');
    setCalories('');
    setImage('');
  };

  return (
    <div>
      {!isClicked && (
        <button onClick={() => setIsClicked(!isClicked)}>
          Add a new food Item
        </button>
      )}
      {/* add a possibility to escape the form */}
      {isClicked && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="calories">Number of calories</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddFoodBtn;
