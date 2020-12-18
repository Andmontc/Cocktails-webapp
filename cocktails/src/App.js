import React from 'react';
import Header from './components/header';
import Form from './components/form';
import ProviderCategories from './context/contextcategories';
import RecipeProvider from './context/recipeContext';
import Recipe from './components/recipes';
import ModalProvider from './context/modalContext';

function App() {
  return (
    <ProviderCategories>
      <RecipeProvider>
        <ModalProvider>
         <Header />
           <div className="container mt-5">
            <div className="row">
             <Form />
            </div>
             <Recipe />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </ProviderCategories>
    
  );
}

export default App;
