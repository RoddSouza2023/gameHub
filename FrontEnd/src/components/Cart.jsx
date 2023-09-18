import { Box, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const items = [
  {
    id: 1,
    name: "product1",
    price: 24.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "product2",
    price: 25.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "product3",
    price: 26.0,
    quantity: 1,
  },
];

function Cart() {
  const [products, setProducts] = useState(items);

  const incrementQuantity = (id) => {
    const prod = products.map((p) => {
      if (p.id === id) {
        const quant = p.quantity + 1;
        return { ...p, quantity: quant };
      }
      return p;
    });
    return prod;
  };

  const decrementQuantity = (id) => {
    const prod = products.map((p) => {
      if (p.id === id) {
        let quant = p.quantity - 1;
        if (quant < 1) quant = p.quantity;
        return { ...p, quantity: quant };
      }
      return p;
    });
    return prod;
  };

  return (
    <Container paddingY={10} centerContent>
      <Text fontSize={"2xl"} marginY={5}>
        Cart
      </Text>
      <Box border={"inset 1px black"} padding={5} borderRadius={10}>
        {items.map((product, i) => (
          <Box
            key={product.id}
            margin={3}
            boxShadow={"0 0 5px black"}
            borderRadius={5}
            padding={2}
          >
            <HStack justify={"space-between"}>
              <Box>
                <Text>{product.name}</Text>
                <Text>{product.price * products[i].quantity}</Text>
              </Box>
              <HStack>
                <HStack marginRight={5}>
                  <Icon
                    onClick={() => {
                      setProducts(decrementQuantity(product.id));
                    }}
                    as={AiOutlineMinusCircle}
                    _hover={{ cursor: "pointer", color: "red.500" }}
                  />
                  <Text fontSize={"sm"}>{products[i].quantity}</Text>
                  <Icon
                    onClick={() => {
                      setProducts(incrementQuantity(product.id));
                    }}
                    as={AiOutlinePlusCircle}
                    _hover={{ cursor: "pointer", color: "green.500" }}
                  />
                </HStack>
                <Icon
                  color={"red.500"}
                  as={AiOutlineDelete}
                  _hover={{ cursor: "pointer" }}
                />
              </HStack>
            </HStack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Cart;
