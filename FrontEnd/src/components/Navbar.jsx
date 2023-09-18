import { HStack, Hide, Icon, Image, Show, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MenuDrawer from "./MenuDrawer";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ onSearch, onSelectGenre, selectedGenre }) {
  const navigate = useNavigate();

  return (
    <HStack padding='10px' boxShadow={"0 0 5px black"} width={"100%"}>
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
      <Hide below='lg'>
        <ColorModeSwitch />
        <Icon
          marginX={5}
          as={AiOutlineShoppingCart}
          _hover={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        />
        <Text
          onClick={() => navigate("/login")}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Login/Register
        </Text>
      </Hide>
    </HStack>
  );
}

export default Navbar;
