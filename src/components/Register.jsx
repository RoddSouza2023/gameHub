import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import useRegister from "../hooks/useRegister";

function Register() {
  const { handleRegister, response, error } = useRegister();
  const [change, setChange] = useState(true);
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null,
  });
  const navigate = useNavigate();
  useEffect(() => {}, [response]);

  return (
    <Box padding={10} textAlign={"center"}>
      <Text fontSize='2xl' marginBottom={5}>
        Register
      </Text>
      {error ? (
        <Text margin={5} color={"red.500"}>
          {error}
        </Text>
      ) : null}
      {response.success && !error ? (
        <Text margin={5} color={"green.500"}>
          {response.message}
        </Text>
      ) : null}
      <FormControl maxW={400} marginX={"auto"}>
        <FormLabel>Name</FormLabel>
        <Input
          type='email'
          marginBottom={5}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <FormLabel>Email Address</FormLabel>
        <Input
          id='email'
          type='email'
          marginBottom={5}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <FormLabel>Password</FormLabel>
        <InputGroup marginBottom={5}>
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
            bg={"transparent"}
          />
        </InputGroup>
        <Button marginTop={5} onClick={() => handleRegister(userData)}>
          Register
        </Button>
        <Text marginTop={5}>Already have an account? </Text>
        <Text
          onClick={() => navigate("/login")}
          _hover={{
            color: "lightblue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Login
        </Text>
      </FormControl>
    </Box>
  );
}

export default Register;
