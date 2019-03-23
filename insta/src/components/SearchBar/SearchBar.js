import React from 'react'
import styled from 'styled-components';

function SearchBar(props){
  return(
    <Header>
    <h1><span>Camera | Instagram
    <input
      type='text'
      value={'just a value'}
      placeholder={'just a placeholder...'}
      onChange={'on change'}
    /></span></h1>
    </Header>

  )
}






const Header = styled.header`
    padding: 50px;
    margin: 5px;
    border: 3px dashed lightblue;
    border-radius: 5px;
    color: pink;
    background-color: black;

`;

const LogoHeader = styled.div`


`;

const LogoImage = styled.img



export default SearchBar
