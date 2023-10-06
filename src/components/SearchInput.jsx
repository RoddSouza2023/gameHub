import { useRef } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function SearchInput({ onSearch }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const ref = useRef(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current.value);
        if (pathname !== "/") navigate("/");
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search Games...'
          variant='filled'
        />
        <InputRightElement
          children={
            <IconButton
              onClick={() => {
                ref.current.value = null;
                onSearch(ref.current.value);
              }}
              icon={<DeleteIcon />}
              background={"unset"}
              isRound
            />
          }
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
