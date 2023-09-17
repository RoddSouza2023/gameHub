import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";

function Navbar({ onSearch, onSelectGenre, selectedGenre }) {
  const navigate = useNavigate();
  return (
    <HStack padding='10px'>
      <Image
        onClick={() => navigate("/")}
        _hover={{ cursor: "pointer", boxShadow: "0 0 5px white" }}
        src={logo}
        boxSize='60px'
        borderRadius={15}
      ></Image>
      <Show below='lg'>
        <MenuDrawer
          onSelectGenre={onSelectGenre}
          selectedGenre={selectedGenre}
        />
      </Show>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
