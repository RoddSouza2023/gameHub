import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";

function NoGamesFound() {
  return (
    <Container textAlign={"center"} centerContent>
      <Box marginY={5}>
        <Text fontFamily={"Chalkduster, fantasy"} marginY={5}>
          We're sorry. No matches were found for your search
        </Text>
        <Image
          boxShadow={"0 0 20px black"}
          borderRadius={10}
          src='../assets/futurama-bender.gif'
        />
        <Text fontFamily={"Chalkduster, fantasy"} marginY={5}>
          Please try again with different words or categories
        </Text>
      </Box>
    </Container>
  );
}

export default NoGamesFound;
