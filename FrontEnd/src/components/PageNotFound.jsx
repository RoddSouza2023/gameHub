import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomLink from "./CustomLink";

function PageNotFound() {
  return (
    <Container centerContent>
      <Box marginY={100} textAlign={"center"}>
        <Text fontSize={20} fontFamily={"Chalkduster, fantasy"}>
          Whoops! Something went wrong . . .
        </Text>
        <Image
          marginY={10}
          borderRadius={"full"}
          src='../dist/assets/not_found.gif'
          boxShadow={"0 0 20px black"}
        />
        <Text fontSize={20} fontFamily={"Chalkduster, fantasy"}>
          Please go back to <CustomLink to={"/"}>home page</CustomLink> or
          another valid domain.
        </Text>
      </Box>
    </Container>
  );
}

export default PageNotFound;
