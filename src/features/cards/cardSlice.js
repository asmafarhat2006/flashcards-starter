// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const cardSlice = createSlice({
        name : 'cards',
        initialState:{
            cards:{}
        },
        reducers:{
            addCard: (state, action) => {
                const cardObj = {
                     
                        id: action.payload.id,
                        front: action.payload.front,
                        back: action.payload.back
                    
                }
                state.cards[action.payload.id] = cardObj;
              }
        }

});
export const selectCards = (state) => state.cards.cards;
export const {
    addCard
 } = cardSlice.actions;
export default cardSlice.reducer;