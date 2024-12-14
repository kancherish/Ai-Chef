import { useState } from "react"
import getRecipe from "../../util/ai"
import Markdown from "react-markdown"
import loading from "/loadin.gif"

function GetRecipe({ ingredients = [] }) {

    const [isLoading, setIsLoading] = useState(false)
    const [recipe, setRecipe] = useState("")

    async function handleClick() {
        if (ingredients.length <= 3) {
            window.alert("please enter more than three ingredients to continue")
            return
        }
        setIsLoading(true)
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }, 200)

        try {
            let response = await getRecipe(ingredients.toString())
            setRecipe(response)
        } catch (error) {
            window.alert(error)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <div className="flex flex-col items-center w-screen">
            <div>
                Ready To create Recipe? <button className="p-1 mx-2 rounded-lg text-white bg-red-300" onClick={handleClick}>{isLoading ? "please wait" : "Get Recipe!"}</button>
            </div>
            <div className="my-5 p-3 max-w-[80%]">
                {!recipe ? ("") : (
                    <>
                        <h1 className="text-4xl font-bold">
                            Our Ai Chef Suggests
                        </h1>
                        <Markdown>
                            {recipe}
                        </Markdown>
                    </>

                )}
                {isLoading ? (<div className="w-[50vw] flex flex-col items-center">
                    <img src={loading} alt="" />
                    <p>please wait while our ai chef creates a recipe</p>
                </div>) : ("")}
            </div>
        </div>
    )
}

export default GetRecipe
