import {
  Box,
  Button,
  Checkbox,
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
  VStack,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(true);
  const [demoUser, setDemoUser] = useState(false);
  const { handleLogin, response, error } = useLogin();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setIsLoggedIn(response.success);
    if (response.success) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [response]);
  // console.log(error);
  useEffect(() => {
    if (demoUser)
      setUserData({ email: "demouser@demo.com", password: "demouser" });
  }, [demoUser]);

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
          isDisabled={demoUser}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            isDisabled={demoUser}
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
        <VStack>
          <Checkbox onChange={() => setDemoUser(!demoUser)} marginTop={2}>
            DemoUser
          </Checkbox>
          <Button
            onClick={async () => {
              handleLogin(userData);
              demoUser && localStorage.setItem("demoUser", true);
            }}
          >
            Login
          </Button>
        </VStack>
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
