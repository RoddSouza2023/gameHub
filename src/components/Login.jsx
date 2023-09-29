import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(true);
  const { handleLogin, response, error } = useLogin();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (response.success) {
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(response.success);
    }
  }, [response]);

  if (response.success)
    setTimeout(() => {
      navigate("/");
    }, 2000);

  return (
    <Box padding={10} textAlign={"center"}>
      <Text fontSize={"2xl"} marginBottom={5}>
        Login
      </Text>
      {error && !response.success ? (
        <Text margin={5} color={"red.500"}>
          {error}
        </Text>
      ) : null}
      {response.success && (
        <Container centerContent>
          <HStack marginX={"auto"}>
            <Text margin={5} color={"green.500"}>
              {`${response.message} Redirecting to home page`}
            </Text>
            <CircularProgress size={5} isIndeterminate />
          </HStack>
        </Container>
      )}
      <FormControl maxW={400} marginX={"auto"}>
        <FormLabel>Email Address</FormLabel>
        <Input
          type='email'
          marginBottom={5}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            id='password'
            type={visibility ? "password" : "text"}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin(userData)}
          />
          <InputRightElement
            children={
              <Icon
                as={AiOutlineEye}
                onClick={() => setVisibility(!visibility)}
                _hover={{ cursor: "pointer" }}
                color={visibility ? "none" : "green.300"}
              />
            }
          />
        </InputGroup>
        <Button
          marginTop={5}
          onClick={async () => {
            handleLogin(userData);
          }}
        >
          Login
        </Button>
        <Text marginTop={5}>Don't have an account? </Text>
        <Container centerContent>
          <HStack>
            <Text
              onClick={() => navigate("/register")}
              _hover={{
                color: "lightblue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Register
            </Text>
            <Text>or</Text>
            <Text
              onClick={() => navigate("/verify")}
              _hover={{
                color: "lightblue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Verify Email
            </Text>
          </HStack>
        </Container>
      </FormControl>
    </Box>
  );
}

export default Login;
