import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Spinner,
} from "@chakra-ui/react";
import useRequestOTP from "../hooks/useRequestOTP";

function RequestNewOTP({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { handleNewCode, response, error, isLoading } = useRequestOTP();

  useEffect(() => {
    if (!error) setSuccessMessage(response?.message);
  }, [response, error]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Request new code</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            {isLoading ? (
              <Spinner size={"xs"} />
            ) : error ? (
              <Text color={"red.500"}>{error}</Text>
            ) : (
              <Text color={"green.500"}>{successMessage}</Text>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => handleNewCode(email)}
            colorScheme='blue'
            mr={3}
          >
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RequestNewOTP;
