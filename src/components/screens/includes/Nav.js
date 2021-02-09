import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <Header>
            <Logo>
                <Link to='/Traveller-Guide'>
                <LogoImg src={require('../../assets/images/logo.svg').default} alt="logo" />
                </Link>
            </Logo>
            <Login src="#">Login</Login>
        </Header>
    )
}

const Header = styled.div`
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1``;

const LogoImg = styled.img``;

const Login = styled.a`
    background: #005BE9;
    padding: 16px 48px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    font-size: 18px;
`;