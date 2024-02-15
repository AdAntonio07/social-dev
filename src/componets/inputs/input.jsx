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

`

function Input({ label, ...props }) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} {...props} />
    </InputContainer>
  )
}

export default Input