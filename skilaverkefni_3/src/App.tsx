import { useState } from "react";
import Question from "./components/Question";
import { questions } from "./data/questions";
import "./styles/style.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );

  const selectedAnswer = answers[currentQuestion];

  function handleAnswer(selectedIndex: number) {
    if (selectedAnswer !== null) return;

    const updateAnswer = [...answers];
    updateAnswer[currentQuestion] = selectedIndex;

    setAnswers(updateAnswer);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    });
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function resetQuiz() {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
  }

  const score = answers.filter(
    (answer, index) => answer === questions[index].correctIndex,
  ).length;

  const allAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="app">
      <div className="quiz-box">
        <h1>React Quiz</h1>

        <Question
          questionData={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
          noAnswer={handleAnswer}
        />

        <div className="navigation">
          <button onClick={previousQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>

          <button onClick={resetQuiz}>Reset</button>
        </div>

        {allAnswered && (
          <div>
            <h2>Quiz finished!</h2>

            <p>
              Þú fékkst {score} af {questions.length} rétt.
            </p>

            <p>
              {score >= 8
                ? "Frábært!"
                : score >= 5
                  ? "Vel gert!"
                  : "Þú þarft aðeins meiri React æfingu!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
