import { HStack, Hide, Icon, Image, Show, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";

function Navbar({
  onSearch,
  onSelectGenre,
  selectedGenre,
  loggedIn,
  setLoggedIn,
}) {
  const navigate = useNavigate();

  async function logOut() {
    // const data = await fetch("http://localhost:8080/api/v1/user/logout", {
    //   method: "GET",
    //   credentials: "same-origin",
    // });
    // const response = await data.json();
    // setLoggedIn(response.success);
    // window.localStorage.removeItem("isLoggedIn");
  }

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
        {loggedIn ? (
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
