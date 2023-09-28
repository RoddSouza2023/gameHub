import { Image } from "@chakra-ui/react";
import fire from "../assets/fire.gif";
import thumbsUp from "../assets/thumbs-up.gif";
import meh from "../assets/neutral-face.gif";

function Emoji({ rating }) {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh", boxSize: "30px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    5: { src: fire, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
