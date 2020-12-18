import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

// context
export const ContextCategories = createContext();

//Provider
const ProviderCategories = (props) => {
	// state del context
	const [categories, saveCategories] = useState([]);

	// apicall
	useEffect(() => {
		const apiCategory = async () => {
			const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
			const categories = await Axios(url);
			saveCategories(categories.data.drinks);
		}
		apiCategory();
	}, []);
	// return
	return (
		<ContextCategories.Provider
			value={{
				categories
			}}
		>
			{props.children}
		</ContextCategories.Provider>
	)
}

export default ProviderCategories;