import React, {useEffect, useState} from "react";
import { Box, Center, Table, Tr, Th, Td, Heading, Tbody, Thead, Link } from "@chakra-ui/react";
import axios from 'axios';
import { Link as RouteLink } from 'react-router-dom';

const NavLink = ({ text }) => (
    <Link>
      <Text fontSize="m">{text}</Text>
    </Link>
  );

function MaterialList(){

    const [material, setMaterial] = useState(null);

    useEffect(()=>{
            async function getMaterials(){
                const res = await axios.get('http://127.0.0.1:8000/api/item/');
                if(res.status == 200){
                    setMaterial(res.data);
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
        <Box>
                <Center><Heading>Materials</Heading></Center>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Quantity</Th>
                            <Th>Price</Th>
                            <Th>Category</Th>
                            <Th>Seller</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { material?.map((item)=>{
                            
                            return (
                                <Tr  key={item.id}>
                                    <Td>{item.id}</Td>
                                    <Td><RouteLink to = {`/app/material/${item.id}`}>{item.item_name}</RouteLink></Td>
                                    <Td>{item.quantity} {item.units}</Td>
                                    <Td>{item.priceperunit}</Td>
                                    <Td>{item.category}</Td>
                                    <Td>{item.seller}</Td>
                                </Tr>
                        )
                        })|| <Tr><Td colSpan="6">Nothing to show here</Td></Tr> }
                    </Tbody>
                </Table>
            </Box>
    );
}

export default MaterialList;