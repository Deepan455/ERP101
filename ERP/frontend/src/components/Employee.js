import React, {useState, useEffect} from "react";
import {
    VStack, Box, Flex,Text,Heading, Center, Progress, useColorModeValue,
    Table, Tr, Th, Td, Image, Avatar, Circle, Button
 } from "@chakra-ui/react";
import { FiSend, FiPlus } from "react-icons/fi";
import TopBar from "./common/TopBar";
import axios from "axios";
import EmployeeForm from "./forms/EmployeeForm";

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
        <Box display='flex' width="full" justifyContent='flex-start' flexWrap='wrap' border='1px solid black'>
            {employees?.map((emp)=>{
                console.log("Hello");
                console.log(emp);
                return(
                    <Box key={emp?.id} w='fit-content' border='1px solid black' bg={plateColor} m={6} p={3} display="flex" flexDirection='column' justify-content='center' textAlign='center'>
                    <a href={emp?.image||"https://www.w3schools.com/howto/img_avatar.png"} w='fit-content'>
                        <Avatar boxSize={36} objectFit='scale-down' src={emp?.image||"https://www.w3schools.com/howto/img_avatar.png"} alt="Person"/>
                    </a>
                    <Text fontSize='xl'>{emp?.full_name}</Text>
                    <Text fontSize="md">{emp?.additional_info}</Text>
                    <Text fontSize="xs">{emp?.email}</Text>
                    <Text fontSize="sm">Joined: {emp?.joined}</Text>
                </Box>)
            })
            }
            <Center w='170px' h='270px' border='1px solid black' bg={plateColor} m={6} p={3} display="flex" flexDirection='column' justify-content='center' textAlign='center'>
                <Circle w='fit-content' border='1px solid black'><FiPlus size='60'/></Circle>
            </Center>
        </Box>

        <Box w='full' p='15'>
            <EmployeeForm/>
        </Box>

  </VStack>
        
    );
} 

export default Employee;