import { DeleteIcon } from "@chakra-ui/icons"
import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

function SearchInput({ onSearch }) { 
  const ref = useRef(null)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) onSearch(ref.current.value)
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
        <InputRightElement children={
          <IconButton onClick={() => {
            ref.current.value = null
            onSearch(ref.current.value)
          }} icon={<DeleteIcon />} background={'unset'} isRound/>
        }/>
      </InputGroup>
    </form>
  )
}

export default SearchInput