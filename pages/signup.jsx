import styled from 'styled-components'
import Link from 'next/link'

import ImageWithSpace from '../src/componets/layout/imageWithSpace'
import H1 from '../src/componets/typography/H1'
import H2 from '../src/componets/typography/H2'
import H4 from '../src/componets/typography/H4'
import Button from '../src/componets/inputs/Button'
import Input from '../src/componets/inputs/input'

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

function SignupPage() {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Todo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <Form>
          <Input label="Nome" />
          <Input label="SobreNome" />
          <Input label="Usuário" />
          <Input type="Email" label="Email ou usuário" />
          <Input type="password" label="Senha" />
          <Button>Criar contar</Button>
        </Form>
        <Text>Já possui uma contar? <Link href="/login">Faça seu login</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage