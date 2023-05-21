import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  count: number;
}

const initialState: IinitialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.count += 1;
    },
    minusCounter: (state) => {
      state.count -= 1;
    },
    addManyCounter: (state, actions) => {
      state.count = actions.payload + state.count;
    },
  },
});
export const { addCounter, addManyCounter, minusCounter } =
  counterSlice.actions;

//   export const exampleSlice=()=(dispatch)=>{
//     const result= fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//   }
export default counterSlice.reducer;
