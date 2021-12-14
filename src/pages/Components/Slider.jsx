import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {Data} from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
`;
const Arrow = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "0.8rem"};
  right: ${(props) => props.direction === "right" && "0.8rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translatex(0vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
  display: flex;
  align-items: center;
  background-color: #S{props => props.bg};
`;
const ImgContainer = styled.div`
height: 100%;
  flex: 1;
`;
const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
`;

const Title = styled.h1`
    font-size: 3.5rem;
`
const Description = styled.p`
    margin: 3.5rem 0;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 0.7rem;
    font-size: 1.3rem;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{

    }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
          {shopList.map(item =>{
      <Slide bg="f5fafd">
          <ImgContainer>
            <Image src={item.image} />
          </ImgContainer>
          <InfoContainer>
              <Title>OFERTAS DE VERÃO</Title>
              <Description>Não se comprometa no estilo! Ganhe 30% de desconto nas novidades.</Description>
              <Button>COMPRE AGORA</Button>
          </InfoContainer>
        </Slide>
       })};
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
