import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/gaming-austro.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar( {onSearch} ) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={15}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar