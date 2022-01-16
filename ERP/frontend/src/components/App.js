import React from "react";
import {render} from "react-dom"

function App(){
    return(
        <div>Hello World!</div>
    )
}

const container = document.getElementById("app");
render(<App/>,container);