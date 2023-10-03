import { createSlice  } from "@reduxjs/toolkit";
import data1 from '../Data/Data.json';



const Slice = createSlice({
    name:"carData",
    initialState: {
        data : [],
        numberOfPages:10,
        page:1,
    },
    reducers : {
        getData(state , action){
            const sliceData = data1.slice(0,6);
            return { ...state , data : sliceData};
        },
        getDataByID(state , action){
           
            const startIndex = (Number(action.payload) - 1) * 6;
            const endIndex = startIndex + 6;
            const slicedData = data1.slice(startIndex, endIndex);
           
            return { ...state, data: slicedData };
        },
        searchData(state , action ) {
            return { ...state , data : data1.filter((data) => data.name === action.payload)}
        }
    }
})



export const {getData , searchData, getDataByID} = Slice.actions;
export default Slice.reducer;