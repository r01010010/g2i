import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaCheck, FaRegTimesCircle } from 'react-icons/fa'
import { inject, observer } from 'mobx-react'

import { Panel, Title, Button } from '../../../styleds'
import { useGoToHome } from '../../../routes'


const Results = observer(({ game }) => {
  const goToHome = useGoToHome()

  return <Panel>
    <Title>
      You scored { game.totalCorrectAnswers } / {game.totalQuestions }
    </Title>
    <Answers flex={3}>
      {game.questions.map(question => 
        <Question>
          <Icon>{ game.isCorrectAnswer(question) ? <FaCheck /> : <FaRegTimesCircle />}</Icon>
          {question.question}
        </Question>
      )}
    </Answers>
    <Button onClick={goToHome} >
      PLAY AGAIN?
    </Button>
  </Panel>
})

export default inject('game')(Results)

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  overflow: scroll;
`

const Icon = styled.div`
  margin-right: .8rem;
`

const Question = styled.div`
  display: flex;
  flex-direction: row;
  font-size: .6rem;
  padding: .2rem 0;
` 