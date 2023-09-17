import { Box, Flex, IconButton } from "@chakra-ui/react"
import GameGrid from "./GameGrid"
import PlatformSelector from "./PlatformSelector"
import SortSelector from "./SortSelector"
import GameHeading from "./GameHeading"
import { RepeatIcon } from "@chakra-ui/icons"

function MainContentContainer({ setGameQuery, gameQuery }) {

  const onSelectPlatform = (platform) => {
    if (platform.id === 2) platform.id = '187,18,16,15,27,19,17'
    setGameQuery({...gameQuery, platform})
  }

  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={onSelectPlatform
              }
            />
          </Box> 
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            />
            {(gameQuery.genre || gameQuery.platform || gameQuery.sortOrder) && <IconButton marginLeft={3} icon={<RepeatIcon />} background='unset' onClick={() => {
              setGameQuery({platform: null, genre: null, sortOrder: null})
              }}></IconButton>}
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </>
  )
}

export default MainContentContainer