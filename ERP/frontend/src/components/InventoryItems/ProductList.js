import React, { useState, useEffect } from "react";
import { Box, Center, Table, Tr, Th, Td, Heading, Tbody, Thead } from "@chakra-ui/react";
import axios from "axios";
import { Link as RouteLink } from 'react-router-dom';

function ProductList(){
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        async function getProducts(){
            const res = await axios.get('http://127.0.0.1:8000/api/product/');
            if(res.status == 200)
            {
                setProduct(res.data);
            }
            else
            {
                console.log('Fetch Error');
            }
        }
        getProducts()
            .catch(e=>{
                console.log(e);
            });
    },[]);
    return (
        <Box>
                <Center><Heading>Products</Heading></Center>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Quantity</Th>
                            <Th>Unit</Th>
                        </Tr>
                    </Thead>
                        {product?.map((item)=>{
                            return (<Tbody key={item.id}>
                                <Tr>
                                    <Td>{item.id}</Td>
                                    <Td><RouteLink to = {`/app/product/${item.id}`}>{item.product_name}</RouteLink></Td>
                                    <Td>{item.inventory}</Td>
                                    <Td>{item.unit}</Td>
                                </Tr>
                            </Tbody>)
                        })||<Tbody><Tr><Td colSpan="4">No Items to show</Td></Tr></Tbody>}
                        
                </Table>
            </Box>
    );
}

export default ProductList;