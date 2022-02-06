import React from "react";
import {
    VStack, Box, Heading,Text, Center, Progress, useColorModeValue,
    Flex,
    Thead,Tbody,
    Table, Tr, Th, Td,
    InputGroup,
    Input, InputRightElement, FormControl, FormLabel, FormErrorMessage,
    Select,
    Button
} from "@chakra-ui/react";
import { FiSend, FiSearch } from "react-icons/fi";
import TopBar from "./common/TopBar";

function Order(){
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");
    const plateColor = useColorModeValue("white","black");
    return (
        <VStack
    w="87%"
    bg={bgColor} 
    spacing='0'>

    //The main content part
    <Box w='full' p='5'>
    
        <Center><Heading>Orders</Heading></Center>
        <Box display='flex' justifyContent='flex-end'>
            <InputGroup variant='filled' w='96'>
                <Input placeholder='search'/>
                <InputRightElement><FiSearch size='20'/></InputRightElement>
            </InputGroup>
        </Box>
        <Table size='md'>
            <Thead>
                <Tr>
                    <Th>Item name</Th>
                    <Th>Item Date</Th>
                    <Th>Quantity</Th>
                    <Th>Price</Th>
                    <Th>Order</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>Ink</Td>
                    <Td>Litre</Td>
                    <Td>Liquid</Td>
                    <Td>2</Td>
                    <Td>Price</Td>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>Ink</Td>
                    <Td>Litre</Td>
                    <Td>Liquid</Td>
                    <Td>2</Td>
                    <Td>Price</Td>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>Ink</Td>
                    <Td>Litre</Td>
                    <Td>Liquid</Td>
                    <Td>2</Td>
                    <Td>Price</Td>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>Ink</Td>
                    <Td>Litre</Td>
                    <Td>Liquid</Td>
                    <Td>2</Td>
                    <Td>Price</Td>
                </Tr>
            </Tbody>
        </Table>
    </Box>
    <Box w='full' display='flex' justifyContent='space-evenly' flexWrap='wrap'>
        <Box w='100%' p='5'><Center><Heading>New Order</Heading></Center></Box>
        <Box bg={plateColor} w='50%' p='5'>
            
            <FormControl>
                <FormLabel>Order Name</FormLabel>
                <Input id='orderName' type='text'/>
                <FormErrorMessage>Please enter the name of the order</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Description</FormLabel>
                <Input id='orderName' type='text'/>
                <FormErrorMessage>Any additional info and description of the product goes here</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Order Date</FormLabel>
                <Input id='orderName' type='date'/>
                <FormErrorMessage>Please enter the date of the order</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Status</FormLabel>
                <Select placeholder='Select an option'>
                    <option value='recieved'>Recieved</option>
                    <option value='inProgress'>In Progress</option>
                    <option value='completed'>Completed</option>
                    <option value='Shipped'>Shipped</option>
                    <option value='canceled'>Canceled</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Ordered By</FormLabel>
                <Input id='orderName' type='text'/>
                <FormErrorMessage>Please enter the name of the person ordering</FormErrorMessage>
            </FormControl>
        </Box>

        <Box bg={plateColor} w='30%' p='5' overflow='scroll'>
            <Heading size='md'>Products</Heading>
            <FormControl>
                <FormLabel>Status</FormLabel>
                <Select placeholder='Select an option'>
                    <option value='recieved'>Product 1</option>
                    <option value='inProgress'>Product 2</option>
                    <option value='completed'>Product 3</option>
                    <option value='inProgress'>Product 4</option>
                    <option value='completed'>Product 5</option>
                </Select>
            </FormControl>
        </Box>
        <Box w='85%' p='5' bg={plateColor} m='10'><Center><Button>Submit</Button></Center></Box>
    </Box>
  </VStack>
        
    );
} 

export default Order;