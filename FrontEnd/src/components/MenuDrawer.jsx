import { Button, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { useRef } from "react"
import GenreList from "./GenreList"

function MenuDrawer({ onSelectGenre, selectedGenre }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
    <IconButton icon={<HamburgerIcon />} ref={btnRef} colorScheme='teal' onClick={onOpen}>
    </IconButton>
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
        <GenreList
                onClose={onClose}
                selectedGenre={selectedGenre}
                onSelectGenre={onSelectGenre}
              />
        </DrawerBody>

        <DrawerFooter>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default MenuDrawer