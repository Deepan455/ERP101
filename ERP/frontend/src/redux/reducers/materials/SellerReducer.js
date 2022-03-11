import { LOAD_SELLER } from "../../types/sellerTypes";


export const SellerReducer = (state = [], action)=>{
    const {type,...data} = action;
    switch(action.type)
    {
        case LOAD_SELLER:
            return action.data;
        
        default:
            return state;
    }
}