import type { QuestionType } from "../data/questions";

type QuestionProps = {
  questionData: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  noAnswer: (selectedIndex: number) => void;
};

function Question({
  questionData,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  noAnswer,
}: QuestionProps) {
  function getButtonClass(index: number) {
    if (selectedAnswer === null) return "";

    if (index === questionData.correctIndex) {
      return "correct";
    }

    if (index === selectedAnswer) {
      return "wrong";
    }

    return "";
  }

  return (
    <div>
      <p className="progress">
        Spurning {questionNumber} af {totalQuestions}
      </p>

      <h2>{questionData.question}</h2>

      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={option}
            className={getButtonClass(index)}
            onClick={() => noAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <p className="locked-text">Þú hefur svarað þessari spurningu</p>
      )}
    </div>
  );
}

export default Question;
