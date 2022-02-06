import React from 'react';
import { VStack, useColorMode, Heading, Text, Button, useColorModeValue, Container } from '@chakra-ui/react';
import { FiGrid, FiList, FiPackage, FiUsers, FiCreditCard, FiSun, FiMoon } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Navigation() {
    const { colorMode, toggleColorMode } = useColorMode();
    // const border = useColorModeValue("2px solid black","2px solid white");
    return (
        <VStack
                    w="13%"
                    h="full"
                    spacing='5'
                >
                    <Heading fontSize={{base:'16px',md:'22px',lg:'25px'}} marginX='auto' marginTop='4' marginBottom = '5' color='green.500'>ERP101</Heading>
                    <Link to=''><Container variant='nav-item' ><FiGrid size={30}/><Text variant='nav-text'>Dashboard</Text></Container></Link>
                    <Link to='inventory'>
                        <Container variant='nav-item'><FiPackage size={30}/><Text variant='nav-text'>Inventory</Text></Container>
                    </Link>
                    <Link to='order'>
                        <Container variant='nav-item'><FiList size={30}/><Text variant='nav-text'>Order</Text></Container>
                    </Link>
                    <Link to='employee'>
                        <Container variant='nav-item'><FiUsers size={30}/><Text variant='nav-text'>Employees</Text></Container>
                    </Link>
                    <Link to='order'>
                        <Container variant='nav-item'><FiCreditCard size={30}/><Text variant='nav-text'>Payment</Text></Container>
                    </Link>
                    <Container variant='nav-item'><Button onClick={toggleColorMode}>{colorMode === 'light'?<FiSun/>:<FiMoon/>}</Button></Container>
        </VStack>
    );
}

export default Navigation;
