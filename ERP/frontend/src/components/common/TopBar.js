import React from 'react';
import { Flex,InputGroup,Text, useColorModeValue, Box, Input, InputRightElement, Heading } from '@chakra-ui/react';
import { FiSearch,FiBell, FiUser } from "react-icons/fi";

function TopBar(){
    const bgColor = useColorModeValue("white","black");
    const border = useColorModeValue("1px solid black","1px solid white");
    return (
        <Flex w="full" bg={bgColor} justifyContent='space-between' alignItems='center' px='5' py='1'>
            <Heading fontSize='xl'>Dashboard</Heading>
            <InputGroup variant='filled' w='96'>
                <Input placeholder='search'/>
                <InputRightElement><FiSearch size='20'/></InputRightElement>
            </InputGroup>
            <Box display='flex' w='20' justifyContent='space-between'>
            <FiBell size='25'/>
            <FiUser size='25'/>
            </Box>
        </Flex>
    )
}

export default TopBar;