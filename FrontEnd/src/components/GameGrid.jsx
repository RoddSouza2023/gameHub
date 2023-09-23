import { SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";

function GameGrid({ gameQuery }) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [
    "a1",
    "b1",
    "c1",
    "d1",
    "e1",
    "f1",
    "g1",
    "h1",
    "i1",
    "j1",
    "k1",
    "l1",
    "m1",
    "n1",
    "o1",
    "p1",
    "q1",
  ];

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.map((game) => (
        <GameCardContainer key={game._id}>
          <Link to={`/${game.id}`}>
            <GameCard game={game} />
          </Link>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
