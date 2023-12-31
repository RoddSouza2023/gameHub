import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import GameGrid from "./GameGrid";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";
import GamesPerPage from "./GamesPerPage";
import useGames from "../hooks/useGames";

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
  const currentGames = data.games?.slice(firstPostIndex, lastPostIndex);
  const maxPageNumber = Math.ceil(data.games?.length / gamesPerPage);

  return (
    <>
      {
        <>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex wrap={"wrap"} marginBottom={5}>
              <Box marginRight={5} marginBottom={5}>
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
            </Flex>
            <HStack>
              <GamesPerPage
                gamesPerPage={gamesPerPage}
                setGamesPerPage={setGamesPerPage}
                setCurrentPage={setCurrentPage}
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
            </HStack>
          </Box>
          <GameGrid
            gameQuery={gameQuery}
            data={currentGames}
            error={error}
            isLoading={isLoading}
          />
          <Container marginY={5} centerContent>
            {maxPageNumber > 1 && (
              <HStack>
                <Button
                  isDisabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                  }}
                >
                  Prev
                </Button>
                <Text marginX={5} fontWeight={"bold"}>
                  {currentPage} of {maxPageNumber}
                </Text>
                <Button
                  isDisabled={currentPage === maxPageNumber}
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    window.scrollTo({ top: 0 });
                  }}
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
