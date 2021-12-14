import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 3.5rem  ;
`;
const Wrapper = styled.div`
  padding: 0.7rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.8rem;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointed;
  margin-left: 1.7rem;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PT-BR</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KR</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>LOGAR</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
