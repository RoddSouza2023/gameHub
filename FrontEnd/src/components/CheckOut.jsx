import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  VStack,
  HStack,
  Icon,
  Image,
  Text,
  Tag,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import useClearCart from "../hooks/useClearCart";

function CheckOut({ token }) {
  const { isLoading, response } = useClearCart(token);
  const navigate = useNavigate();

  const checkOutItems = token
    ? response?.removedItems
    : JSON.parse(localStorage.getItem("guest_cart"));

  const totalGames = () => {
    let count = 0;
    checkOutItems?.forEach((item) => (count += item.quantity));
    return count;
  };

  const totalPrice = () => {
    let total = 0;
    checkOutItems?.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  return (
    <>
      {(checkOutItems?.length > 0 && token) || !token ? (
        <Container>
          <Text marginTop={10} fontSize={"30px"} color={"green.700"}>
            Checkout Successful!
          </Text>
          <Text marginLeft={"10px"}>
            {totalGames()} Total Item{totalGames() > 1 ? "s" : null} Purchased{" "}
          </Text>
          <Text fontSize={"12px"} marginLeft={"10px"}>
            {checkOutItems?.length} Awesome Game
            {checkOutItems?.length > 1 ? "s" : null}
          </Text>
          {checkOutItems?.map((product) => (
            <Box
              minHeight={150}
              key={product.id}
              borderRadius={5}
              margin={2}
              padding={2}
              flexWrap={"wrap"}
            >
              <HStack marginY={"25px"}>
                <Image
                  align={"left"}
                  boxSize={"100px"}
                  borderRadius={10}
                  objectFit={"cover"}
                  src={product.image}
                />
                <VStack>
                  <Text>{product.name}</Text>
                  <Text alignSelf={"baseline"} fontSize={"12px"} color={"grey"}>
                    Qty: {product.quantity}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
          <Text fontWeight={"bold"}>Total: ${totalPrice()}.00</Text>
          <Button marginTop={10} onClick={() => navigate("/")}>
            Continue Shopping!
          </Button>
        </Container>
      ) : (
        !isLoading && <PageNotFound />
      )}
    </>
  );
}

export default CheckOut;
