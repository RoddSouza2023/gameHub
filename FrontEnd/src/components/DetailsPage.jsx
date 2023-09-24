import {
  Box,
  Container,
  Flex,
  VStack,
  Icon,
  Text,
  Button,
  Center,
  Show,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { iconMap } from "./PlatformIconList";
import ScreenshotCarousel from "./ScreenshotCarousel";
import useGamesDetails from "../hooks/useGameDetails";
import { BsArrowBarLeft } from "react-icons/bs";
import useCart from "../hooks/useCart";

function DetailsPage() {
  const token = localStorage?.accessToken || null;
  const { handleCartAddItems } = useCart(token);
  const [showText, setShowText] = useState(false);
  const { slug } = useParams();
  const { data, error, isLoading } = useGamesDetails(slug);
  const navigate = useNavigate();

  const game = data.game;

  return (
    <Container>
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
                color={"gray.100"}
                marginX={1}
              ></Icon>
            ))}
          </Box>
          <Text marginX={5}>Average Playtime: {game?.playtime}</Text>
        </Flex>
        <Text fontSize={40} marginBottom={5}>
          {game?.name}
        </Text>
        <HStack alignSelf={"flex-start"} alignContent={"space-between"}>
          <Box>
            <Button
              marginRight={2}
              onClick={() => {
                handleCartAddItems(game);
              }}
            >
              Cart
            </Button>
            <Button marginRight={2}>Wishlist</Button>
          </Box>
          <Box>
            <Text>
              {game?.rating} / {game?.rating_top}
            </Text>
          </Box>
        </HStack>
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
