
function IngredientsList({ ingredients=[] }) {
    return (
        <div className="w-[50vw]">
            <h1 className="text-5xl font-medium">
                Ingredients You Have:
            </h1>
            <ul className="p-4 text-xl">
                {
                    ingredients.length == 0 ?
                        (<h1>
                            Add Ingredients To See Here
                        </h1>) :
                        (
                            ingredients.map((item,index) => {
                                return (

                                    <li key={index} className="list-disc">
                                        {item}
                                    </li>
                                )
                            })
                        )
                }
            </ul>
        </div>
    )
}

export default IngredientsList