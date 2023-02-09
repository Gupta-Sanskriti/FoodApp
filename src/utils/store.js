import {configureStore} from "@reduxjs/toolkit"  //rtk -- redux toolkit
import cartSlice from "./ReduxSlices/cartSlice";


const store = configureStore({
    reducer:{   //singular jargon
        cart: cartSlice,    //name of the slice
    }

});

export default store;