import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import random10Questions4incorrect  from "./data/index.js"
import QuestionBox from "./components/questionBox.js"
import Result from "./components/result.js"
import QuestionCount from "./components/questionCount.js"

class App extends Component{
  state={
    questionData:[],
     score:0,
     responses:0,
     currentQuestion:0
  }
getQuestions=()=>{  this.setState({questionData: random10Questions4incorrect })
    console.log('random10Questions', random10Questions4incorrect )
  }
computerAnswer= (answer, correct)=>{
   if(answer === correct){
  this.setState({score: this.state.score +1})
  }
this.setState({responses:this.state.responses+1})
console.log('score',this.state.score, this.state.responses)
this.setNextQuestion()
  }

playAgain=()=>{
 
  this.getQuestions()
    this.setState({ questionData:[],
      score:0,
      responses:0,
      currentQuestion:0})
      console.log('inside playAgain, new data', this.state.questionData)

  }
  setNextQuestion=()=>{
this.setState(prevState=>({
  currentQuestion: prevState.currentQuestion +1
}))
 
  }

componentDidMount(){
this.getQuestions();
  }

render(){
  const current = this.state.questionData[this.state.currentQuestion]
  console.log('current', current)
    return(
<div className='container'>
<div className='title'>Tandem Trivia</div>
<QuestionCount counter={this.state.responses} total={this.state.questionData.length }/>

 {this.state.questionData.length >0 && 
this.state.responses<10 &&

 <QuestionBox 
 question={current.question} 
 options={current.incorrect} 
 selected={answer => this.computerAnswer(answer, current.correct)} 

 key={current.questionId}/>
    
} 

{this.state.responses === 10 ? <Result score={this.state.score} playAgain={this.playAgain}/>: null}
</div>
    )
}

}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
