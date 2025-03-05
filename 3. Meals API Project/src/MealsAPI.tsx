import {useState, useEffect} from 'react';
/* import "index.css"; */

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

function MealsAPI () {
    const [items, setItems] = useState<Meal[]>([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
        .then((res) => res.json()
        .then((data) => {/* console.log(data); */
        
            setItems(data.meals)})
            .catch((err) => {console.log(err)}))
    }, []);

    const itemsList = items.map(({ strMeal, idMeal, strMealThumb }) => {
        return (
            <section key={idMeal} className='card'>
                <img src={strMealThumb} />
                <section className='content'>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )})

    return (
        <div className='items-container'>{itemsList}</div>
    )
}

export default MealsAPI;