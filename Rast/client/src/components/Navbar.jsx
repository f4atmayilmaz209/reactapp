import React from 'react'
import styled from "styled-components"
import { Facebook } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Pinterest } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { FilterAlt } from '@mui/icons-material';
import {mobile} from "../responsive"

const Container=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:60px;
    ${mobile({fontSize:"10px"})}

`;
const Top=styled.div`
    height:60px;
    display:flex;
    justify-content:space-between;
    ${mobile({fontSize:"10px"})}


`;

const SearchSection=styled.div`
    display:flex;
    position:relative;
    justify-content:space-between

`;

const Links=styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    ${mobile({fontSize:"10px"})}

`;
const SocialMedia=styled.div`
    
`;
const Input=styled.input`
    width:250px;
    height:30px;
    border-radius:5px;
    border:none;
    ${mobile({fontSize:"10px"})}

`;
const SearchBar=styled.div`
    width:50px;
    height:33px;
    background-color:pink;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:210px;
    align-items:center;
    justify-content:center;
    text-align:center;
    border-radius:0px 15px 15px 0px;
    ${mobile({fontSize:"10px"})}

`;
const Button=styled.button`
    border-radius:10px;
    border:none;
    background-color:pink;
    color:white;
    ${mobile({fontSize:"10px"})}
`;

const Navbar = () => {
  return (
    <Container>
        <Top>
            <img src="https://rastmobile.com/wp-content/uploads/2022/08/Rastmobile-Logo.svg" alt="" width="80px" style={{marginBottom:"20px"}}/>
            <Links>
                <span>Hakkımızda</span>
                <span>Jüri - Yarışma Yazılımı</span>
                <span>Word Ninja</span>
                <span>Word Pyramids</span>

            </Links>
            <SocialMedia>
                <Facebook style={{fontSize:"15px",marginLeft:"5px"}}></Facebook>
                <Instagram style={{fontSize:"15px",marginLeft:"5px"}}></Instagram>
                <Pinterest style={{fontSize:"15px",marginLeft:"5px"}}></Pinterest>
                <Twitter style={{fontSize:"15px",marginLeft:"5px"}}></Twitter>

            </SocialMedia>
        </Top>
        <SearchSection>
            <Input type="Search" placeholder='Search objects'/>
            <SearchBar>
                <Search style={{color:"white",marginTop:"5px"}}></Search>
            </SearchBar>
            <FilterAlt style={{color:"white",marginTop:"2px",marginLeft:"-450px",width:"40px",height:"30px",backgroundColor:"lightgray",borderRadius:"20px"}}></FilterAlt> 

            <Button>+ Yeni Hesap Ekle</Button>
        </SearchSection>

    </Container>
  )
}

export default Navbar