import React, {useContext} from 'react';
import {RecipeContext} from '../context/recipeContext'
import Recipe from './recipe';

const Recipes = () => {
	// consume Api
	const {recipes} = useContext(RecipeContext)

	return ( 
		<div className="row mt-5">
			{recipes.map(recipe => (
				<Recipe
					key={recipe.idDrink}
					recipe={recipe}
				/>
			))}
		</div>
	 );
}
 
export default Recipes;