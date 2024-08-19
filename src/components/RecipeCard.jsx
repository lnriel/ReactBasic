import {
  Image,
  Text,
  Stack,
  Heading,
  Card,
  CardBody,
  Box,
  Badge,
  Wrap,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  const healthLabelsToShow = ["Vegan", "Vegetarian"];

  const filteredHealthLabels = () => {
    const labels = recipe.healthLabels.filter((label) =>
      healthLabelsToShow.includes(label)
    );
    return labels.length > 0 ? labels : null;
  };

  const renderHealthLabels = () => {
    const labels = filteredHealthLabels();
    if (!labels) return null;
    return labels.map((healthLabel, index) => (
      <Badge key={index} colorScheme="purple" mr="2">
        {healthLabel}
      </Badge>
    ));
  };

  const renderDietLabels = () => {
    return recipe.dietLabels.map((dietLabel, index) => (
      <Badge key={index} colorScheme="green" mr="2">
        {dietLabel}
      </Badge>
    ));
  };

  const renderCautions = () => {
    return recipe.cautions.map((caution, index) => (
      <Badge key={index} colorScheme="red" mr="2">
        {caution}
      </Badge>
    ));
  };

  const cautionsSection =
    recipe.cautions.length > 0 ? (
      <Stack spacing="2">
        <Text fontWeight="bold" textAlign="center">
          Cautions:
        </Text>
        <Wrap spacing="2" justify="center">
          {renderCautions()}
        </Wrap>
      </Stack>
    ) : null;

  return (
    <Card maxW="sm">
      <CardBody p={0} pb="6">
        <Image
          src={recipe.image}
          alt={recipe.label}
          borderTopRadius="lg"
          objectFit="cover"
          w="100%"
          h="200px"
          onClick={() => clickFn(recipe)}
          cursor="pointer"
        />
        <Stack mt="6" spacing="3">
          <Text
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            color="gray.500"
            textTransform="uppercase"
            textAlign="center"
            ml="2"
          >
            {recipe.mealType} &bull; {recipe.dishType}
          </Text>
          <Heading size="md" textAlign="center" px="4">
            {recipe.label}
          </Heading>
          <Box>
            <Stack spacing="4">
              <Wrap spacing="2" justify="center">
                {renderHealthLabels()}
              </Wrap>

              <Wrap spacing="2" justify="center">
                {renderDietLabels()}
              </Wrap>

              {cautionsSection}
            </Stack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
