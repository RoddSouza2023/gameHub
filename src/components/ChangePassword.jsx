import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUpdatePassword from "../hooks/useUpdatePassword";

function ChangePassword({ token }) {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState({
    currentPassword: true,
    newPassword: true,
  });
  const { handleUpdatePassword, response, error, isLoading } =
    useUpdatePassword();
  const [userData, setUserData] = useState({
    currentPassword: "",
    newPassword: "",
    token: token,
  });

  useEffect(() => {
    if (response.success);
  }, [response]);

  const isDemo = JSON.parse(localStorage.getItem("demoUser")) || false;

  return (
    <Box padding={10} textAlign={"center"}>
      <Text fontSize={"2xl"} marginBottom={5}>
        Update Password
      </Text>
      {isLoading ? (
        <Spinner />
      ) : error && !response.success ? (
        <Text margin={5} color={"red.500"}>
          {error}
        </Text>
      ) : null}
      {response.success && (
        <Container centerContent>
          <HStack marginX={"auto"}>
            <Text margin={5} color={"green.500"}>
              {`${response.message}`}
            </Text>
          </HStack>
        </Container>
      )}
      <FormControl maxW={400} marginX={"auto"}>
        <FormLabel>Current Password</FormLabel>
        <InputGroup marginBottom={5}>
          <Input
            disabled={isDemo}
            id='current-password'
            type={hidden.currentPassword ? "password" : "text"}
            onChange={(e) =>
              setUserData({ ...userData, currentPassword: e.target.value })
            }
          />
          <InputRightElement
            children={
              <Icon
                as={AiOutlineEye}
                onClick={() =>
                  setHidden({
                    ...hidden,
                    currentPassword: !hidden.currentPassword,
                  })
                }
                _hover={{ cursor: "pointer" }}
                color={hidden.currentPassword ? "none" : "green.300"}
              />
            }
          />
        </InputGroup>
        <FormLabel>New Password</FormLabel>
        <InputGroup>
          <Input
            disabled={isDemo}
            id='new-password'
            type={hidden.newPassword ? "password" : "text"}
            onChange={(e) =>
              setUserData({ ...userData, newPassword: e.target.value })
            }
          />
          <InputRightElement
            children={
              <Icon
                as={AiOutlineEye}
                onClick={() =>
                  setHidden({
                    ...hidden,
                    newPassword: !hidden.newPassword,
                  })
                }
                _hover={{ cursor: "pointer" }}
                color={hidden.newPassword ? "none" : "green.300"}
              />
            }
          />
        </InputGroup>
        <Button
          isDisabled={isDemo}
          marginTop={5}
          onClick={async () => {
            handleUpdatePassword(userData);
          }}
        >
          Update
        </Button>
        <Container marginY={5} centerContent>
          <Text
            onClick={() => navigate("/profile")}
            _hover={{
              color: "lightblue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Profile
          </Text>
        </Container>
      </FormControl>
    </Box>
  );
}

export default ChangePassword;
