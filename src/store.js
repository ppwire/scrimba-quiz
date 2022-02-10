import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from './slice/QuizSlice'

export default configureStore({
   reducer: {
      quiz: QuizReducer
   }
})