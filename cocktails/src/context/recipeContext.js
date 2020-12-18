import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecipeContext = createContext();


const RecipeProvider = (props) => {

	const [recipes, saveRecipe] = useState([]);
	const [recipe, searchRecipe] = useState({
		name: '',
		category:''
	});
	const [consult, saveConsult] = useState(false);

	const {name, category} = recipe;
	useEffect(() => {
		if (consult) {
			const getRecipe = async () =>{
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
				const answer = await Axios(url);
				saveRecipe(answer.data.drinks);
			}
			getRecipe();
		}
	}, [recipe]);

	return (
		<RecipeContext.Provider
			value={{
				searchRecipe,
				saveConsult,
				recipes
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
}

export default RecipeProvider