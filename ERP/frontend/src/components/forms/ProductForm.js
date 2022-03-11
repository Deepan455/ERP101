import React,{useState, useEffect, useReducer} from "react";
import { 
    Box,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Select,
    Button,
    Center,
    useColorModeValue,
    Heading,
    Image
 } from "@chakra-ui/react";
 import { FiX } from "react-icons/fi";

function ProductForm(){

    const materialReducer = (state,action)=>{
        // console.log("reduced");
        let updated = new Set(state);
        switch(action.type)
        {
            case "add":
                
                action.data.forEach((one)=>{
                    updated.add(one);
                }
                );
                return Array.from(updated);
            
            case "remove":
                action.data.forEach((one)=>{
                    updated.delete(one);
                }
                );
                return Array.from(updated);
        }
    }

    
    const [uploadFile,setUploadFile] = useState(null);
    const [prodInput,setProdInput] = useState(null);
    const [materials,setMaterials] = useReducer(materialReducer,[]);
    // const [materials,setMaterials] = useState();
    const [image,setImage] = useState(null);
    
    
    useEffect(()=>{
        setProdInput(
            {
                item_name:'',
                product_name: '',
                inventory: 0,
                unit: '',
                desc: '',
                isVariation: false,
            }
        )
    },[]);

    const updateField=({name,value})=>{
        setProdInput({
            ...prodInput,
            [name]:value
        });
    };

    const submitForm = async (e)=>{
        e.preventDefault();
        console.log(prodInput);

        const formdata = new FormData();

        for(const property in prodInput)
        {
            // console.log(`${property}:${prodInput[property]}`);
            formdata.append(property,prodInput[property]);
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
        
        setProdInput({
            ...prodInput,
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
        <Box w='full' display='flex' justifyContent='space-evenly' flexWrap='wrap'>
            <Box w='100%' p='5'><Center><Heading>New Product</Heading></Center></Box>
            <Box bg={plateColor} w='50%' p='5'>
                
                <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='productName' name='productName' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Inventory</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='productName' name='productName' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Unit</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='productName' name='productName' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Image</FormLabel>
                    {uploadFile&&(<Image boxSize={36} id='image_upload' name='image_upload' src={uploadFile} objectFit='scale-down' alt="Person"/>)}
                    <Input id='images' name='images' type='file' onChange={({target})=>loadFile(target)}/>
                    <FormErrorMessage>Upload the image</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='productName' name='productName' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

            </Box>

            <Box bg={plateColor} w='30%' p='5' overflow='scroll'>
                <Heading size='md'>Materials</Heading>
                <Box>
                    {materials?.map((mat)=>{
                        return <Box border='1px solid black' display='flex' justifyContent="space-between" p="2" marginY="2">{mat}<Button size="xs" onClick = {(({target})=>setMaterials({type:"remove",data:[mat]}))}><FiX size={12}/></Button></Box>
                    })}
                </Box>
                <FormControl>
                    <FormLabel>Choose the materials</FormLabel>
                    <Select onChange = {(({target})=>setMaterials({type:"add",data:[target.value]}))} placeholder='Select an option' height='auto'>
                        <option value='recieved'>Product 1</option>
                        <option value='inProgress'>Product 2</option>
                        <option value='completed'>Product 3</option>
                        <option value='inProgress'>Product 4</option>
                        <option value='completed'>Product 5</option>
                    </Select>
                </FormControl>
            </Box>
            <Box w='85%' p='5' bg={plateColor} m='10'><Center><Button>Submit</Button></Center></Box>
        </Box>
    );
}

export default ProductForm;