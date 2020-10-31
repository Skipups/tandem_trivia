import React from "react";

const QuestionCount = ({ counter, total }) => {
  return (
    <div className="questionCount">
      Question {counter < 10 ? counter + 1 : 10} of {total}
    </div>
  );
};

export default QuestionCount;
