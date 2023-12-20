const MyList = ({mealPlans, deleteDay, selectedDay, setSelectedDay}) => {
    return <div>
            {mealPlans.map(({id, title, mealForADay}) => (
                <div className={`meal ${id === selectedDay ? "selected" : "default"}`}
                onClick={() => setSelectedDay(id)}
                >
                    <p className="field">{title}</p>
                    <p className="field">{mealForADay.substring(0, 60)}</p>
                    <button className="button-delete" onClick={() => deleteDay(id)}>Удалить день</button>
                </div>
            ))}
    </div>
}

export default MyList;