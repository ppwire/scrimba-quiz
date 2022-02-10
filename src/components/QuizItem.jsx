import styles from './QuizItem.module.css'

const QuizItem = ({ question, answers, choices }) => {

   // const Choices = () => {
   //    choices.map((el, index) => {
   //       return <div key={index}>{el}</div>
   //    })
   // }

   return (
      <div>
         <h2>{question}</h2>
         {/* <Choices></Choices> */}
      </div>
   )
}

export default QuizItem