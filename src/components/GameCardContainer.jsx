import { Box } from "@chakra-ui/react";

function GameCardContainer({ isLoading, children }) {
  return (
    <Box
      _hover={!isLoading && { transform: "scale(105%)" }}
      boxSize={"md"}
      boxShadow='dark-lg'
      width='100%'
      maxWidth={"430px"}
      borderRadius={10}
      overflow='hidden'
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
