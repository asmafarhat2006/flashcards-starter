import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicSlice";
import quizzesReducer from "../features/quizzes/quizSlice";
import cardsReducer from "../features/cards/cardSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer

  },
});
