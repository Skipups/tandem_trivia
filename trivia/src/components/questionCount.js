import React from "react" 



const QuestionCount =({counter, total}) =>{

  return(
    <div className ="questionCount">
      Question {counter} of {total}
    </div>
  )
}

export default QuestionCount