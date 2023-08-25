import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {
state.carts = [...state.carts,action.payload]
console.log(action)
           
        },

        // remove perticular iteams
        removeToCart:(state,action)=>{
          const data = state.carts.filter((ele)=>ele.id  !==action.payload);
          state.carts=data
        },

        // remove single iteams
        removeSingleIteams:(state,action)=>{
            
        },

        // clear cart
        emptycartIteam:(state,action)=>{
            const dataRemove = state.carts.filter((ele)=>ele  !==action.payload);
            state.carts=dataRemove
        }
    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;