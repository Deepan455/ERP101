import React from "react";
import {VStack, Box, Heading,Text, Center, Progress, useColorModeValue } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import TopBar from "../common/TopBar";
import { useLocation, useParams } from "react-router-dom";

function AMaterial(){
    const location = useLocation();
    const params = useParams();
    console.log(location);
    {num} = params;
    console.log(params);
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");
    return (
        <VStack
    w="87%"
    bg={bgColor} 
    spacing='0'>
      <TopBar/>
      <Box>
            <Box w='36' h='32' bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Daily Sales<FiSend size='20'/></Text> 
                <Center w='full' fontSize='xl' bg='green.300' height='14' my='2'>$500</Center>
                <Progress value='80'/>
            </Box>
        </Box>
  </VStack>
        
    );
} 

export default AMaterial;