import React from "react";
import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousel.min.css";
import "../styles/carousel.css";

function ScreenshotCarousel({ screenshots }) {
  return (
    <Box marginTop={10} width={"100%"}>
      <Carousel
        showThumbs={true}
        infiniteLoop
        autoPlay
        interval='5000'
        transitionTime='1'
      >
        {screenshots?.map((shot) => (
          <div key={shot.id}>
            <img src={shot.image}></img>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default ScreenshotCarousel;
