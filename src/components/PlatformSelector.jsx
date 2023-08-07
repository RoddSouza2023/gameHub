import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { useState } from "react"

function PlatformSelector({ onSelectPlatform, selectedPlatform }) {
  const { data, error } = usePlatforms()
  const [selectedPlatformStatus, setSelectedPlatformStatus] = useState(false)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {selectedPlatformStatus && <MenuItem key={0} onClick={()=> {
          setSelectedPlatformStatus(false)
          onSelectPlatform("")}}
          >Reset</MenuItem>}
        {data.map((platform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatformStatus(true)
              onSelectPlatform(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector