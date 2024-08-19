import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      p={4}
    >
      {recipes.map((hit) => (
        <RecipeCard
          key={hit.recipe.label}
          recipe={hit.recipe}
          clickFn={clickFn}
          m={2}
        />
      ))}
    </SimpleGrid>
  );
};
