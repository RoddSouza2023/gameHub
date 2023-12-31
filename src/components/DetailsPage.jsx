import {
  Box,
  Container,
  Flex,
  VStack,
  Icon,
  Text,
  Button,
  Show,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { iconMap } from "./PlatformIconList";
import { BsArrowBarLeft, BsCartPlus, BsCartCheckFill } from "react-icons/bs";
import { pulse } from "../animations/navbarAnimation";
import ScreenshotCarousel from "./ScreenshotCarousel";
import useGamesDetails from "../hooks/useGameDetails";
import useUpdateCart from "../hooks/useUpdateCart";
import useLocalCart from "../hooks/useLocalCart";
import "../styles/gameRating.css";

function DetailsPage({ setCartLength, cartLength }) {
  const token = localStorage?.accessToken || null;
  const { addItemToCart } = useLocalCart();
  const { handleCartAddItems } = useUpdateCart(token);
  const [showText, setShowText] = useState(false);
  const [grow, setGrow] = useState(false);
  const { slug } = useParams();
  const { data, error, isLoading } = useGamesDetails(slug);
  const navigate = useNavigate();

  const game = data.game;

  return (
    <Container>
      {error && <Text>{error}</Text>}
      <Button marginY={5} onClick={() => navigate("/")}>
        <Icon as={BsArrowBarLeft} marginRight={2} /> Back to Main Page
      </Button>
      <VStack>
        <Flex marginY={5} alignSelf={"baseline"}>
          <Box>
            {game?.parent_platforms.map(({ platform }) => (
              <Icon
                key={platform.id}
                as={iconMap[platform.slug]}
                marginX={1}
              ></Icon>
            ))}
          </Box>
          <Text marginX={5}>Average Playtime: {game?.playtime}</Text>
        </Flex>

        <Box alignSelf={"baseline"} className='stars-container'>
          <Text alignSelf={"baseline"} fontSize={40}>
            {game?.name}
          </Text>
          {!isLoading && (
            <div
              className='Stars'
              style={{ "--rating": `${game?.rating}` }}
            ></div>
          )}
        </Box>
        <HStack
          alignSelf={"flex-start"}
          alignContent={"space-between"}
        ></HStack>
        <Button
          alignSelf={"end"}
          marginRight={2}
          onClick={() => {
            setGrow(true);
            setTimeout(() => setGrow(false), 1000);
            setCartLength(cartLength + 1);
            !token ? addItemToCart(game) : handleCartAddItems(game);
          }}
        >
          <Icon
            color={grow ? "green" : null}
            animation={grow ? `${pulse} 1s` : null}
            marginRight={3}
            marginBottom={1}
            as={grow ? BsCartCheckFill : BsCartPlus}
          />
          Add to Cart
        </Button>
        <ScreenshotCarousel screenshots={game?.short_screenshots} />
        <Box marginY={10}>
          <Show breakpoint=''>
            {showText ? (
              <Text>{game?.description}</Text>
            ) : (
              <Text noOfLines={5}>{game?.description}</Text>
            )}
            <Button marginY={5} onClick={() => setShowText(!showText)}>
              Show {showText ? "Less" : "More"}
            </Button>
          </Show>
        </Box>
      </VStack>
    </Container>
  );
}

export default DetailsPage;
