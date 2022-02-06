import React from "react";
import { Box, Center, Table, Tr, Th, Td, Heading, Tbody, Thead } from "@chakra-ui/react";

function ProductList(){
    return (
        <Box>
                <Center><Heading>Products</Heading></Center>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Unit</Th>
                            <Th>Category</Th>
                            <Th>Quantity</Th>
                            <Th>Price</Th>
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
    );
}

export default ProductList;