import { SET_MATERIAL } from "../../types/materialTypes";

const initialState = {
    item_name:'',
    quantity:'',
    unit:'',
    assetornot:'',
    priceperunit:'',
    category:'',
    seller:''
}

export const MaterialReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case SET_MATERIAL:
            return {
                ...state
            }

        default:
            return state
    }
}