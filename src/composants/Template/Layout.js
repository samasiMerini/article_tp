import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Menu from './partials/Menu';
import Styled from 'styled-components';


const Container = Styled.div `
width: 80%;
background: pink;
margin : 0 auto;
padding: 0.5em;
`

const Layout = (props) =>(
    <React.Fragment>
        <Header>
            <Menu/>
        </Header>
        
        <Container>
                {props.children}
        </Container>
        <Footer/>
    </React.Fragment>
)
export default Layout;