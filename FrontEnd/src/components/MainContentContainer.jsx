import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  Hide,
} from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";
import useGames from "../hooks/useGames";
import { RepeatIcon } from "@chakra-ui/icons";
import { useState } from "react";
import GamesPerPage from "./GamesPerPage";

function MainContentContainer({
  setGameQuery,
  gameQuery,
  currentPage,
  setCurrentPage,
}) {
  const [gamesPerPage, setGamesPerPage] = useState(20);
  const { data, error, isLoading } = useGames(gameQuery);
  const onSelectPlatform = (platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const lastPostIndex = currentPage * gamesPerPage;
  const firstPostIndex = lastPostIndex - gamesPerPage;
  const currentGames = data.slice(firstPostIndex, lastPostIndex);
  const maxPageNumber = Math.ceil(data.length / gamesPerPage);

  return (
    <>
      {
        <>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={onSelectPlatform}
                  setCurrentPage={setCurrentPage}
                />
              </Box>
              <SortSelector
                setCurrentPage={setCurrentPage}
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
              {(gameQuery.genre ||
                gameQuery.platform ||
                gameQuery.sortOrder) && (
                <IconButton
                  marginLeft={3}
                  icon={<RepeatIcon />}
                  background='unset'
                  onClick={() => {
                    setGameQuery({
                      platform: null,
                      genre: null,
                      sortOrder: null,
                    });
                  }}
                ></IconButton>
              )}
            </Flex>
            <GamesPerPage
              gamesPerPage={gamesPerPage}
              setGamesPerPage={setGamesPerPage}
            />
          </Box>
          <GameGrid data={currentGames} error={error} isLoading={isLoading} />
          <Container marginY={5} centerContent>
            {maxPageNumber > 1 && (
              <HStack>
                <Button
                  isDisabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </Button>
                <Text marginX={5} fontWeight={"bold"}>
                  {currentPage} of {maxPageNumber}
                </Text>
                <Button
                  isDisabled={currentPage === maxPageNumber}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </HStack>
            )}
          </Container>
        </>
      }
    </>
  );
}

export default MainContentContainer;
