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
import useVerify from "../hooks/useVerify";

function VerifyEmail() {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(true);
  const { handleVerify, response, error } = useVerify();
  const [userData, setUserData] = useState({
    email: "",
    otp: "",
  });

  useEffect(() => {
    if (response.success);
  }, [response]);

  return (
    <Box padding={10} textAlign={"center"}>
      <Text fontSize={"2xl"} marginBottom={5}>
        Verify Email
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
              {`${response.message}`}
            </Text>
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
        <FormLabel>OTP Token</FormLabel>
        <InputGroup>
          <Input
            id='password'
            type={visibility ? "password" : "text"}
            onChange={(e) => setUserData({ ...userData, otp: e.target.value })}
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
            handleVerify(userData);
          }}
        >
          Verify
        </Button>
        <Container marginY={5} centerContent>
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
            <Text>/</Text>
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
          </HStack>
        </Container>
      </FormControl>
    </Box>
  );
}

export default VerifyEmail;
