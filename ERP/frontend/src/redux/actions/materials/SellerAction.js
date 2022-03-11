import { LOAD_SELLER } from "../../types";
import axios from "axios";
export const loadSeller  =()=>{
    return (dispatch)=>{
        axios.get('http://127.0.0.1:8000/api/seller')
        .then(response=>{
            const val = response.data;
            dispatch(setLoadedSeller(val));
        })
        .catch(error=>{
            dispatch(setLoadedSeller(["one","two"]));
        })
    };
}

export const setLoadedSeller = (data)=>{
    return {
        type: LOAD_SELLER,
        data: data
    }
}

// export const addItemCat = ()=>{
//     return {
//         type: ADD_SELLER,
//         data: "onemore"
//     }
// }