import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
`

const Announcement = () => {
  return (
    <Container>
        Deal of the day! Free shipping on orders over $250
    </Container>
  )
}

export default Announcement