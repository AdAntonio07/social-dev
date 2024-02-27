import { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`
const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  padding: 13px;
  box-sizing: border-box;

  ${props => props.error && `border: 2px solid ${props.theme.error};`}

 &:focus {
  outline: none;
 }
`
const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: 500;
  font-size: 14px;
`
const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email': 'Por favor, digite um e-mail válido.'
}

const Input = forwardRef(({ label, error, ...props }, ref) => {
  console.log(error)
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} error={error} {...props} ref={ref} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
})

export default Input