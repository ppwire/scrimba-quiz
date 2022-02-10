import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getQuiz = createAsyncThunk(
   'get/quiz',
   async (args, thunkAPI) => {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
         .then((res) => {
            return res.json()
         })
      console.log(response)
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
      addNewItem: state => {
         state.quizList.push('ttest')
      },
      deleteItem: state => {
         state.quizList.splice(0, 1)
      }
   },
   extraReducers: {
      [getQuiz.pending]: (state) => {
         state.loading = true
      },
      [getQuiz.fulfilled]: (state, { payload }) => {
         state.loading = false
         state.quizList = payload.results
      },
      [getQuiz.rejected]: (state) => {
         state.loading = false
      },
   }
})

export { getQuiz }
export const { addNewItem, deleteItem } = quizSlice.actions
export default quizSlice.reducer


