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
    RadioGroup,
    Radio,
    useColorModeValue,
    Stack,
    Heading
 } from "@chakra-ui/react";

function MaterialForm(){
    const plateColor = useColorModeValue("white","black");
    return(
        <Box bg={plateColor} w='full' p='5'>
            <Heading><Center>Add New Material</Center></Heading>
            <FormControl>
                <FormLabel>Item Name</FormLabel>
                <Input id='itemName' type='text'/>
                <FormErrorMessage>Please enter the name of the order</FormErrorMessage>
            </FormControl><FormControl>
                <FormLabel>Quantity</FormLabel>
                <Input id='quantity' type='number'/>
                <FormErrorMessage>Please enter the quantity</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Unit</FormLabel>
                <Input id='unit' type='text'/>
                <FormErrorMessage>Unit for the item</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Image</FormLabel>
                <Input id='orderName' type='file'/>
                <FormErrorMessage>Upload the image</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Is it an asset</FormLabel>
                <RadioGroup>
                    <Stack direction='row'>
                    <Radio value='yes'>Yes</Radio>
                    <Radio value='no'>No</Radio>
                </Stack>
                </RadioGroup>
                <FormErrorMessage>Unit for the item</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Price per Unit</FormLabel>
                <Input id='orderName' type='number'/>
            </FormControl>
            <FormControl>
                <FormLabel>Category</FormLabel>
                <Input id='category' type='text'/>
                <FormErrorMessage>Category for the item</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel>Seller</FormLabel>
                <Input id='orderName' type='text'/>
                <FormErrorMessage>Please enter the name of the person selling</FormErrorMessage>
            </FormControl>
            <Center><Button>Submit</Button></Center>
        </Box>
    );
}

export default MaterialForm;