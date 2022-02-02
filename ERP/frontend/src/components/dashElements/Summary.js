import React from "react";
import { Box, Flex, Center, Text, Progress, useColorModeValue } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

function Summary(){
    const bgColor = useColorModeValue("white","black");
    console.log(FiSend);
    return (
        <Flex w='full' justifyContent='space-around' alignItems='center'>
            <Box w='36' h='32' bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Daily Sales<FiSend size='20'/></Text> 
                <Center w='full' fontSize='xl' bg='green.300' height='14' my='2'>$500</Center>
                <Progress value='80'/>
            </Box>

            <Box w='40' h='32' bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Materials<FiSend size='20'/></Text>
                <Flex justifyContent='space-between' textAlign='center'>
                    <Center w='50%' bg='green.300' height='14' my='2' fontSize='xs'>In Stock $500</Center>
                    <Center w='46%' bg='red.300' height='14' my='2' fontSize='xs'>Out of stock $500</Center>
                </Flex>
                <Progress value='80'/>
            </Box>

            <Box w='40' h='32' bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Materials<FiSend size='20'/></Text>
                <Flex justifyContent='space-between' textAlign='center'>
                    <Center w='50%' bg='green.300' height='14' my='2' fontSize='xs'>In Stock $500</Center>
                    <Center w='46%' bg='red.300' height='14' my='2' fontSize='xs'>Out of stock $500</Center>
                </Flex>
                <Progress value='80'/>
            </Box>

            <Box w='40' textAlign='center' h='32' bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Products<FiSend size='20'/></Text>
                <Flex justifyContent='space-between'>
                <Center w='50%' fontSize='xl' bg='green.300' height='14' my='2' fontSize='xs'>In Stock $500</Center>
                <Center w='46%' fontSize='xl' bg='red.300' height='14' my='2' fontSize='xs'>Out of stock $500</Center>
                </Flex>
                <Progress value='80'/>
            </Box>

            <Box w='48' textAlign='center' h='32' bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Orders<FiSend size='20'/></Text>
                <Flex justifyContent='space-between'>
                <Center w='50%' fontSize='xl' bg='green.300' height='14' my='2' fontSize='xs'>Completed $500</Center>
                <Center w='46%' fontSize='xl' bg='red.300' height='14' my='2' fontSize='xs'>In Progress $500</Center>
                </Flex>
                <Progress value='80'/>
            </Box>
        </Flex>
    );
}

export default Summary;
