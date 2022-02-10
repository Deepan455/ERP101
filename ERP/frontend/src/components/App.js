import React from "react";
import {render} from "react-dom";
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import Dashboard from "./Dashboard";
import theme from "./common/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inventory from "./Inventory";
import Employee from "./Employee";
import Order from "./Order";
import Content from "./common/Content";
import AMaterial from "./individuals/AMaterial";
import AnOrder from "./individuals/AnOrder";
import Error from "./common/error";
import AProduct from "./individuals/AProduct";

function App(){
    return(
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Routes>
                <Route path="/app" element={<Dashboard/>}>
                    <Route path="/app" element={<Content/>}/>
                    <Route path="/app/inventory" element={<Inventory/>}/>
                    <Route path="/app/order" element={<Order/>}/>
                    <Route path="/app/employee" element={<Employee/>}/>
                    <Route path="/app/material/*" element={<AMaterial/>}/>
                    <Route path="/app/order/*" element={<AnOrder/>}/>
                    <Route path="/app/product/*" element={<AProduct/>}/>
                </Route>
                <Route path="/Materialone" element={<AMaterial/>}/>
                <Route path="*" element={<Dashboard/>}>
                    <Route path="*" element = {<Error/>}/>
                </Route>
            </Routes>
        </ChakraProvider>
    );
}

const container = document.getElementById("app");
render(<Router><App/></Router>,container);