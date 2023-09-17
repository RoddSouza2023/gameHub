import { useState } from "react";
import Navbar from "./NavBar";
import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import GenreList from "./GenreList";
import MainContentContainer from "./MainContentContainer";

function MainPage({ gameQuery, setGameQuery, onSelectGenre }) {
  // const [gameQuery, setGameQuery] = useState({platform: null, genre: null, sortOrder: null})
  // const onSelectGenre = (genre) => setGameQuery({ ...gameQuery, genre })

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {/* <GridItem area='nav'>
          <Navbar
            onSelectGenre={onSelectGenre}
            selectedGenre={gameQuery.genre}
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem> */}
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
