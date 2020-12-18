import React, {createContext,useEffect,useState} from 'react';
import Axios from 'axios';


//context
export const ModalContext = createContext();

//Provider
const ModalProvider = (props) => {
	//provider state
	const [idrecipe, saveId] = useState(null);
	const [infodata, saveRecipe] = useState({});

	//apicall
	useEffect(() => {
		const getRecipe = async () => {
			if (!idrecipe) return;
			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
			const answer = await Axios(url);
			saveRecipe(answer.data.drinks[0]);
		}
		getRecipe();
	}, [idrecipe]);

	return(
		<ModalContext.Provider
			value={{
				infodata,
				saveId,
				saveRecipe
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
}

export default ModalProvider;