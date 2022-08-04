import styled from 'styled-components'
import {Facebook, Twitter, Instagram, Pinterest, Room, Phone, MailOutline} from '@mui/icons-material'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}

`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#fff8f8'})}

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MAUCCI</Logo>
            <Desc>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>People Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                123 Fake Rd, South Hell 90210
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +1 555 555 4242
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                fake@email.co.uk
            </ContactItem>
            <Payment src='https://www.magnaplate.com/images/pay_by_cards.jpg'/>
        </Right>
    </Container>
  )
}

export default Footer