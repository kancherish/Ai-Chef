import IngredientsForm from "./IngredientsForm"
import IngredientsList from "./IngredientsList"
import GetRecipe from "./GetRecipe"
import { useState } from "react"

function Content() {

  const [ingredients, setIngredients] = useState([])

  return (
    <main className="flex flex-col justify-start- items-center min-h-[100%] p-12 gap-12">
      <IngredientsForm work={(Ingredient)=>{setIngredients((prevValue)=> [Ingredient, ...prevValue])}}/>
      <IngredientsList ingredients={ingredients}/>
      <GetRecipe ingredients={ingredients}/>
    </main>
  )
}

export default Content