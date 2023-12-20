import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import uuid from 'react-uuid';

function App() {

  const [mealPlans, setMealPlans] = useState(
  localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])
  
  const addMeal = () => {
    const newMeal = {
      title: "Меню дня ",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans]);
  }

  const deleteDay = (maelId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== maelId))
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div className='cont'>
    <div className="App">
      <div className="container">
            <h1>Блюда на неделю</h1>
            <button className="button-add" onClick={addMeal}>Добавить</button>
      </div>
      <MyMealsAndIngredients 
      selectedDay={getActiveMeal()}
      updateDay={updateDay}
      />
        <MyList
      mealPlans={mealPlans}
      addMeal={addMeal} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
    </div>
    </div>
  );
}

export default App;
