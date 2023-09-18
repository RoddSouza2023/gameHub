import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [change, setChange] = useState(true);
  const [userData, setUserData] = useState({
    email: null,
    password: null,
  });

  return (
    <Box padding={10} textAlign={"center"}>
      <Text fontSize={"2xl"} marginBottom={5}>
        Login
      </Text>
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
            type={change ? "password" : "text"}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <InputRightElement
            children={
              <Icon
                as={AiOutlineEye}
                onClick={() => setChange(!change)}
                _hover={{ cursor: "pointer" }}
                color={change ? "none" : "green.300"}
              />
            }
          />
        </InputGroup>
        <Button marginTop={5} onClick={() => console.log(userData)}>
          Login
        </Button>
        <Text marginTop={5}>Don't have an account? </Text>
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
      </FormControl>
    </Box>
  );
}

export default Login;
