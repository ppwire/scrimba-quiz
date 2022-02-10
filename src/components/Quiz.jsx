import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnswer, getQuiz } from "../slice/QuizSlice";
import QuizItem from './QuizItem'
import styles from './Quiz.module.css';


const Quiz = () => {
   const { quizList: quizList, loading: loading } = useSelector(state => state.quiz)
   const [isFinish, setIsFinish] = useState(false)
   const [isAlert, setIsAlert] = useState(false)
   const [score, setScore] = useState(0)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getQuiz())
   }, [])

   function onUpdateQuiz(answer, id) {
      if (!isFinish) dispatch(updateAnswer({ answer: answer, id: id }))
   }

   function checkAnswer() {
      if (!isFinish) {
         if (quizList.find(el => !el.answer)) {
            setIsAlert(true)
            return
         }
         const score = quizList.filter(el => el.answer === el.correct_answer).length
         setScore(score)
         setIsFinish(true)
      } else {
         setIsFinish(false)
         setIsAlert(false)
         setScore(0)
         dispatch(getQuiz())
      }
   }

   function getScore() {
      return `You scored ${score}/${quizList.length} correct answers`
   }

   return (
      <div className={styles.container}>
         {loading ? 'loading...' :
            <div>
               {quizList.map((el, index) => {
                  return <QuizItem key={index} question={el.question} choices={el.choices} id={el.id} answer={el.answer}
                     updateAnswer={onUpdateQuiz} isFinish={isFinish} correctAnswer={el.correct_answer}
                  ></QuizItem>
               })}
               {(isAlert && !isFinish) && <div className={`${styles.alert} ${styles.spacer__bottom}`}>
                  Please answer all your question
               </div>}
               <div className={styles.btn__flex}>
                  {isFinish && <span className={styles.score__msg}>{getScore()}</span>}
                  <button className={styles.btn} onClick={checkAnswer}>
                     <h3>{isFinish ? 'Play again' : "Check answer"}</h3>
                  </button>
               </div>
            </div>
         }
      </div>
   );
}

export default Quiz