import {useState} from 'react'
import {
  Heading,
  MainContainer,
  CardContainer,
  Paragraph,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
      setPassword(event.target.value)
  }
  
  return (
      <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangePassword} value={password} />
        {password.length >= 8 ? (
          ''
        ) : (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </CardContainer>
    </MainContainer>
  )
}
export default PasswordValidator
