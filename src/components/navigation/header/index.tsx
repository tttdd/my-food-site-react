import React from 'react';
import {NextPage} from "next";
import {Button, styled, Typography, Link} from '@mui/material';
import PlanetIcon from "../../icons/PlanetIcon";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';


const Header:NextPage=()=>{
    return (
        <HeaderWrapper>
            <HeaderMenu>
                <Typography><Link href='/aboutUs'>About Us</Link></Typography>
                <Typography><Link href='#'>Services</Link></Typography>
                <Typography><Link href='#'>Menu</Link></Typography>
                <Typography><Link href='#'>Contact</Link></Typography>
            </HeaderMenu>
            <PlanetIcon />
            <SearchBlock>
                <SearchIcon />
                <ShoppingBasketOutlinedIcon />
                <Button variant="contained">Aвторизация</Button>
            </SearchBlock>
        </HeaderWrapper>
    )
}

const HeaderWrapper=styled('div')`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  
`;
const SearchBlock=styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
`;
const HeaderMenu=styled('div')`
  display: flex;
  column-gap: 40px;
  a{
    text-decoration: none;
    transition: .3s ease-in;
    :hover{
      color: rgb(17, 82, 147);
      transition: .3s ease-in;
    }
  }

`;

export default Header;
