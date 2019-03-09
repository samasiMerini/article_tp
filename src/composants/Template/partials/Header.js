import React from 'react';
import Styled from 'styled-components';


const Header = Styled.div `
padding: 2em;
background: blue;
font-size: 25px;
font-style: bold;
margin-bottom: 20px;
`;

export default (props) => ( 
    <Header>
         Bienvenue 
         {props.children}
    </Header>
)

