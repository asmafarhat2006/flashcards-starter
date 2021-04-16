// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const topicSlice = createSlice({
        name : 'topics',
        initialState:{
            topics:{}
        },
        reducers:{
            addTopic: (state, action) => {
                const topicObj = {
                     
                        id: action.payload.id,
                        name: action.payload.name,
                        icon: action.payload.icon,
                        quizIds :[]        
                    
                }
                state.topics[action.payload.id] = topicObj;
              },
              addQuizId: (state,action) => {
                  state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
              }
        }

});
export const selectTopics = (state) => state.topics.topics;
export const {
    addTopic,addQuizId
 } = topicSlice.actions;
export default topicSlice.reducer;