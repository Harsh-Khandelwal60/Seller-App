import { configureStore } from "@reduxjs/toolkit";
import Slice from './CarData'

const store = configureStore({
    reducer:{
       carData : Slice,
    },
});

export default store;