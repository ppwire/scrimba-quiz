import styles from './QuizItem.module.css'


const QuizItem = ({ question, answer, choices, id, updateAnswer, isFinish, correctAnswer }) => {

   function displayColor(payload) {
      if (isFinish) {
         if (answer === correctAnswer && payload === answer) {
            return styles.question__choices__correct
         } else if (payload === answer) {
            return styles.question__choices__incorrect
         }else{
            return styles.question__choices__disabled
         }
      } else {
         if (payload === answer) {
            return styles.question__choices__selected
         } else {
            return styles.question__choices
         }
      }
   }

   const Choices = () => {
      let result = []
      choices.map((el, index) => {
         result.push(<span key={index} className={displayColor(el)} onClick={() => updateAnswer(el, id)} dangerouslySetInnerHTML={{ __html: el }}></span>)
      })
      return result
   }

   return (
      <div className={styles.question}>
         <h3 className={styles.question__title} dangerouslySetInnerHTML={{ __html: question }}></h3>
         <div className={styles.question__group}>
            <Choices></Choices>
         </div>
         <div className={styles.line}></div>
      </div>
   )
}

export default QuizItem