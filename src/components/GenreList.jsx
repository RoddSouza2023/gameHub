import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList({ onSelectGenre, selectedGenre, onClose, setCurrentPage }) {
  const { data, isLoading, error } = useGenres();
  //renders nothing if there is an error while retrieving the genre data from server
  if (error) return null;
  //renders a spinner icon from chakra library while loading. Can implement skeletons if prefered
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign='left'
                whiteSpace='normal'
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                  setCurrentPage(1);
                  onClose && setTimeout(() => onClose(), 200);
                }}
                fontSize='lg'
                variant='link'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
