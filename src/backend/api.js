import parse from 'html-react-parser'

const QUESTIONS_ENDPOINT = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

const request = async (endpoint) => {
  // @TODO try catch
  const response = await fetch(endpoint)
  return await response.json()
}

export const fetchQuestions = async () => {
  const { results } = await request(QUESTIONS_ENDPOINT)

  return results.map(({ category, question, ...result }) => ({
    ...result,
    category: parse(category),
    question: parse(question),
  }))
}