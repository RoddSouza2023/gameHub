import {
  Button,
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
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import GenreList from "./GenreList";
import { useLocation, useNavigate } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

function MenuDrawer({ onSelectGenre, selectedGenre, setCurrentPage }) {
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
              <DrawerHeader>Genres</DrawerHeader>

              <DrawerBody>
                <HStack justify={"space-around"} paddingY={5}>
                  <Icon
                    as={AiOutlineShoppingCart}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => navigate("/cart")}
                  />
                  <Text
                    onClick={() => navigate("/login")}
                    _hover={{ textDecoration: "underline", cursor: "pointer" }}
                    marginX={2}
                  >
                    Login/Register
                  </Text>
                  <ColorModeSwitch />
                </HStack>
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
            placement='top'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader boxShadow={"0 0 5px black"}>Menu</DrawerHeader>

              <DrawerBody>
                <HStack
                  justify={"space-around"}
                  marginY={"auto"}
                  paddingTop={5}
                >
                  <Icon
                    as={AiOutlineShoppingCart}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => navigate("/cart")}
                  />
                  <Text
                    onClick={() => navigate("/login")}
                    _hover={{ textDecoration: "underline", cursor: "pointer" }}
                    marginX={2}
                  >
                    Login/Register
                  </Text>
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
