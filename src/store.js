import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, pickupDataReducer } from './Reducers/DataReducer';

const store = configureStore({
    reducer : {
        DataReducer, pickupDataReducer
    }
})

export default store;