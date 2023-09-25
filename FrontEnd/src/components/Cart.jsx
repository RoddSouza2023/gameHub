import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import useUpdateCart from "../hooks/useUpdateCart";

function Cart() {
  const token = localStorage?.accessToken || null;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { error, getResponse } = useCart(token);
  const { handleCartDeleteItem, handleCartUpdateQuantity, updateReponse } =
    useUpdateCart(token);

  function updateProducts(quantity, passedProduct) {
    const index = products.findIndex((item) => item.id === passedProduct.id);
    products[index].quantity = quantity;
  }

  useEffect(() => {
    if (token) {
      setProducts(getResponse.cart);
    } else {
      setProducts(JSON.parse(localStorage.getItem("guest_cart")));
    }
  }, [getResponse]);

  return (
    <Container paddingY={10} centerContent>
      <Text fontSize={"2xl"} marginY={5}>
        Cart
      </Text>
      {error && <Text>{getResponse.error}</Text>}
      <Box border={"inset 1px black"} padding={5} borderRadius={10}>
        {products?.map((product, i) => (
          <Box
            key={product.id}
            margin={3}
            boxShadow={"0 0 5px black"}
            borderRadius={5}
            padding={2}
          >
            <HStack justify={"space-between"}>
              <Image
                align={"left"}
                boxSize={"80px"}
                borderRadius={10}
                objectFit={"cover"}
                src={product.image}
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate(`/games/${product.slug}`)}
              />
              <Box>
                <Text>{product.name}</Text>
                <Text>
                  {parseInt(product.price) * parseInt(products[i]?.quantity)}
                </Text>
              </Box>
              <HStack>
                <HStack marginRight={5}>
                  <Icon
                    onClick={() => {
                      const quantity = Math.max(product.quantity - 1, 1);
                      updateProducts(quantity, product);
                      handleCartUpdateQuantity(product.id, quantity);
                    }}
                    as={AiOutlineMinusCircle}
                    _hover={{ cursor: "pointer", color: "red.500" }}
                  />
                  <Text fontSize={"sm"}>{products[i]?.quantity}</Text>
                  <Icon
                    onClick={() => {
                      const quantity = product.quantity + 1;
                      updateProducts(quantity, product);
                      handleCartUpdateQuantity(product.id, quantity);
                    }}
                    as={AiOutlinePlusCircle}
                    _hover={{ cursor: "pointer", color: "green.500" }}
                  />
                </HStack>
                <Icon
                  color={"red.500"}
                  as={AiOutlineDelete}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => {
                    setProducts(
                      products.filter((item) => item.id !== product.id)
                    );
                    handleCartDeleteItem(product.id);
                  }}
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
