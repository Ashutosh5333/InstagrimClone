import {  Avatar,  Box,  Button,  ButtonGroup,  Flex,  Heading,  Image,   Stack,  Text,  Wrap,  WrapItem, useToast,} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card,  CardBody, CardFooter } from "@chakra-ui/react";


const InstaPost = () => {

  return (
    <>
    <Box border="3px solid red">
    <Card  maxW={{base:"4xl", md:"4xl",lg:"2xl"}}  m="auto" border="3px solid black">
          <CardBody>
          <Flex display={"flex"} justifyContent="space-between">
                    <Flex>
                      <Wrap>
                        <WrapItem>
                          <Avatar
                            size={{ base: "xs", md: "sm" }}
                            mr={8}
                            name="Ashutosh"
                            
                          />
                        </WrapItem>
                      </Wrap>
                      <Text
                        alignItems="center"
                        m="auto"
                        fontWeight={600}
                        fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                        width={{ base: "80%", md: "70%", lg: "90%" }}
                      >
                        Ashutosh
                      </Text>
                    </Flex>

                    {/* ------ upper section ------- */}

                    <Flex>
                      <Text fontSize={"30px"}>
                        {/* <DotModal /> */}
                      </Text>
                    </Flex>
                  </Flex>

            <Box border="2px solid blue">
            <Image
              objectFit="cover"
               w="100%"
               height="70%"
                // src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/60f89698-96d0-11e6-ba52-00163ec9f5fa/696278239/picsart-windows-10-screenshot.jpg"
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQG3I-3mV-CdcnGxeLUA8Qhlp6Fs_a2ulDLw6QC5z1ya2VZwZut"
                        alt="PostImage"
              borderRadius="lg"
            />
                
            </Box>

           

          </CardBody>
      

        </Card>


    </Box>
    
    
    </>
  )
}

export default InstaPost