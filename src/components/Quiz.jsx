import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnswer } from "../slice/QuizSlice";
import QuizItem from './QuizItem'
import styles from './Quiz.module.css';


const Quiz = () => {
   const { quizList: quizList, loading: loading } = useSelector(state => state.quiz)
   const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(getQuiz())
   // }, [])

   function onUpdateQuiz(answer, id) {
      console.log(answer, id)
      dispatch(updateAnswer({ answer: answer, id: id }))
   }

   return (
      <div className={styles.container}>
         {loading ? 'loading...' :
            <div>
               {quizList.map((el, index) => {
                  return <QuizItem key={index} question={el.question} choices={el.choices} id={index} answer={el.answer}
                     updateAnswer={onUpdateQuiz}
                  ></QuizItem>
               })}
               <div className={styles.btn__flex}>
                  <button className={styles.btn}><h3>SEND</h3></button>
               </div>
            </div>
         }
      </div>
   );
}

export default Quiz