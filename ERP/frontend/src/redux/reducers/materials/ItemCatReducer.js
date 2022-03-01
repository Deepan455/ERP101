// const initialState = [];

import { ADD_ITEM_CAT, LOAD_ITEM_CAT } from "../../types/materialTypes";

export const ItemCatReducer = (state = [], action)=>{
    const {type,...data} = action;
    switch(action.type)
    {
        case LOAD_ITEM_CAT:
            return action.data
        
        case ADD_ITEM_CAT:
            return [
                ...state,
                action.data
            ]
        
        default:
            return state;
    }
}