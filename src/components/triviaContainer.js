import React, { Component } from "react";
import random10Questions4incorrect from "../data/index.js";
import QuestionBox from "./questionBox.js";
import Result from "./result.js";
import QuestionCount from "./questionCount.js";


class TriviaContainer extends Component {
  state = {
    questionData: [],
    score: 0,
    responses: 0,
    currentQuestion: 0,
  };
  getQuestions = () => {
    const newQuestions = random10Questions4incorrect();
    this.setState({ questionData: newQuestions });
  };

  computeAnswer = (answer, correct) => {
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({ responses: this.state.responses + 1 });
    this.setNextQuestion();
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0, currentQuestion: 0 });
    console.log("inside playAgain, new data", this.state.questionData);
  };
  setNextQuestion = () => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
    }));
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const current = this.state.questionData[this.state.currentQuestion];

    return (
     <div>
          {this.state.responses === 10 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
        {this.state.questionData.length > 0 && this.state.responses < 10 && (
          <QuestionBox
            question={current.question}
            options={current.incorrect}
            selected={(answer) => this.computeAnswer(answer, current.correct)}
            key={current.questionId}
          />
        )}
         {this.state.responses < 10 ? (
          <QuestionCount
            counter={this.state.responses}
            total={this.state.questionData.length}
          />
        ) : null}

     
    </div>
    );
  }
}
export default TriviaContainer