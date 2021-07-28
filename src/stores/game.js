import { makeObservable, observable, computed, action } from "mobx"
import { fetchQuestions } from '../backend/api'

const defaults = {
  questions: null,
  currentQuestionIndex: null
}

export default class GameStore {
  questions = defaults.questions
  currentQuestionIndex = defaults.currentQuestionIndex

  constructor() { 
    makeObservable(this, {
      questions: observable,
      currentQuestionIndex: observable,
      loadQuestions: action,
      answerQuestion: action,
      reset: action,
      currentQuestion: computed,
    })
  }

  // Observed

  get currentQuestion () {
    return this.questions ? this.questions[this.currentQuestionIndex] : {}
  }

  // Actions

  reset () {
    this.questions = defaults.questions
    this.currentQuestionIndex = defaults.currentQuestionIndex
  }

  async loadQuestions () {
    this.reset()
    this.currentQuestionIndex = 0
    this.questions = await fetchQuestions()
  }

  answerQuestion (answer) {
    this.questions[this.currentQuestionIndex].answer = answer
    this.currentQuestionIndex += 1
  }

  // Not Observed

  get isQuestionaireFinished () {
    return (this.questions && this.currentQuestionIndex === this.questions.length - 1)
  }

  get totalQuestions () {
    return this.questions ? this.questions.length : 0
  }

  get totalCorrectAnswers () {
    return this.questions.reduce((acc, question) => 
      this.isCorrectAnswer(question) ? ++acc : acc
    , 0)
  }
  
  get currentQuestionNumber () {
    return this.currentQuestionIndex + 1
  }

  isCorrectAnswer ({ answer, correct_answer}) {
    return answer === correct_answer
  }
}