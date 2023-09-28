import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Spinner, Text } from "@chakra-ui/react";
import useUserDetails from "../hooks/useUserDetails";

function UserProfile({ token }) {
  const { response, error, isLoading } = useUserDetails(token);
  const navigate = useNavigate();
  const user = response?.userDetails;

  return (
    <Container>
      {error && <Text color={"red.500"}>{error}</Text>}
      {isLoading ? (
        <Box marginTop={10}>
          <Spinner />
        </Box>
      ) : (
        <Box marginTop={10}>
          <Text fontSize={"30px"} fontWeight={"bold"} marginBottom={20}>
            {user?.name}'s Profile
          </Text>
          <Text>Email: {user?.email}</Text>
          <Text
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/change_password")}
          >
            Change Password
          </Text>
        </Box>
      )}
      <Button marginTop={20} onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </Container>
  );
}

export default UserProfile;
