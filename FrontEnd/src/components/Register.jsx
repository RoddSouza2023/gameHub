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
import { AiOutlineEye } from "react-icons/ai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const handleRegister = async ({ name, email, password }) => {
  const response = await fetch(
    "https://gamestore-twj1.onrender.com/api/v1/user/signup",
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};

function Register() {
  const navigate = useNavigate();
  const [change, setChange] = useState(true);
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null,
  });

  return (
    <Box padding={10} textAlign={"center"}>
      <Text fontSize='2xl' marginBottom={5}>
        Register
      </Text>
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
