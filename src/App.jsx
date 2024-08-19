import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <div className="App">
      {userRecipe ? (
        <RecipePage recipe={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <>
          <RecipeListPage clickFn={setUserRecipe} />
        </>
      )}
    </div>
  );
};
