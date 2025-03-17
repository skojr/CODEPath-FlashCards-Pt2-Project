import { useState } from "react";
import "./App.css";
import FlashCards from "./FlashCards";

const starterFlashcards = [
  {
    question: "What is the SI unit of energy?",
    answer: "Joule",
    color: "green",
  },
  {
    question: "What is the law of conservation of energy?",
    answer: "Energy cannot be created or destroyed",
    color: "yellow",
  },
  {
    question: "What is kinetic energy's formula?",
    answer: "0.5mv^2",
    color: "yellow",
  },
  {
    question: "What is potential energy's formula?",
    answer: "mgh",
    color: "yellow",
  },
  {
    question: "What does 'work' mean in physics?",
    answer: "Fd",
    color: "green",
  },
  {
    question: "What is power in physics?",
    answer: "Power is the rate of energy transfer",
    color: "yellow",
  },
  {
    question: "What type of energy does a stretched rubber band have?",
    answer: "Elastic potential energy",
    color: "green",
  },
  {
    question:
      "What happens to total mechanical energy in a frictionless system?",
    answer: "It remains constant",
    color: "red",
  },
  {
    question: "What is efficiency in terms of energy?",
    answer: "Efficiency = (Useful Energy Output / Total Energy Input) × 100%",
    color: "red",
  },
  {
    question: "What is the unit of power?",
    answer: "Watt",
    color: "green",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState(null);
  const [flashcards, setFlashcards] = useState(starterFlashcards);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0); 

  const handleSubmit = (event) => {
    if (guess.toLowerCase() == flashcards[index].answer.toLowerCase()) {
      setCorrectGuess(true);
      alert("Correct! 😎");
      setCurrentStreak(currentStreak + 1);
      if (currentStreak >= longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else {
      setCorrectGuess(false);
      alert("Incorrect ☹️");
      setCurrentStreak(0);
    }
    event.preventDefault();
  };

  const onNextClick = () => {
    setIndex((index + 1) % 10);
    setGuess("");
    setCorrectGuess(null);
  };

  const onPrevClick = () => {
    setIndex(Math.abs(index - 1) % 10);
    setGuess("");
    setCorrectGuess(null);
  };

  const onShuffleClick = () => {
    const shuffled = [...flashcards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setFlashcards(shuffled);
    setIndex(0);
  };

  return (
    <div className="app-container">
      <h1 className="text-2xl font-bold mb-4">Physics Quiz FlashCards</h1>
      <h2>
        Study for your physics quiz on Energy and Work with these 10 flashcards.
      </h2>
      <h2>Green=Easy, Yellow=Medium, Red=Hard</h2>
      <h2>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</h2>
      <FlashCards
        question={flashcards[index].question}
        answer={flashcards[index].answer}
        color={flashcards[index].color}
      />
      <div className="button-container">
        <button
          className="button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={onPrevClick}
        >
          Prev
        </button>
        <button
          className="button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={onNextClick}
        >
          Next
        </button>
        <button
          className="button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={onShuffleClick}
        >
          Shuffle Cards
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={`input-container ${
            correctGuess === null
              ? "border-gray-500"
              : correctGuess
              ? "border-green-500"
              : "border-red-500"
          }`}
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
