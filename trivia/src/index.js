import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import random10Questions4incorrect  from "./service/index.js"
import QuestionBox from "./components/questionBox.js"
import Result from "./components/result.js"

class App extends Component{
  state={
    questionData:[],
     score:0,
     responses:0
  }
  getQuestions=()=>{
    this.setState({questionData: random10Questions4incorrect })
    console.log('random10Questions', random10Questions4incorrect )
  }
  computerAnswer= (answer, correct)=>{
if(answer === correct){
 this.setState({score: this.state.score +1})

}
this.setState({responses:this.state.responses+1})
console.log('score',this.state.score, this.state.responses)
  }

  playAgain=()=>{
console.log('inside playAgain')
    this.setState({responses:0, score:0, questionData:[]})
    this.getQuestions()

  }


  componentDidMount(){
this.getQuestions();
  }
  render(){
    return(
<div className='container'>
<div className='title'>Tandem Trivia</div>
{this.state.questionData.length >0 && 
this.state.responses<10 &&
this.state.questionData.map(({question, incorrect, correct, questionId})=>(
 <QuestionBox 
 question={question} 
 options={incorrect} 
 selected={answer => this.computerAnswer(answer, correct)} 
 key={questionId}/>))
    
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
