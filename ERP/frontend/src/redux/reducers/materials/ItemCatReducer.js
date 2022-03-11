// const initialState = [];

import { ADD_ITEM_CAT, LOAD_ITEM_CAT } from "../../types/materialTypes";

export const ItemCatReducer = (state = [], action)=>{
    const {type,...data} = action;
    console.log("Into reducer");
    switch(action.type)
    {
        case LOAD_ITEM_CAT:
            console.log("From load reducer");
            return action.data;
        
        case ADD_ITEM_CAT:
            console.log("From add reducer");
            return [
                ...state,
                action.data
            ];
        
        default:
            return state;
    }
}