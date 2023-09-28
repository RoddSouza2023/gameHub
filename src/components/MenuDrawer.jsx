import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  IconButton,
  Icon,
  Text,
  HStack,
  VStack,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GenreList from "./GenreList";
import ColorModeSwitch from "./ColorModeSwitch";
import "../styles/cartBagde.css";

function MenuDrawer({
  logOut,
  isLoggedIn,
  onSelectGenre,
  selectedGenre,
  setCurrentPage,
  cartLength,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {pathname === "/" ? (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            ref={btnRef}
            colorScheme='teal'
            onClick={onOpen}
          ></IconButton>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody paddingRight={10}>
                <HStack justify={"space-around"} paddingY={5}>
                  <Icon
                    marginX={5}
                    as={AiOutlineShoppingCart}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/cart");
                      onClose(true);
                    }}
                  />
                  <div className='badge'>{cartLength}</div>
                  {isLoggedIn ? (
                    <VStack marginRight={3}>
                      <Text
                        onClick={() => {
                          navigate("/profile");
                          onClose(true);
                        }}
                        _hover={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Profile
                      </Text>
                      <Divider />
                      <Text
                        onClick={() => {
                          logOut();
                          onClose(true);
                          setTimeout(navigate("/", 400));
                        }}
                      >
                        Logout
                      </Text>
                    </VStack>
                  ) : (
                    <Text
                      onClick={() => {
                        navigate("/login");
                        onClose(true);
                      }}
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      marginRight={2}
                    >
                      Login
                    </Text>
                  )}
                  <ColorModeSwitch />
                </HStack>
                <Heading marginBottom={3} fontSize={"20px"}>
                  Genres
                </Heading>
                <GenreList
                  setCurrentPage={setCurrentPage}
                  onClose={onClose}
                  selectedGenre={selectedGenre}
                  onSelectGenre={onSelectGenre}
                />
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            ref={btnRef}
            colorScheme='teal'
            onClick={onOpen}
          ></IconButton>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader boxShadow={"0 0 5px black"}>
                <HStack>
                  <Text>Menu /</Text>{" "}
                  <Text
                    onClick={() => {
                      navigate("/");
                      onClose(true);
                    }}
                    _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Home
                  </Text>
                </HStack>
              </DrawerHeader>

              <DrawerBody>
                <HStack
                  justify={"space-around"}
                  marginY={"auto"}
                  paddingTop={5}
                >
                  <Icon
                    marginX={5}
                    as={AiOutlineShoppingCart}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/cart");
                      onClose(true);
                    }}
                  />
                  <div className='badge'>{cartLength}</div>
                  {isLoggedIn ? (
                    <VStack marginRight={3}>
                      <Text
                        onClick={() => {
                          navigate("/profile");
                          onClose(true);
                        }}
                        _hover={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Profile
                      </Text>
                      <Divider />
                      <Text
                        onClick={() => {
                          logOut();
                          onClose(true);
                          setTimeout(navigate("/", 400));
                        }}
                      >
                        Logout
                      </Text>
                    </VStack>
                  ) : (
                    <Text
                      onClick={() => {
                        navigate("/login");
                        onClose(true);
                      }}
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      marginRight={2}
                    >
                      Login
                    </Text>
                  )}
                  <ColorModeSwitch />
                </HStack>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
}

export default MenuDrawer;
