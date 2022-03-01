import { ADD_ITEM_CAT, LOAD_ITEM_CAT } from "../../types/materialTypes";
import axios from "axios";
export const loadItemCat = async()=>{
    const res = await axios.get('http://127.0.0.1:8000/api/itemcat/');
    console.log(res.data);
    const val = res.data;

    if(res.status == 200)
    {
        return {
            type: LOAD_ITEM_CAT,
            data: val
        }
    }

    else
    {
        return {
            type: LOAD_ITEM_CAT,
            data: ["one","two"]
        }
    }
}

export const addItemCat = ()=>{
    return {
        type: ADD_ITEM_CAT,
        data: "onemore"
    }
}