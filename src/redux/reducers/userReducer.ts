import {createSlice } from '@reduxjs/toolkit';

 const slice = createSlice({
    name: 'user',
    initialState:{
        name: 'Fábio',
        age: 35
    },
    reducers: {
        setName: (state, action) => {   //recebe o estado original ...
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
});


export const{setName, setAge } = slice.actions;
export default slice.reducer;