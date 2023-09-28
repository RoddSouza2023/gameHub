import { Box } from "@chakra-ui/react";

function GameCardContainer({ children }) {
  return (
    <Box
      _hover={{ transform: "scale(105%)" }}
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
