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
  Show,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCart from "../hooks/useCart";
import johnTravolta from "../assets/john-travolta-hoarding.gif";
import { useNavigate } from "react-router-dom";
import useUpdateCart from "../hooks/useUpdateCart";

function Cart({ cartLength, setCartLength }) {
  const token = localStorage?.accessToken || null;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { error, getResponse, isLoading } = useCart(token);
  const { handleCartDeleteItem, handleCartUpdateQuantity } =
    useUpdateCart(token);

  const updateProducts = (quantity, passedProduct) => {
    const index = products.findIndex((item) => item.id === passedProduct.id);
    products[index].quantity = quantity;
  };

  const cartTotalPrice = () => {
    let total = 0;
    products?.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    setProducts(getResponse.cart);
  }, [getResponse]);

  return (
    <Container paddingY={"40px"}>
      <Button onClick={() => navigate("/")}>Continue Shopping</Button>
      <Text fontSize={"2xl"} marginY={5}>
        Cart: {products?.length} item(s)
      </Text>
      {products?.length === 0 && (
        <>
          <Image borderRadius={10} boxSize={300} src={johnTravolta} />
          <Text marginTop={5}>Let's add some games to this desolate cart!</Text>
        </>
      )}
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Box>
          {isLoading ? (
            <Spinner />
          ) : (
            products?.map((product, i) => (
              <Box
                minHeight={150}
                key={product.id}
                boxShadow={"2px 2px 5px black"}
                borderRadius={5}
                margin={2}
                padding={2}
                flexWrap={"wrap"}
              >
                <Show below='sm'>
                  <Text>{product.name}</Text>
                </Show>
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

                  <Box>
                    <Show above='sm'>
                      <Text
                        _hover={{ cursor: "pointer", fontWeight: "bold" }}
                        onClick={() => navigate(`/games/${product.slug}`)}
                      >
                        {product.name}
                      </Text>
                    </Show>
                    <Text fontSize={10} color={"gray.300"} marginY={1}>
                      Price: $
                      {parseInt(product.price) *
                        parseInt(products[i]?.quantity)}
                      .00
                    </Text>
                  </Box>
                  <VStack>
                    <HStack>
                      <Icon
                        onClick={() => {
                          const quantity = Math.max(product.quantity - 1, 1);
                          updateProducts(quantity, product);
                          setCartLength(cartLength - 1);
                          handleCartUpdateQuantity(product.id, quantity);
                        }}
                        as={AiOutlineMinus}
                        _hover={{ cursor: "pointer", color: "red.500" }}
                      />
                      <Tag fontSize={"sm"}>{products[i]?.quantity}</Tag>
                      <Icon
                        onClick={() => {
                          const quantity = product.quantity + 1;
                          updateProducts(quantity, product);
                          setCartLength(cartLength + 1);
                          handleCartUpdateQuantity(product.id, quantity);
                        }}
                        as={AiOutlinePlus}
                        _hover={{ cursor: "pointer", color: "green.500" }}
                      />
                    </HStack>
                    <Text
                      fontSize={12}
                      _hover={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      color={"red.500"}
                      onClick={() => {
                        setProducts(
                          products.filter((item) => item.id !== product.id)
                        );
                        setCartLength(
                          cartLength - products.find((item) => item.id).quantity
                        );
                        handleCartDeleteItem(product.id);
                      }}
                    >
                      Remove
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))
          )}
        </Box>
      )}
      <Text right={1} marginTop={"20px"}>
        Cart Total: ${cartTotalPrice()}.00
      </Text>
      <Button
        isDisabled={products?.length < 1}
        onClick={() => {
          setCartLength(0);
          navigate("/checkout");
        }}
        color={"green.500"}
        marginY={5}
      >
        Checkout
      </Button>
    </Container>
  );
}

export default Cart;
