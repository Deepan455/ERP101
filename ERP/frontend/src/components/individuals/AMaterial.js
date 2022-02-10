import React,{useState, useEffect} from "react";
import {VStack, Box, Heading,Text, Center,Link, Progress, useColorModeValue, Grid, GridItem, Image } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import TopBar from "../common/TopBar";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function AMaterial(){
    const location = useLocation();
    const arr = location.pathname.split('/');
    const index = parseInt(arr.at(-1));
    console.log(location);
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");

    const [material, setMaterial] = useState(null);
    console.log(setMaterial);

    useEffect(()=>{
            async function getMaterials(){
                const res = await axios.get(`http://127.0.0.1:8000/api/item/${index}`);
                if(res.status == 200){
                    setMaterial(res.data);
                    console.log(res.data);
                }
                else{
                    console.log("Fetch Error");
                }
            };
            getMaterials()
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
                <Link href={material?.images||"https://media.istockphoto.com/photos/incense-stick-aromatherapy-picture-id484581084?b=1&k=20&m=484581084&s=170667a&w=0&h=OjvpY5TTkrUcJYSDS6p3gdPMaSnyn3MYl8_XR6ztY-E="}>
                    <Image boxSize={36} objectFit='scale-down' src={material?.images||"https://media.istockphoto.com/photos/incense-stick-aromatherapy-picture-id484581084?b=1&k=20&m=484581084&s=170667a&w=0&h=OjvpY5TTkrUcJYSDS6p3gdPMaSnyn3MYl8_XR6ztY-E="} alt="Product"/>
                </Link>
            </GridItem>
            <GridItem colSpan={4} bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m'>Name : {material?.item_name}</Text>
                <Text fontSize='m'>quantity : {material?.quantity} {material?.units}</Text>
                <Text fontSize='m'>Type : {(material?.assetornot)?"Asset":"Material"}</Text>
                <Text fontSize='m'>Price : {material?.priceperunit}</Text>
            </GridItem>
            <GridItem rowSpan={4} colSpan={5} bg={bgColor} px='5' py='2' border='1px solid black'>
                <Text fontSize='m'>Details</Text>
            </GridItem>
        </Grid>
  </VStack>
        
    );
} 

export default AMaterial;