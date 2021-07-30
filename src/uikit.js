import styled from 'styled-components'

const MAX_WIDTH = 25

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: ${MAX_WIDTH}rem;
  padding: 1rem .7rem;
`

export const Title = styled.div`
  display: flex;
  flex: ${(props) => props.flex || 1};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
`

export const Div = styled.div`
  display: flex;
  flex: ${(props) => props.flex || 1};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const H1 = styled.span`
  display: block;
  padding-bottom: 1rem;
  font-weight: 800;
  text-align: center;
`

export const H2 = styled.span`
  display: block;
  font-size: .8rem;
  font-weight: 600;
  text-align: center;
`

export const Button = styled.a`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  
  &::selection { background: transparent; }

  &:hover {
    border: 1px solid black;
  }

  &:active {
    background: #EEE;
  }
`