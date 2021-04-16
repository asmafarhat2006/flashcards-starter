// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { addQuizId } from '../topics/topicSlice';
export const addQuizThunk = (payload) => {
    return (dispatch) => {
      dispatch(addQuiz(payload));
      dispatch(addQuizId({topicId : payload.topicId,quizId:payload.id}));
    };
};

export const quizSlice = createSlice({
        name : 'quizzes',
        initialState:{
            quizzes:{}
        },
        reducers:{
            addQuiz: (state, action) => {
                const quizObj = {
                     
                        id: action.payload.id,
                        name: action.payload.name,
                        topicId: action.payload.topicId,
                        cardIds :action.payload.cardIds      
                    
                }
                state.quizzes[action.payload.id] = quizObj;
              },
        }

});
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {
    addQuiz
 } = quizSlice.actions;
export default quizSlice.reducer;