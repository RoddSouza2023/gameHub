import { Box } from "@chakra-ui/react";

function GameCardContainer({ children }) {
  return (
    <Box boxShadow='dark-lg' width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  )
}

export default GameCardContainer