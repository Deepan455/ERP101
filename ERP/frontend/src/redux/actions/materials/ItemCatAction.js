import { ADD_ITEM_CAT, LOAD_ITEM_CAT } from "../../types";
import axios from "axios";
export const loadItemCat  =()=>{
    return (dispatch)=>{
        axios.get('http://127.0.0.1:8000/api/itemcat/')
        .then(response=>{
            const val = response.data;
            console.log("From success");
            dispatch(setLoadedItemCat(response.data));
        })
        .catch(error=>{
            console.log("From failure");
            dispatch(setLoadedItemCat(["one","two"]));
        })
    };
}

export const setLoadedItemCat = (data)=>{
    return {
        type: LOAD_ITEM_CAT,
        data: data
    }
}

// export const addItemCat = ()=>{
//     return {
//         type: ADD_ITEM_CAT,
//         data: "onemore"
//     }
// }