export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "Hvað fyrirtæki bjó til react?",
    options: ["Google", "Microsoft", "Facebook", "Apple"],
    correctIndex: 2,
  },
  {
    id: 2,
    question: "Hvaða hook er mest notað til að geyma state?",
    options: ["useFetch", "useState", "usePage", "useRoute"],
    correctIndex: 1,
  },
];
