import { Avatar, Box, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

import { FaReact } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./slide.css";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skill">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                  <Box>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="lg"
                          name="Ryan Florence"
                          src="https://bit.ly/ryan-florence"
                        ></Avatar>
                      </WrapItem>
                    </Wrap>
                  </Box>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
