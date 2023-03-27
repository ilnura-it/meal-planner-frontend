import './App.css';
import MyMeals from './MyMeals';
import { useState, useEffect } from 'react';
import { getAllMeals, addMeals, editMeal, deleteMeal } from './FetchMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");


  useEffect(() => {
    getAllMeals(setMeal)
  }, []);

  const addToList = (e) => {
    setTitle(e.target.value)
  }

  const updatingInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div className="App">
      <h1>Meal Plan</h1>
      <form>
        <input
          type="text"
          placeholder="Add Meal"
          value={title}
          onChange={addToList}
        />
        <button 
          disabled={!title}
          onClick=
          {editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : () => addMeals(title, setTitle, setMeal)}>
          {editing ? "EDIT" : "ADD"}
        </button>
      </form>


      {myMeal.map((meal) =>
        <MyMeals text={meal.title} key={meal._id}
          updatingInput={() => updatingInput(meal._id, meal.title)}
          deleteMeal={() => deleteMeal(meal._id, setMeal)}
        />
      )}

    </div>
  );
}

export default App;
