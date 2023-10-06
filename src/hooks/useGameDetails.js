import useData from "./useData";

const useGamesDetails = (slug) => useData(`/game/${slug}`);
 
export default useGamesDetails;