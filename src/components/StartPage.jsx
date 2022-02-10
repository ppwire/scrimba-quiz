import { Link } from "react-router-dom";
import styles from './StartPage.module.css'
const StartPage = () => {
   return (
      <div className={styles.container} >
         <h1>Quizzical</h1>
         <h2>A Simple random quiz from trivia API</h2>
         <Link to="/quiz">
            <button className={styles.btn}>
               <h3>Start</h3>
            </button>
         </Link>
      </div>
   )
}

export default StartPage