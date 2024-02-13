import styled from 'styled-components'

import ImageWithSpace from '../src/componets/layout/imageWithSpace'
import H1 from '../src/componets/typography/H1'
import H2 from '../src/componets/typography/H2'
import H4 from '../src/componets/typography/H4'

const FormContainer = styled.div`
  margin-top: 60px;
`
const Form = styled.form`
 display: flex;
 flex-direction: column;
 margin: 20px 0;
 gap: 20px;
`

const Text = styled.p`
text-align: center;
`

function LoginPage() {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Todo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Entre em sua conta</H2>
        <Form>
          <input type="Email" placeholder="Email ou usuário" />
          <input type="password" placeholder="Senha" />
          <button>
            Entrar
          </button>
        </Form>
        <Text>Não possui uma contar? <a href="#">Faça seu cadastro</a></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage