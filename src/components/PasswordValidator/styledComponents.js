// Style your elements here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24263c;
  height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: #434451;
  padding: 20px;
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
`

export const Input = styled.input`
  font-family: 'Roboto';
  background-color: #edeeff;
  padding: 12px;
  border-radius: 6px;
  border: none;
  margin-bottom: 25px;
  outline: none;
`

export const Error = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
`