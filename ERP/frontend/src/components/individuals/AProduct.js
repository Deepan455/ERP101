import React,{useState, useEffect} from "react";
import {VStack, Box, Heading,Text, useColorModeValue, Grid, GridItem, Image } from "@chakra-ui/react";
import TopBar from "../common/TopBar";
import { useLocation } from "react-router-dom";
import axios from "axios";

function AProduct(){
    const location = useLocation();
    const arr = location.pathname.split('/');
    const index = parseInt(arr.at(-1));
    console.log(location);
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");

    const [product, setProduct] = useState(null);
    console.log(setProduct);

    useEffect(()=>{
            async function getProducts(){
                const res = await axios.get(`http://127.0.0.1:8000/api/product/${index}`);
                if(res.status == 200){
                    setProduct(res.data);
                    console.log(res.data);
                }
                else{
                    console.log("Fetch Error");
                }
            };
            getProducts()
                .catch(e=>{
                    console.log(e);
                })
},[]);

    return (
        <VStack
    w="87%"
    bg={bgColor} 
    spacing='0'>
      <TopBar/>
      <Grid w='100%' h='full' templateColumns='repeat(5,1fr)' templateRows='repeat(5,1fr)' gap={3} p={5}>
            <GridItem colSpan={1} bg={bgColor} px='5' py='2' border='1px solid black'>
                <Image boxSize='auto' objectFit='cover' src="https://media.istockphoto.com/photos/incense-stick-aromatherapy-picture-id484581084?b=1&k=20&m=484581084&s=170667a&w=0&h=OjvpY5TTkrUcJYSDS6p3gdPMaSnyn3MYl8_XR6ztY-E=" alt="Product"/>
            </GridItem>
            <GridItem colSpan={4} bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m'>Id : {product?.product?.id}</Text>
                <Text fontSize='m'>Name : {product?.product?.product_name}</Text>
                <Text fontSize='m'>Inventory : {product?.product?.inventory} {product?.product?.unit}</Text>
            </GridItem>
            <GridItem rowSpan={4} colSpan={5} bg={bgColor} px='5' py='2' border='1px solid black'>
                <Heading size='m'>Products ordered</Heading>
                <Box w='full' display='flex'>
                    {product?.items?.map((ite)=>{
                        return <Box key={ite.id} border='1px solid black' w={60} h={48} m={10} display="flex" justifyContent='center' alignItems='center' flexDirection='column'>
                            <Text>Id:{ite.id}</Text><br/>
                            <Text>Quantity:{ite.quantity}</Text>
                        </Box>
                    })}
                </Box>
            </GridItem>
        </Grid>
  </VStack>
        
    );
} 

export default AProduct;