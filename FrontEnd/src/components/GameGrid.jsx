import { SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import useGames from "../hooks/useGames"
 
function GameGrid( { gameQuery } ) {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  if (error) return <Text>{error}</Text>

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
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <Link to={`/${game.id}`}>
            <GameCard game={ game } />
          </Link>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default GameGrid