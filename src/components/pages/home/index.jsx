import React from 'react'
import { useGoToQuestionaire } from '../../../routes'

import { Panel, Title, H2, Button, Div } from '../../../styleds'

export default () => {
  const goToQuestionaire = useGoToQuestionaire();

  return (
    <Panel>
      <Title flex={1}>Welcome to the Trivia Challenge!</Title>

      <Div flex={2}>
        <H2>You will be presented with 10 True or False questions.</H2>
      </Div>
      <Div flex={2}>
        <H2>Can you score 100%?</H2>
      </Div>

      <Button flex={1} onClick={goToQuestionaire}>BEGIN</Button>
    </Panel>)
}