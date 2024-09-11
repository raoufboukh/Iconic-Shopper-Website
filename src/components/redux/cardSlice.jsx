import { createSlice } from "@reduxjs/toolkit";

function local(ar){
    localStorage.setItem('card',JSON.stringify(ar));
}
let cards = [];

if(localStorage.getItem('card')){
    cards = JSON.parse(localStorage.getItem('card'));
}
export const cardSlice = createSlice({
    initialState:cards,
    name:'cardSlice',
    reducers:{
        setCards:(state,action)=>{
            const findCard = state.find(card => card.id === action.payload.id);
            if(findCard){
                findCard.quantite +=1;
                local(state)
            }else{
                state.push({...action.payload,quantite:1})
                local(state);
            }
        },
        deleteCard: (state,action)=>{
            state = state.filter(card => card.id !== action.payload.id);
            local(state);
            return state;
        }
    }
})


export const {setCards,deleteCard} = cardSlice.actions;
export default cardSlice.reducer;