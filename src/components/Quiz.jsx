import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuiz } from "../slice/QuizSlice";
import QuizItem from './QuizItem'


const Quiz = () => {
   const { quizList: quizList, loading: loading } = useSelector(state => state.quiz)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getQuiz())
   }, [])

   return (
      <div>
         {loading ? 'loading...' :
            quizList.map((el, index) => {
               return <QuizItem key={index} question={el.question}></QuizItem>
            })
         }
      </div>
   );
}

export default Quiz