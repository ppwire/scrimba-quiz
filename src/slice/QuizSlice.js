import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const getQuiz = createAsyncThunk(
   'get/quiz',
   async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
         .then((res) => {
            return res.json()
         })
      return response
   }
)

export const quizSlice = createSlice({
   name: "quiz",
   initialState: {
      quizList: [],
      loading: false
   },
   reducers: {
      updateAnswer: (state, action) => {
         const newArray = state.quizList.map(el => {
            if (el.id === action.payload.id) {
               return { ...el, answer: action.payload.answer }
            }
            return el
         })
         state.quizList = newArray
      }
   },
   extraReducers: {
      [getQuiz.pending]: (state) => {
         state.loading = true
      },
      [getQuiz.fulfilled]: (state, { payload }) => {
         state.loading = false
         state.quizList = payload.results

         function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {

               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex--;

               [array[currentIndex], array[randomIndex]] = [
                  array[randomIndex], array[currentIndex]];
            }
            return array;
         }

         for (let quiz of state.quizList) {
            quiz.choices = quiz.incorrect_answers.concat(quiz.correct_answer)
            quiz.answer = ""
            quiz.id = nanoid()
            shuffle(quiz.choices)
         }
      },
      [getQuiz.rejected]: (state) => {
         state.loading = false
      },
   }
})

export { getQuiz }
export const { updateAnswer, setQuizList } = quizSlice.actions
export default quizSlice.reducer


