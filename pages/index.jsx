import styled from 'styled-components'

import Navbar from '../src/componets/layout/Navbar'
import Container from '../src/componets/layout/Container'
import CreatePost from '../src/componets/cards/CreatePost'

const Content = styled.div`
margin: 50px 0;
`

function HomePage() {

  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost />
        </Container>
      </Content>
    </>
  )
}

export default HomePage