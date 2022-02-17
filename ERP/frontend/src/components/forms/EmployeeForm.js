import React,{useState, useEffect} from "react";
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
    Heading,
    Avatar
 } from "@chakra-ui/react";
import axios from 'axios';
function EmployeeForm(){

    const [uploadFile,setUploadFile] = useState(null);
    const [empInput,setEmpInput] = useState(null);
    const [image,setImage] = useState(null);
    
    
    useEffect(()=>{
        setEmpInput(
            {
                full_name:'',
                additional_info:'',
                joined:'',
                salary_amount:''
            }
        )
    },[]);

    const updateField=({name,value})=>{
        setEmpInput({
            ...empInput,
            [name]:value
        });
    };

    const submitForm = async (e)=>{
        e.preventDefault();
        console.log(empInput);

        const formdata = new FormData();

        for(const property in empInput)
        {
            // console.log(`${property}:${empInput[property]}`);
            formdata.append(property,empInput[property]);
        }

        if(image)
        {
            formdata.append('image',image,image.name);
        }
        
        const res = await axios.post('http://127.0.0.1:8000/api/employee/',formdata,{
            headers: {
             'Content-Type': 'multipart/form-data' // do not forget this 
            }});
        if(res.status == 200 || res.status ==201)
        {
            console.log(res.data)
        }
        else
        {
            console.log(res);
        }
    }

    const loadFile = (e)=>{
        console.log("Uploaded");
        console.log(e);
        console.log(e.files[0]);
        
        setEmpInput({
            ...empInput,
            image:e.files[0]
        });

        //To set the image to send to the server
        setImage(e.files[0]);

        //To display the uploaded image
        setUploadFile(URL.createObjectURL(e.files[0]));
        console.log(URL.createObjectURL(e.files[0]));
    }
    const plateColor = useColorModeValue("white","black");
    return(
        <Box bg={plateColor} w='full' p='5'>
            <Heading><Center>Add New Employee</Center></Heading>
            <form onSubmit={submitForm}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='full_name' name='full_name' type='text'/>
                    <FormErrorMessage>Please enter the name</FormErrorMessage>
                </FormControl>
                <FormControl >
                    <FormLabel>Email</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='email' name='email' type='email'/>
                    <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Additional Info</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='additional_info' name='additional_info' type='text'/>
                    <FormErrorMessage>Unit for the item</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Image</FormLabel>
                    {uploadFile&&(<Avatar boxSize={36} id='image_upload' name='image_upload' src={uploadFile} objectFit='scale-down' alt="Person"/>)}
                    <Input id='image' name='image' type='file' onChange={({target})=>loadFile(target)}/>
                    <FormErrorMessage>Upload the image</FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Joined</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='joined' name='joined' type='date'/>
                    <FormErrorMessage>Join Date</FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Salary Amount</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='salary_amount' name='salary_amount' type='number'/>
                    <FormErrorMessage>Amount in Dollars</FormErrorMessage>
                </FormControl>
                <Center><Button type='submit'>Submit</Button></Center>
            </form>
        </Box>
    );
}

export default EmployeeForm;