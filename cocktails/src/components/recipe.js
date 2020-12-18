import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/modalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		overflow: 'scroll',
		height: '100%',
		maxHeight: 500,
		display: 'block'
		},
		header: {
		padding: '12px 0',
		borderBottom: '1px solid darkgrey'
		},
		content: {
		padding: "12px 0",
		overflow: 'scroll'
		}
}));


const Recipe = ({recipe}) => {

	//matrialui modal
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	}

	//context values
	const {infodata,saveId, saveRecipe} = useContext(ModalContext);
	// ingredients
	const showIngredients = infodata => {
		let ingredients = [];
		for (let i = 1; i<16; i++){
			if(infodata[`strIngredient${i}`]){
				ingredients.push(
					<li>{infodata[`strIngredient${i}`]} {infodata[`strMeasure${i}`]}</li>
				)
			}
		}

		return ingredients;		
	}
	return ( 
		<div className="col-md-4 mb-3">
			<div className="card">
				<h2 className="card-header">{recipe.strDrink}</h2>
				<img className="card-img-top" src={recipe.strDrinkThumb} alt={`${recipe.strDrink} thumbnail`} />
				<div className="card-body">
					<button
						type="button"
						className="btn btn-block btn-primary"
						onClick={() => {
							saveId(recipe.idDrink);
							handleOpen();
						}}
					> See Recipe </button>
					<Modal
						open={open}
						onClose={() => {
							saveId(null);
							saveRecipe({});
							handleClose();
						}}
					>
						<div style={modalStyle} className={classes.paper}>
							<h2> {infodata.strDrink} </h2>
							<h3 className="mt-4"> Instructions </h3>
							<p> {infodata.strInstructions}</p>
							<img className="img-fluid my-4" src={infodata.strDrinkThumb} alt="drink thumbnail"/>
							<h3>Ingredients and Quantities</h3>
							<ul>
								{showIngredients(infodata)}
							</ul>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	 );
}
 
export default Recipe;