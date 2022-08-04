import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: 'column', padding: "10px"})}

`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit:cover;
    ${mobile({height: '40vh'})}

`
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    ${mobile({padding: '10px'})}

`
const Title = styled.h1`
    font-weight: 200;
    `
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: '100%'})}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: '100%'})}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color:white;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color:#f8f4f4;
    }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Silk Dress</Title>
                <Desc>
                    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
                </Desc>
                <Price>$ 1960</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='red'/>
                        <FilterColor color='black'/>
                        <FilterColor color='grey'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product