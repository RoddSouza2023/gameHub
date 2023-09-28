import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <Card
      height='100%'
      maxW={"inherit"}
      onClick={() => navigate(`/games/${game.slug}`)}
      _hover={{ cursor: "pointer" }}
    >
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            //Look at this Later, why is ternary needed?
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform)
                : [{}]
            }
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
