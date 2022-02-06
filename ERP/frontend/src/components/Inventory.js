import React from "react";
import {
    VStack, Box, Flex,Text,Heading, Center, Progress, useColorModeValue,
    Table, Tr, Th, Td
 } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import TopBar from "./common/TopBar";
import MaterialForm from "./forms/MaterialForm";
import ProductForm from "./forms/ProductForm";
import MaterialList from "./InventoryItems/MaterialList";
import ProductList from "./InventoryItems/ProductList";

function Inventory(){
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");
    const plateColor = useColorModeValue("white","black");
    return (
        <VStack
    w="87%"
    minHeight="100vh"
    bg={bgColor} 
    spacing='0'>
      <TopBar/>
      <Box display='flex' width="full" justifyContent='space-evenly' flexWrap='wrap'>
            <Box w='36' h='32' bg={plateColor} px='5' py='2' border='1px solid black' margin={4}>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Materials<FiSend size='20'/></Text> 
                <Center w='full' fontSize='sm' bg='green.300' height='14' my='2' p='3'>
                    stockItems: 50
                    short: 5
                </Center>
                <Progress value='80'/>
            </Box>

            <Box w='36' h='32' bg={plateColor} px='5' py='2' border='1px solid black' margin={4}>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Products<FiSend size='20'/></Text> 
                <Center w='full' fontSize='sm' bg='green.300' height='14' my='2' p='3'>
                    stockItems: 49
                    short: 32
                </Center>
                <Progress value='80'/>
            </Box>

            <Box w='80' h='32' bg={plateColor} px='5' py='2' border='1px solid black' margin={4}>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Today's Trend<FiSend size='20'/></Text> 
                <Flex justifyContent='space-between' textAlign='center'>
                    <Center w='50%' bg='green.300' height='14' my='2' fontSize='xs'>Material Produced $500</Center>
                    <Center w='46%' bg='red.300' height='14' my='2' fontSize='xs'>Products Sold $500</Center>
                </Flex>
                <Progress value='80'/>
            </Box>

            <Box w='80' h='32' bg={plateColor} px='5' py='2' border='1px solid black' margin={4}>
                <Text fontSize='m' display='flex' justifyContent='space-between'>Add New<FiSend size='20'/></Text> 
                <Flex justifyContent='space-between' textAlign='center'>
                    <Center w='50%' bg='green.300' height='14' my='2' fontSize='xs'>Product $500</Center>
                    <Center w='46%' bg='red.300' height='14' my='2' fontSize='xs'>Material Sold $500</Center>
                </Flex>
                <Progress value='80'/>
            </Box>
        </Box>
        <Box w='100%' display='flex' justifyContent='space-evenly'>
            <MaterialList w='40%'/>
            <ProductList w='40%'/>
        </Box>

        <Box w='full' p='15'>
            <MaterialForm/>
        </Box>
        <ProductForm/>

  </VStack>
        
    );
} 

export default Inventory;