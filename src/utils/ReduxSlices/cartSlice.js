import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: ['Banana'],
    },
    //modify my cart using reducer function
    reducers:{          //these reducers are called on dispatch of an action
        // addItem is the action and along with it is the reducer function
        addItem:(state, action)=>{       //reducer function contains state and action as the argument, 
            //state is the initial state. 
            //action is the data which is coming in.
            state.items.push(action.payload);   // state here is always the previous state // is there is nothing in the state it would be similar to initial state
            // as in when we change data into our cart it will change the current value of the state.
            console.log(action.payload)
            //this function does not return anything from here
        },
        clearCart:(state, action) =>{
            state.items = []
        },
        removeItem:(state, action) =>{
            state.items.pop();
        }
    }
})

//Export actions and reducers
export const {addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer; //this will combine all the reducers and make it as a one reducer
