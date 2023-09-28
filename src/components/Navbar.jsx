import { HStack, Hide, Icon, Image, Show, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";
import { pulse } from "../animations/navbarAnimation";
import "../styles/cartBagde.css";

function Navbar({
  cartLength,
  onSearch,
  onSelectGenre,
  selectedGenre,
  setCurrentPage,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <HStack padding='10px' boxShadow={"0 0 5px black"} width={"100%"}>
      <Image
        onClick={() => navigate("/")}
        _hover={{
          cursor: "pointer",
        }}
        animation={`${pulse} 2s infinite`}
        src={logo}
        boxSize='60px'
        borderRadius={15}
      ></Image>
      <Show below='lg'>
        <MenuDrawer
          logOut={logOut}
          isLoggedIn={isLoggedIn}
          cartLength={cartLength}
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
        <div className='badge'>{cartLength}</div>
        {localStorage.isLoggedIn ? (
          <>
            <Text
              onClick={() => navigate("/profile")}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Profile
            </Text>
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => logOut()}
            >
              Logout
            </Text>
          </>
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
