import useData from "./useData";

//changed to game from games
const useGames = (gameQuery) => useData(`/game/all`, {
  params: {
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText?.toLowerCase(),
  }}, 

  [gameQuery]
  );

export default useGames;