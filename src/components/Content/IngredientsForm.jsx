
function IngredientsForm({work=()=>{}}) {

  function handleSubmit(formData){
        const Ingredient=formData.get("Ingredient")
        if(Ingredient=="")
        {
            return
        }
        work(Ingredient)
  }

  return (
    <div>
        <form action={handleSubmit} className="flex gap-4">
            <input type="text" name="Ingredient" placeholder=" e.g. Cherry" className="p-2 rounded-lg w-[40vw] shadow-[0px_0px_55px_0px_#edf2f7] " />
            <input type="submit" value="Add Ingredients" className="bg-slate-600 text-rose-50 p-2 rounded-lg cursor-pointer"/>
        </form>
    </div>
  )
}

export default IngredientsForm