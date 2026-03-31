import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #F2660E;
    padding: 2.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #F2660E;
`;

export const Logo = styled.h1`
    font-size: 2px;
    color: #4b2c2cff;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 2px;
    text-align: center;

    img {
        width: 300px; 
        height: 300px; 
        display: block; 
        margin: 0 auto; 
    }

    span {
    color: #b76818ff;
}
`;

export const NavBar = styled.nav`
    display: flex;
    gap: 2rem;

    a {
    text-decoration: none;
    color: #fffbf9 ;
    font-weight: bold;
    font-size: 1.125rem;
    transition: color 0.2s;

    &:hover {
        color: #f3ce9dff;
    }
}

@media (max-width: 600px) {
    gap: 1rem;

    a {
        font-size: 0.9rem;
    }
}
`;

export const EnderecoContainer = styled.h3`
    color: #fffbf9;
    font-size: 15px;
    font-weight: 100;
    margin-top: 1rem;
    text-align: center;
    margin-top: 40px;
    
    img {
        width: 20px;
        margin-right: 10px;
    }
`