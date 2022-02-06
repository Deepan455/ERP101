import React from "react";
import { 
    Box,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Select,
    Button,
    Center,
    useColorModeValue,
    Heading
 } from "@chakra-ui/react";

function ProductForm(){
    const plateColor = useColorModeValue("white","black");
    return(
        <Box w='full' display='flex' justifyContent='space-evenly' flexWrap='wrap'>
            <Box w='100%' p='5'><Center><Heading>New Product</Heading></Center></Box>
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
    );
}

export default ProductForm;