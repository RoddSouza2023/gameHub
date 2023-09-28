import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useLocalCart from "../hooks/useLocalCart";
import { useNavigate } from "react-router-dom";

function GuestCart({ cartLength, setCartLength }) {
  const navigate = useNavigate();
  const { updateItemQuantityInCart, deleteItemFromCart, response } =
    useLocalCart();
  const [guestCart, setGuestCart] = useState(
    JSON.parse(localStorage.getItem("guest_cart") || "[]")
  );

  const updateGuestCart = (quantity, passedProduct) => {
    const index = guestCart.findIndex((item) => item.id === passedProduct.id);
    guestCart[index].quantity = quantity;
  };

  const cartTotalPrice = () => {
    let total = 0;
    guestCart?.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };

  useEffect(() => {
    setGuestCart(guestCart);
  }, [response]);

  return (
    <Container paddingY={"40px"}>
      <Text fontSize={"2xl"} marginY={5}>
        Guest Cart: {guestCart.length} item(s)
      </Text>
      {guestCart.length === 0 && (
        <>
          <Image
            borderRadius={10}
            boxSize={300}
            src='../dist/assets/john-travolta-hoarding.gif'
          />
          <Text marginTop={5}>Let's add some games to this lonely cart!</Text>
        </>
      )}
      <Box>
        {guestCart?.map((product, i) => (
          <Box
            minHeight={150}
            key={product.id}
            boxShadow={"2px 2px 5px black"}
            borderRadius={5}
            margin={2}
            padding={2}
            flexWrap={"wrap"}
          >
            <HStack marginY={"25px"} justify={"space-between"}>
              <Image
                align={"left"}
                boxSize={"100px"}
                borderRadius={10}
                objectFit={"cover"}
                src={product.image}
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate(`/games/${product.slug}`)}
              />
              <Box textAlign={"left"}>
                <Text
                  _hover={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate(`/games/${product.slug}`)}
                >
                  {product.name}
                </Text>
                <Text fontSize={10} color={"gray.300"} marginY={1}>
                  Price: $
                  {parseInt(product.price) * parseInt(guestCart[i]?.quantity)}
                  .00
                </Text>
              </Box>
              <VStack>
                <HStack>
                  <Icon
                    onClick={() => {
                      const quantity = Math.max(product.quantity - 1, 1);
                      updateGuestCart(quantity, product);
                      setCartLength(cartLength - 1);
                      updateItemQuantityInCart(product.id, quantity);
                    }}
                    as={AiOutlineMinus}
                    _hover={{ cursor: "pointer", color: "red.500" }}
                  />
                  <Tag fontSize={"sm"}>{guestCart[i]?.quantity}</Tag>
                  <Icon
                    onClick={() => {
                      const quantity = product.quantity + 1;
                      updateGuestCart(quantity, product);
                      setCartLength(cartLength + 1);
                      updateItemQuantityInCart(product.id, quantity);
                    }}
                    as={AiOutlinePlus}
                    _hover={{ cursor: "pointer", color: "green.500" }}
                  />
                </HStack>
                <Text
                  fontSize={12}
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  color={"red.500"}
                  onClick={() => {
                    setGuestCart(
                      guestCart.filter((item) => item.id !== product.id)
                    );
                    setCartLength(
                      cartLength - guestCart.find((item) => item.id).quantity
                    );
                    deleteItemFromCart(product.id);
                  }}
                >
                  Remove
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
        <Text></Text>
      </Box>
      <Text right={1} marginTop={"20px"}>
        Cart Total: ${cartTotalPrice()}.00
      </Text>
      <Button
        isDisabled={guestCart?.length < 1}
        onClick={() => {
          setCartLength(0);
          navigate("/checkout");
        }}
        color={"green.500"}
        margin={5}
      >
        Checkout
      </Button>
    </Container>
  );
}

export default GuestCart;
