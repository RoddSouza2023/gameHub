import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import NoGamesFound from "./NoGamesFound";

function GameGrid({ data, error, isLoading, gameQuery }) {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
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
        {display
          ? data?.map((game) => (
              <GameCardContainer key={game._id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          : !isLoading &&
            !(
              !gameQuery.platfrom &&
              !gameQuery.genre &&
              !gameQuery.sortOrder
            ) && <NoGamesFound />}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
