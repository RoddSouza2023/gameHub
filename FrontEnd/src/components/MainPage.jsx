import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import GenreList from "./GenreList";
import MainContentContainer from "./MainContentContainer";

function MainPage({ gameQuery, setGameQuery, onSelectGenre }) {
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
              onClose={null}
              selectedGenre={gameQuery.genre}
              onSelectGenre={onSelectGenre}
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <MainContentContainer
            setGameQuery={setGameQuery}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default MainPage;
