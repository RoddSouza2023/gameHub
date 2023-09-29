import { Container, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logOut = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("accessToken");
    };

    logOut();
    setTimeout(() => navigate("/"), 2000);
  }, []);
  return (
    <Container centerContent>
      <Heading marginY={10} color={"green.500"}>
        Logout Successful!
      </Heading>
      <Text>Please come back in the future!</Text>
      <Spinner marginTop={5} />
    </Container>
  );
}

export default Logout;
