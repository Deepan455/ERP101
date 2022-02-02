import React from "react";
import {render} from "react-dom"
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import Dashboard from "./Dashboard";
import theme from "./common/Theme";

function App(){
    return(
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Dashboard/>
        </ChakraProvider>
    )
}

const container = document.getElementById("app");
render(<App/>,container);