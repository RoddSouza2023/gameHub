import { useParams } from 'react-router-dom'
import useGamesDetails from '../hooks/useGameDetails'
import PlatformIconList from './PlatformIconList'
import { Skeleton, useStatStyles } from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'
import { useEffect, useState } from 'react'


function GameDetails() {
  const {id} = useParams()
  const { data, error, isLoading } = useGamesDetails(id)
  const skeletons = [1,2,3,4,5,6,7,8]

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      <PlatformIconList  platforms={data.parent_platforms ? data.parent_platforms.map((p) => p.platform) : [{}]} />
    </>
  )
}

export default GameDetails