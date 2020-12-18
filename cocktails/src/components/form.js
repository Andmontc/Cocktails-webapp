import React, {useContext, useState} from 'react';
import {ContextCategories} from '../context/contextcategories';
import {RecipeContext} from '../context/recipeContext';

const Form = () => {

	const [search, saveSearch] = useState({
		name:'',
		category:''
	})
	const {categories} = useContext(ContextCategories);
	const {searchRecipe, saveConsult } = useContext(RecipeContext);
	//reading the content
	const dataGet = e => {
		saveSearch({
			...search,
			[e.target.name] : e.target.value
		})
	}

	return ( 
		<form 
			className="col-12"
			onSubmit={e => {
				e.preventDefault();
				searchRecipe(search);
				saveConsult(true);
			}}>
			<fieldset className="text-center">
				<legend>Find a drink by category or ingredient</legend>
			</fieldset>
			<div className="row mt-4">
				<div className="col-md-4">
					<input
						name="name"
						className="form-control"
						type="text"
						placeholder="Search by ingredient"
						onChange = {dataGet}
						/>
				</div>
				<div className="col-md-4">
					<select
						className="form-control"
						name="category"
						onChange={dataGet}
					>
						<option value="">-- Select a Category --</option>
						{categories.map(category => (
							<option 
								key={category.strCategory}
								value={category.strCategory}
							>{category.strCategory}</option>
						))}
					</select>
				</div>
				<div className="col-md-4">
					<input
						type="submit"
						className="btn btn-block btn-primary"
						value="Search Cocktail"
					/>
				</div>
			</div>
		</form>
	 );
}
 
export default Form;
