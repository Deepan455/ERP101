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

function App(){
    return(
        <Router>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Routes>
                    <Route path="/" element={<Dashboard/>}>
                        <Route path="" element={<Content/>}/>
                        <Route path="inventory" element={<Inventory/>}/>
                        <Route path="order" element={<Order/>}/>
                        <Route path="employee" element={<Employee/>}/>
                    </Route>
                </Routes>
            </ChakraProvider>
        </Router>
    );
}

const container = document.getElementById("app");
render(<App/>,container);