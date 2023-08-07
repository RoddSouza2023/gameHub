import { Badge } from "@chakra-ui/react"

function CriticScore({ score }) {
  let color 
  if (score > 75) { 
    color = "green" 
  } else if (score > 60) {
    color = "yellow"
  } else {
    color = ""
  }

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  )
}

export default CriticScore