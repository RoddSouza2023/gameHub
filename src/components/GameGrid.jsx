import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import NoGamesFound from "./NoGamesFound";

function GameGrid({ data, error, isLoading }) {
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

  const display = data?.length > 0;

  return (
    <>
      <SimpleGrid
        columns={!display && !isLoading ? 1 : { sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {display ? (
          data?.map((game) => (
            <GameCardContainer key={game._id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))
        ) : (
          <NoGamesFound />
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
