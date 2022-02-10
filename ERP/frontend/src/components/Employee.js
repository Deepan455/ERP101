import React, {useState, useEffect} from "react";
import {
    VStack, Box, Flex,Text,Heading, Center, Progress, useColorModeValue,
    Table, Tr, Th, Td, Image
 } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import TopBar from "./common/TopBar";
import MaterialForm from "./forms/MaterialForm";
import ProductForm from "./forms/ProductForm";
import axios from "axios";
import { Link } from "react-router-dom";

function Employee(){

    const [employees,setEmployees] = useState(null);

    useEffect(()=>{
        async function getEmployees(){
            const res = await axios.get('http://127.0.0.1:8000/api/employee/');
            if(res.status == 200)
            {
                setEmployees(res.data);
                console.log(res.data)
            }
            else
            {
                console.log('Fetch Error');
            }
        }
        getEmployees()
            .catch(e=>{
                console.log(e);
            });
    },[]);


    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");
    const plateColor = useColorModeValue("white","black");
    return (
        <VStack
    w="87%"
    minHeight="100vh"
    bg={bgColor}
    spacing='0'>
        <TopBar/>
        <Box display='flex' width="full" justifyContent='space-evenly' flexWrap='wrap' h={60} border='1px solid black'>
            {employees?.map((emp)=>{
                return<Box key={emp.id} w='fit-content'>
                    <Link href={emp?.image||"https://www.w3schools.com/howto/img_avatar.png"}>
                        <Image boxSize={36} objectFit='scale-down' src={emp?.image||"https://www.w3schools.com/howto/img_avatar.png"} alt="Person"/>
                    </Link>
                    <Text>{emp.full_name}</Text>
                    <Text>{emp.email}</Text>
                    <Text>{emp.additional_info}</Text>
                    <Text>{emp.joined}</Text>
                    <Text>{emp.salary_amount}</Text>
                </Box>
            })
            }
        </Box>

        <Box w='full' p='15'>
            <MaterialForm/>
        </Box>
        <ProductForm/>

  </VStack>
        
    );
} 

export default Employee;