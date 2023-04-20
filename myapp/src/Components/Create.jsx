import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Text,
  Button,
  useDisclosure,
  Input,
  Switch,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { BiArrowBack } from "react-icons/bi";

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const [description, SetDescription] = useState("");
  const [image, SetImage] = useState("");
  const [url, SetUrl] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

 
  useEffect(() => {
    if (url) {
      fetch(`https://drab-ruby-swallow-toga.cyclic.app/insta/create`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          description,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          toast({
            position : 'top',
            status : "success",
            description:data.msg
          })
        })
        .catch((err) => {
          console.log(err);
          toast({
            position : 'top',
            colorScheme : 'red', 
            status : "error",
            title:err
          })
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-Clone");
    data.append("cloud_name", "dgvfiwlap");
    fetch("https://api.cloudinary.com/v1_1/dgvfiwlap/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        SetUrl(data.url);
        console.log(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    postDetails();
  };

  return (
    <>
      <Box onClick={onOpen}>
        <MdOutlineCreateNewFolder />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />

        <ModalContent>
          <Box display="flex" justifyContent={"space-between"}>
            <Box fontSize={"35px"}>
              <BiArrowBack />
            </Box>
            <Text
              fontWeight={"600"}
              fontSize="25px"
              fontFamily={"sans-serif"}
              fontStyle={"italic"}
            >
              {" "}
              New Post{" "}
            </Text>
            <Button fontSize={"35px"} color="blue" onClick={handleSubmit}>
              <TiTickOutline />
            </Button>
          </Box>

          <ModalBody>
            <Box>
              <Box height="80px">
                <Input
                  placeholder="Write a caption"
                  height="80px"
                  variant={"unstyled"}
                  border="none"
                  name="description"
                  onChange={(e) => SetDescription(e.target.value)}
                />
              </Box>

              <Box
                borderRadius={10}
                margin={"auto"}
                mt="4"
                fontWeight={"500"}
                color="#fff"
                fontSize={"1em"}
                backgroundColor={"blue.500"}
              >
                <label style={{ margin: "auto", textAlign: "center" }}>
                  <h4> Select from gallery </h4>

                  <input
                    type="file"
                    style={{ display: "none", margin: "auto" }}
                    name="image"
                    onChange={(e) => SetImage(e.target.files[0])}
                  />
                </label>
              </Box>
              {/* ------------------- */}

              <Box>
                <Box textAlign={"left"}>
                  <Text fontWeight="600" p={3}>
                    {" "}
                    Tag people{" "}
                  </Text>
                  <Divider orientation="horizontal" />
                  <Text fontWeight="600" p={3}>
                    {" "}
                    Add message button{" "}
                  </Text>
                  <Divider orientation="horizontal" />
                  <Text p={3} fontWeight="600">
                    {" "}
                    Add Location{" "}
                  </Text>
                  <Divider orientation="horizontal" />
                  <Text p={3} fontWeight="600">
                    {" "}
                    Add Reminder{" "}
                  </Text>
                  <Divider orientation="horizontal" />
                  <Text p={3} fontWeight="600">
                    Add music
                  </Text>
                  <Divider orientation="horizontal" />
                </Box>
              </Box>

              {/* -------------------- bottom ------------- */}

              <Box>
                <Box
                  display="flex"
                  fontWeight="600"
                  justifyContent={"space-between"}
                  p={4}
                >
                  <Box>
                    <Text>Boost post</Text>{" "}
                  </Box>
                  <Box>
                    <Switch id="email-alerts" />
                  </Box>
                </Box>
              </Box>
              <Divider orientation="horizontal" />
              {/* ---------------------- */}
              <Box
                display="flex"
                fontWeight="600"
                justifyContent={"space-between"}
                p={4}
              >
                <Box>
                  <Text>Share to Facebook</Text>{" "}
                </Box>
                <Box>
                  <Switch id="email-alerts" />
                </Box>
              </Box>
              <Box
                display="flex"
                fontWeight="600"
                justifyContent={"space-between"}
                p={4}
              >
                <Box>
                  <Text>Share to Twitter</Text>{" "}
                </Box>
                <Box>
                  <Switch id="email-alerts" />
                </Box>
              </Box>
              <Box
                display="flex"
                fontWeight="600"
                justifyContent={"space-between"}
                p={4}
              >
                <Box>
                  <Text>Share to Tumblr</Text>{" "}
                </Box>
                <Box>
                  <Switch id="email-alerts" />
                </Box>
              </Box>
              <Box
                //

                display="flex"
                fontWeight="600"
                justifyContent={"space-between"}
                p={4}
              >
                <Box>
                  <Text>Advanced settings</Text>{" "}
                </Box>
                <Box>
                  <Switch id="email-alerts" />
                </Box>
              </Box>
            </Box>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
};

export default Create;
