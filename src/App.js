import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsOrigin from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodayFood from './components/TodayFood';
import TotalCal from './components/TotalCal';

function App() {
  const [foods, setFoods] = useState(foodsOrigin);
  const [searchedString, setSearchedString] = useState('');
  const [todaysFood, setTodaysFood] = useState('');

  const addFood = (food) => {
    console.log(food);
    const copy = [...foods, food];
    setFoods(copy);
  };

  let searchedFood = null;
  if (searchedString !== '') {
    searchedFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFood = foods;
  }

  const addToTodayFood = (food, quantity) => {
    const newFood = {
      name: food.name,
      image: food.image,
      calories: food.calories,
      quantity: quantity,
    };

    let copy = [... todaysFood, newFood]
    
    // desperate late evening attempt at grouping food items
    
    // const foodToUpdate = todaysFood.filter(food => food.name === newFood.name)
    // if (foodToUpdate) {

    // } else {
    //   copy = [...todaysFood, newFood];
    // }

    setTodaysFood(copy);
  };

  let totalCals = 0;
  if (todaysFood.length > 0) {
    totalCals = todaysFood.map(food => food.calories).reduce((acc, cv) => acc + cv, 0)
  }


  return (
    <div className="App" id="root">
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <AddFoodForm addFood={addFood} />
        <hr />
        <Search
          searchedString={searchedString}
          setSearchedString={setSearchedString}
        />
        <div className="columns">
          <div className="column">
            {searchedFood.map((food) => (
              <FoodBox
                key={food.name}
                food={food}
                className="box"
                addToTodayFood={addToTodayFood}
              />
            ))}
          </div>
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            {todaysFood.length > 0 &&
              todaysFood.map((food, i) => <TodayFood key={i} food={food}/>)}
          </ul>
          <TotalCal totalCals={totalCals} />
        </div>
      </div>
    </div>
  );
}

export default App;
