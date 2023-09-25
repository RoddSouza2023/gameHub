import { HStack, Hide, Icon, Image, Show, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";
import { pulse } from "../animations/navbarAnimation";

function Navbar({
  onSearch,
  onSelectGenre,
  selectedGenre,
  setCurrentPage,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  async function logOut() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <HStack padding='10px' boxShadow={"0 0 5px black"} width={"100%"}>
      <Image
        onClick={() => navigate("/")}
        _hover={{
          cursor: "pointer",
          boxShadow: "0 0 5px white",
          zIndex: 9,
          transform: "scale(110%)",
        }}
        animation={`${pulse} 2s infinite`}
        src={logo}
        boxSize='60px'
        borderRadius={15}
      ></Image>
      <Show below='lg'>
        <MenuDrawer
          onSelectGenre={onSelectGenre}
          selectedGenre={selectedGenre}
          setCurrentPage={setCurrentPage}
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
        {localStorage.isLoggedIn ? (
          <Text
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => logOut()}
          >
            Logout
          </Text>
        ) : (
          <Text
            onClick={() => navigate("/login")}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Login/Register
          </Text>
        )}
      </Hide>
    </HStack>
  );
}

export default Navbar;
