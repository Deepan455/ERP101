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
 import axios from 'axios';

function ProductForm(){

    const materialReducer = (state,action)=>{
        console.log("reduced",state);
        let updated = state;
        switch(action.type)
        {
            case "add":
                let incdata = JSON.parse(action.data);
                let count=0;
                updated.map((dat)=>{
                    if(dat.id === incdata.id)
                    {
                        count++;
                    }
                })
                if(count==0)updated.push(incdata);
                return Array.from(updated);
            
            case "remove":
                console.log("actionindex",action.index);
                updated.splice(action.index,1);
                console.log("removed",updated);
                return Array.from(updated);
            
            case "addQuantity":
                let indata = JSON.parse(action.data);
                updated.forEach((dat)=>{
                    if(dat.id === indata.id)
                    {
                        dat.selectQuantity = action.quantity;
                        console.log(dat);
                        return dat;
                        // count++;
                    }
                    else{
                        return dat;
                    }
                })

            
            default:
                return state;
        }
        // return state+"hello";
    }
    
    const [uploadFile,setUploadFile] = useState(null);
    const [prodInput,setProdInput] = useState(null);
    const [materials,setMaterials] = useReducer(materialReducer,[]);
    const [materialOption,setMaterialOption] = useState();
    // const [materials,setMaterials] = useState();
    const [image,setImage] = useState(null);    
    
    useEffect(async ()=>{
        setProdInput(
            {
                product_name:'',
                inventory: 0,
                unit: '',
                desc: '',
                isVariation: false,
            }
        );
        
        const materialOptionResponse = await axios.get('http://127.0.0.1:8000/api/item/');
        if(materialOptionResponse.status == 200)
        {
            console.log("material Response",materialOptionResponse.data);
            setMaterialOption(materialOptionResponse.data);
        }
        else
        {
            alert("some error in material option fetch");
        }
    },[]);

    const updateField=({name,value})=>{
        console.log("Updated");
        console.log("name",name);
        console.log("value",value);
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
            formdata.append('images',image,image.name);
        }

        const mainData = new FormData();
        mainData.append('product',formdata);
        mainData.append('items',materials.map((mat)=>
        {

            return {
                quantity:mat.selectQuantity,
                item:mat.id
            }
        }))

        // for (var value of formdata.values()) {
        //     console.log(value);
        // }

        // for(var pair of mainData.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        //  }
        const res = await axios.post('http://127.0.0.1:8000/api/product/',mainData,{
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
                    <Input onChange={(({target})=>updateField(target))} id='productName' name='product_name' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Inventory</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='inventory' name='inventory' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Unit</FormLabel>
                    <Input onChange={(({target})=>updateField(target))} id='unit' name='unit' type='text'/>
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
                    <Input onChange={(({target})=>updateField(target))} id='desc' name='desc' type='text'/>
                    <FormErrorMessage>Please enter the name of the product</FormErrorMessage>
                </FormControl>

            </Box>

            <Box bg={plateColor} w='40%' p='5' overflow='scroll'>
                <Heading size='md'>Materials</Heading>
                <Box maxHeight="64" overflow='scroll'>
                {materials?.map((mat,index)=>{
                        return <Box border='1px solid black' key={mat.id} p="1" marginY="2">
                                <Box display='flex' justifyContent="space-between" p="2" marginY="1">
                                    {mat.item_name}
                                    <Button size="xs" onClick = {(({target})=>setMaterials({type:"remove",data:mat,index:index}))}><FiX size={12}/></Button>
                                </Box>
                                <Box>
                                    <Input type='number' size="xs" w="70%" marginX="2" required onChange = {(({target})=>setMaterials({type:"addQuantity",data:JSON.stringify(mat),quantity:target.value}))}></Input>{mat.unit}
                                </Box>
                            </Box>
                    })||"hello"}
                </Box>
                <FormControl>
                    <FormLabel>Choose the materials</FormLabel>
                    <Select onChange = {(({target})=>setMaterials({type:"add",data:target.value})  )} placeholder='Select an option' height='auto'>
                        {materialOption?.map((opt)=>{
                            return <option value={JSON.stringify(opt)} key={opt.id}>{opt.item_name}</option>
                            }
                        )}
                    </Select>
                </FormControl>
            </Box>
            <Box w='85%' p='5' bg={plateColor} m='10'><Center><Button onClick={submitForm}>Submit</Button></Center></Box>
        </Box>
    );
}

export default ProductForm;