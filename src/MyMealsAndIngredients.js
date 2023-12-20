const MyMealsAndIngredients = ({selectedDay, updateDay}) => {
    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if (!selectedDay) return <p className="if">Нажми добавить, затем на появившийся блок меню дня</p>

    return <div>
            <input
            type="text"
            className="myInput"
            placeholder="День недели....."
            id="title"
            value={selectedDay.title}
            onChange={(e) => editMyMeal("title", e.target.value)}
            />
            <textarea 
            placeholder="Напишите название блюда"
            id="mealForADay"
            value={selectedDay.mealForADay}
            onChange={(e) => editMyMeal("mealForADay", e.target.value)}
            />
            <textarea 
            placeholder="Напишите ингридиенты для блюда"
            id="mealForADay"
            value={selectedDay.ingredients}
            onChange={(e) => editMyMeal("ingredients", e.target.value)}
            />
    </div>
}

export default MyMealsAndIngredients;
