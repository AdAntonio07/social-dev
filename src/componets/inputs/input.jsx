import styled from 'styled-components'
import { useController } from 'react-hook-form'

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
  'string.email': 'Por favor, digite um e-mail válido.',
  'duplicated': 'Já existe ma conta registrada com esse valor.'
}

const Input = (({ label, name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} error={error} {...props} value={value} onChange={onChange} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
})

export default Input