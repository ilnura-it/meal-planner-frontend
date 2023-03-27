import axios from 'axios';

const getAllMeals = (setMeals) => {
   axios.get("https://meal-planner-knxe.onrender.com")
      .then(({ data }) => {
         //console.log(data)
         setMeals(data);
      })
}

const addMeals = (title, setTitle, setMeals) => {
   axios.post("https://meal-planner-knxe.onrender.com/saveMeals", { title })
      .then((data) => {
         console.log(data)
         setTitle("");
         getAllMeals(setMeals)
      })
}


const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
   axios.put("https://meal-planner-knxe.onrender.com/editMeal", { _id: mealId, title })
      .then((data) => {
         console.log(data)
         setTitle("")
         setEditing(false)
         getAllMeals(setMeal)
      })
}

const deleteMeal = (_id, setMeal) => {
   axios.post(`https://meal-planner-knxe.onrender.com/deleteMeal`, { _id })
      .then((data) => {
         console.log(data)
         getAllMeals(setMeal)
      })
}

export { getAllMeals, addMeals, editMeal, deleteMeal }