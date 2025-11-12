import { create } from 'zustand';
import { quizData, Question, QuizCategory } from '@/data/quiz-data';
type GameStatus = 'selecting_category' | 'in_progress' | 'finished';
interface QuizState {
  gameStatus: GameStatus;
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  selectedCategory: QuizCategory | null;
  score: number;
}
interface QuizActions {
  selectCategory: (category: QuizCategory) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  restart: () => void;
  retakeQuiz: () => void;
}
const initialState: QuizState = {
  gameStatus: 'selecting_category',
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  selectedCategory: null,
  score: 0,
};
export const useQuizStore = create<QuizState & QuizActions>((set, get) => ({
  ...initialState,
  selectCategory: (category) => {
    const questions = category.questions;
    set({
      selectedCategory: category,
      questions,
      gameStatus: 'in_progress',
      currentQuestionIndex: 0,
      userAnswers: Array(questions.length).fill(null),
      score: 0,
    });
  },
  answerQuestion: (answerIndex) => {
    const state = get();
    if (state.gameStatus !== 'in_progress') return;
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswerIndex === answerIndex;
    const newUserAnswers = [...state.userAnswers];
    newUserAnswers[state.currentQuestionIndex] = answerIndex;
    set({
      userAnswers: newUserAnswers,
      score: isCorrect ? state.score + 1 : state.score,
    });
  },
  nextQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex < state.questions.length - 1) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    } else {
      set({ gameStatus: 'finished' });
    }
  },
  restart: () => {
    set(initialState);
  },
  retakeQuiz: () => {
    const { selectedCategory } = get();
    if (selectedCategory) {
      get().selectCategory(selectedCategory);
    } else {
      set(initialState);
    }
  },
}));