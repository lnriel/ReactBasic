import {
  Box,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Badge,
  Center,
  Button,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe }) => {
  const renderHealthLabels = () => {
    return recipe.healthLabels.map((healthLabel, index) => (
      <Badge key={index} colorScheme="green" mb={1}>
        {healthLabel}
      </Badge>
    ));
  };

  const renderDiet = () => {
    return recipe.dietLabels.map((diet, index) => (
      <Badge key={index} colorScheme="blue" mb={1}>
        {diet}
      </Badge>
    ));
  };

  const renderCautions = () => {
    return recipe.cautions.map((caution, index) => (
      <Badge key={index} colorScheme="red" mb={1}>
        {caution}
      </Badge>
    ));
  };

  const renderIngredients = () => {
    return recipe.ingredientLines.map((ingredient, index) => (
      <Text key={index} mb={1}>
        {ingredient}
      </Text>
    ));
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <Box backgroundColor="yellow.100" minHeight="100vh" p={4}>
      <Center flexDirection="column">
        <Box
          width="full"
          maxWidth="1200px"
          px="5%"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          backgroundColor="white"
        >
          <Button
            size="md"
            onClick={handleGoBack}
            colorScheme="orange"
            leftIcon={<ArrowBackIcon />}
            variant="solid"
            pl={6}
            mb={4}
          ></Button>
          <Image
            src={recipe.image}
            alt={recipe.label}
            borderTopRadius="lg"
            objectFit="cover"
            w="100%"
            h="500px"
          />
          <Box p={4}>
            <VStack align="center" spacing={4} mb={4}>
              <Heading size="lg" mt={2} textAlign="center">
                {recipe.label}
              </Heading>
              <Text
                color="gray.500"
                fontSize="md"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                textAlign="center"
              >
                {recipe.mealType} &bull; {recipe.dishType}
              </Text>
            </VStack>

            <HStack
              spacing={4}
              align="start"
              flexWrap="wrap"
              flexDirection={["column", "column", "row"]}
            >
              <VStack align="start" spacing={4} flex="1">
                <Text>
                  Total cooking time: <b>{recipe.totalTime} Minutes</b>
                </Text>
                <Text>
                  Servings: <b>{recipe.yield}</b>
                </Text>
                <Text fontWeight="bold">Ingredients:</Text>
                <VStack align="start">{renderIngredients()}</VStack>
              </VStack>

              <VStack align="start" spacing={4} flex="1">
                <Text fontWeight="bold">Health Labels:</Text>
                <HStack wrap="wrap">{renderHealthLabels()}</HStack>
                <Text fontWeight="bold">Diet:</Text>
                <HStack wrap="wrap">{renderDiet()}</HStack>
                <Text fontWeight="bold">Cautions:</Text>
                <HStack wrap="wrap">{renderCautions()}</HStack>
                <Text fontWeight="bold">Nutrients:</Text>
                <SimpleGrid columns={[1, 2, 4]} spacing={6} width="100%">
                  <Box
                    color="gray.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    textAlign="center"
                    p={2}
                  >
                    {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                    <Divider />
                    Calories
                  </Box>
                  <Box
                    color="gray.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    textAlign="center"
                    p={2}
                  >
                    {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
                    {recipe.totalNutrients.FAT.unit} <Divider />
                    {recipe.totalNutrients.FAT.label}
                  </Box>
                  <Box
                    color="gray.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    textAlign="center"
                    p={2}
                  >
                    {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
                    {recipe.totalNutrients.CHOCDF.unit} <Divider />
                    {recipe.totalNutrients.CHOCDF.label}
                  </Box>
                  <Box
                    color="gray.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    textAlign="center"
                    p={2}
                  >
                    {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
                    {recipe.totalNutrients.PROCNT.unit} <Divider />
                    {recipe.totalNutrients.PROCNT.label}
                  </Box>
                  <Box
                    color="gray.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    textAlign="center"
                    p={2}
                  >
                    {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
                    {recipe.totalNutrients.CHOLE.unit} <Divider />
                    {recipe.totalNutrients.CHOLE.label}
                  </Box>
                  <Box
                    color="gray.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    textAlign="center"
                    p={2}
                  >
                    {Math.round(recipe.totalNutrients.NA.quantity)}{" "}
                    {recipe.totalNutrients.NA.unit} <Divider />
                    {recipe.totalNutrients.NA.label}
                  </Box>
                </SimpleGrid>
              </VStack>
            </HStack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
