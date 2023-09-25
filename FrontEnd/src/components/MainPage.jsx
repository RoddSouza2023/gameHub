import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import MainContentContainer from "./MainContentContainer";
import GenreList from "./GenreList";

function MainPage({
  gameQuery,
  setGameQuery,
  onSelectGenre,
  currentPage,
  setCurrentPage,
}) {
  if (!localStorage.guest_cart) window.localStorage.setItem("guest_cart", []);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <Heading
              size='md'
              fontWeight='bold'
              marginTop={10}
              marginBottom={5}
            >
              Genres
            </Heading>
            <GenreList
              setCurrentPage={setCurrentPage}
              onClose={null}
              selectedGenre={gameQuery.genre}
              onSelectGenre={onSelectGenre}
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <MainContentContainer
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setGameQuery={setGameQuery}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default MainPage;
