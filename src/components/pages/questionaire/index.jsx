import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { inject, observer } from "mobx-react"

import { Button, Title, Panel } from '../../../styleds'
import { useGoToResults } from '../../../routes'

import Loading from '../loading'

const TRUE = 'True'
const FALSE = 'False'

const Questionaire = observer(({ game }) => {
  const goToResults = useGoToResults()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      if (isLoading) {
        await game.loadQuestions()
        setIsLoading(false)
      }
    })()
  }, [isLoading])

  const answer = (value) => {
    game.answerQuestion(value)

    if (game.isQuestionaireFinished) {
      goToResults()
    }
  }

  if (isLoading) return <Loading />;

  return (
    <Panel>
      <Title>
        {game.currentQuestion.category}
      </Title>
      
      <Question>
        {game.currentQuestion.question}
      </Question>

      <QuestionNumber>
        {game.currentQuestionNumber} of {game.totalQuestions} 
      </QuestionNumber>

      <AnswerOptions>
        <Button onClick={() => answer(TRUE)}>{TRUE}</Button>
        <Button onClick={() => answer(FALSE)}>{FALSE}</Button>
      </AnswerOptions>
      
    </Panel>
  );
})

const Question = styled.div`
display: flex;
flex: 4;
padding: 10%;
border: 1px solid black;
font-size: .8rem;
text-align: center;
`

const QuestionNumber = styled.div`
display: flex;
justify-content: center;
font-size: .8rem;
padding: 4% 0;
`

const AnswerOptions = styled.div`
display: flex;
flex: 2;
flex-direction: row;
`

export default inject('game')(Questionaire)