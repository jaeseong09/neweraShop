import { configureStore,createSlice } from '@reduxjs/toolkit'


let cartData = createSlice({
  name: 'cartData',
  initialState:
  [
  {id : 10, name : 'White and Black', count : 2},
  {id : 11, name : 'Grey Yordan', count : 1}
  ],
  reducers:{
    changeCount(state,action){
      const item = state.find(cart => cart.id === action.payload);
      if(item){
        item.count++;
      }
    },
    additionState(state,action){
      state.push(action.payload)
    }
  }
})

export default configureStore({
  reducer: {
    cartData:cartData.reducer
  }
}) 

export let {changeCount,additionState}= cartData.actions