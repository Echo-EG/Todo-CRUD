import {configureStore}  from "@reduxjs/toolkit";
import todoReducer from './slice.js';

export default  configureStore({

    reducer: {
        todos: todoReducer
    },
})