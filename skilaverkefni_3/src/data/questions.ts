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
  {
    id: 3,
    question: "Hvaða ending er of notuð fyrir React TypeScript component?",
    options: [".jsx", ".html", ".tsx", ".css"],
    correctIndex: 2,
  },
  {
    id: 4,
    question: "Hvað gerir onClick event handler?",
    options: [
      "Keyrir fall þegar smellt er",
      "Breytir CSS",
      "Lokar appinu",
      "Býr til database",
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    question: "Hvaða hook er notað fyrir side effects?",
    options: ["useCSS", "useEffect", "useColor", "usePage"],
    correctIndex: 1,
  },
  {
    id: 6,
    question: "Hvaða function er oft notað til að birta lista í React?",
    options: ["filter()", "find()", "map()", "push()"],
    correctIndex: 2,
  },
  {
    id: 7,
    question: "Hvaða prop þarf React element í lista að hafa?",
    options: ["name", "index", "style", "key"],
    correctIndex: 3,
  },
  {
    id: 8,
    question: "Hvaða skipun keyrir React development server í Vite?",
    options: ["npm start", "npm build", "npm run dev", "npm create"],
    correctIndex: 2,
  },
  {
    id: 9,
    question: "Hvað er JSX?",
    options: [
      "Database language",
      "CSS framework",
      "HTML-líkur syntax fyrir React",
      "Backend server",
    ],
    correctIndex: 2,
  },
  {
    id: 10,
    question: "Af hverju er TypeScript gagnlegt í React?",
    options: [
      "Gerir appið hægara",
      "Bætir type safety",
      "Eyðir CSS",
      "Skiptir út HTML",
    ],
    correctIndex: 1,
  },
];
