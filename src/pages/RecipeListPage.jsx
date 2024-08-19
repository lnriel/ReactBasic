import { useState } from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((hits) => {
    const labelMatch = hits.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const healthLabelsMatch = hits.recipe.healthLabels
      ? hits.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(searchField.toLowerCase())
        )
      : false;

    return labelMatch || healthLabelsMatch;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Box bg="yellow.100" minH="100vh" py={8}>
      <Center flexDirection="column">
        <Heading mb={6} color="orange.700" textTransform="uppercase">
          All Time Favorite Recipes
        </Heading>
        <Input
          variant="filled"
          placeholder="Start searching"
          bg="white"
          _hover={{ bg: "white" }}
          _focus={{ bg: "white" }}
          value={searchField}
          onChange={handleChange}
          mb={6}
          width="full"
          maxWidth="500px"
        />
        <Box width="full" maxWidth="1500px" px="5%">
          <RecipeList clickFn={clickFn} recipes={matchedRecipes} />
        </Box>
      </Center>
    </Box>
  );
};
