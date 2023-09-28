import {
  HStack,
  Hide,
  Icon,
  Image,
  Show,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { pulse } from "../animations/navbarAnimation";

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
  const { colorMode } = useColorMode();

  const CustomBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 13,
      top: -5,
      border: `1px solid ${colorMode === "dark" ? "white" : "black"}`,
      padding: "0 4px",
    },
  }));

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
          colorMode={colorMode}
          CustomBadge={CustomBadge}
          cartLength={cartLength}
          onSelectGenre={onSelectGenre}
          selectedGenre={selectedGenre}
          setCurrentPage={setCurrentPage}
        />
      </Show>
      <SearchInput onSearch={onSearch} />
      <Hide below='lg'>
        <ColorModeSwitch />
        <CustomBadge badgeContent={cartLength}>
          <Icon
            marginX={5}
            as={AiOutlineShoppingCart}
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          />
        </CustomBadge>
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
