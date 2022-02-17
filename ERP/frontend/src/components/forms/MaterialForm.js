import React, {useState, useEffect} from "react";
import axios from "axios";
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
    Image 
 } from "@chakra-ui/react";

function MaterialForm(){

    
    const [uploadFile,setUploadFile] = useState(null);
    const [matInput,setMatInput] = useState(null);
    const [image,setImage] = useState(null);
    

    useEffect(()=>{
        setMatInput(
            {
                item_name:'',
                quantity:'',
                unit:'',
                assetornot:'',
                priceperunit:'',
                category:1,
                seller:1
            }
        )
    },[]);

    const updateField=({name,value})=>{
        setMatInput({
            ...matInput,
            [name]:value
        });
    };

    const submitForm = async (e)=>{
        e.preventDefault();
        console.log(matInput);

        const formdata = new FormData();

        for(const property in matInput)
        {
            // console.log(`${property}:${matInput[property]}`);
            formdata.append(property,matInput[property]);
        }

        if(image)
        {
            formdata.append('image',image,image.name);
        }
        
        const res = await axios.post('http://127.0.0.1:8000/api/item/',formdata,{
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
        
        setMatInput({
            ...matInput,
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
            <Heading><Center>Add New Material</Center></Heading>
            <form onSubmit={submitForm}>
                <FormControl>
                    <FormLabel>Item Name</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='item_name' name='item_name' type='text'/>
                    <FormErrorMessage>Please enter the name of the order</FormErrorMessage>
                </FormControl><FormControl>
                    <FormLabel>Quantity</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='quantity' name='quantity' type='number'/>
                    <FormErrorMessage>Please enter the quantity</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Unit</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='unit' name='unit' type='text'/>
                    <FormErrorMessage>Unit for the item</FormErrorMessage>
                </FormControl>
                    <FormControl>
                        <FormLabel>Image</FormLabel>
                        {uploadFile&&(<Image boxSize={36} id='image_upload' name='image_upload' m={10} src={uploadFile} objectFit='scale-down' alt="Person"/>)}
                        <Input onChange={(({target})=>updateField(target))} id='image' name='images' type='file' onChange={({target})=>loadFile(target)}/>
                        <FormErrorMessage>Upload the image</FormErrorMessage>
                    </FormControl>
                <FormControl>
                    <FormLabel>Is it an asset</FormLabel>
                    <RadioGroup>
                        <Stack direction='row'>
                        <Radio onChange={(({target})=>updateField(target))} value='true' name='assetornot'>Yes</Radio>
                        <Radio onChange={(({target})=>updateField(target))} value='false' name='assetornot'>No</Radio>
                    </Stack>
                    </RadioGroup>
                    <FormErrorMessage>Unit for the item</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Price per Unit</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='priceperunit' name='priceperunit' type='number'/>
                </FormControl>
                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='category' type='text' name='category'/>
                    <FormErrorMessage>Category for the item</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Seller</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='orderName' type='text' name='seller'/>
                    <FormErrorMessage>Please enter the name of the person selling</FormErrorMessage>
                </FormControl>
                <Center><Button type='submit'>Submit</Button></Center>
            </form>
        </Box>  
    );
}

export default MaterialForm;