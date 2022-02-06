import React from 'react';
import { VStack, useColorModeValue, Box, Grid, GridItem, Heading, Text, List, OrderedList, ListItem } from '@chakra-ui/react';
import TopBar from './TopBar';
import Summary from '../dashElements/Summary';
import LineChart from '../dashElements/LineChart';

function Content() {
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");
    const plateColor = useColorModeValue("white","black");
  return (
  <VStack
    w="87%"
    bg={bgColor} 
    spacing='0'>
      <TopBar/>
      <Grid w='full' h='full' templateRows="repeat(4,1fr)" templateColumns="repeat(5,1fr)" gap={2} p='2'>
        <GridItem colSpan={5} display='flex' justifyContent='center' alignItems='center'><Summary/></GridItem>
        <GridItem colSpan={2} rowSpan={2} px='4' py='8' bg={plateColor}>
          <LineChart/>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='l'>Latest Activities</Heading>
          <List>
            <ListItem>New Order Added</ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </List>
        </GridItem>

        <GridItem colSpan={2} rowSpan={2} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='xl'>OnGoing Orders</Heading>
          <OrderedList variant='a'>
            <ListItem> RamSaran </ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </OrderedList>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='xl'>OnGoing Orders</Heading>
          <OrderedList variant='a'>
            <ListItem> RamSaran </ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </OrderedList>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='xl'>OnGoing Orders</Heading>
          <OrderedList variant='a'>
            <ListItem> RamSaran </ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </OrderedList>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='xl'>OnGoing Orders</Heading>
          <OrderedList variant='a'>
            <ListItem> RamSaran </ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </OrderedList>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='xl'>OnGoing Orders</Heading>
          <OrderedList variant='a'>
            <ListItem> RamSaran </ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </OrderedList>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} border='1px solid black' p='3' bg={plateColor}>
          <Heading fontSize='xl'>OnGoing Orders</Heading>
          <OrderedList variant='a'>
            <ListItem> RamSaran </ListItem>
            <ListItem>Order Completed</ListItem>
            <ListItem>50 new items in the Inventory</ListItem>
          </OrderedList>
        </GridItem>
      </Grid>
  </VStack>
  );
}

export default Content;
