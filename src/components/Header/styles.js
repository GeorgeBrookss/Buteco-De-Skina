import styled from "styled-components";
import FundoTexture from '../../images/texturecup.JPG';

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #F2660E;
    padding: 2.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${FundoTexture});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-bottom: 1px solid #F2660E;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    box-shadow: 5px 5px 15px rgba(255, 180, 5, 0.75);
`;

export const Logo = styled.h1`
    font-family: "Roboto", sans-serif;
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
    color: #3E2723;
    text-shadow: 1px 1px 3px rgba(125, 60, 4, 0.5);
    font-weight: bold;
    font-size: 1.125rem;
    transition: color 0.2s;

    &:hover {
        color: rgb(198, 0, 0);
    }
}

@media (max-width: 600px) {
    font-size: 20px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    a {
        font-size: 0.9rem;
    }
}
`;

export const EnderecoContainer = styled.h3`
    color: #3E2723;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5);
    font-size: 15px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-top: 1rem;
    text-align: center;
    margin-top: 40px;
    
    img {
        width: 20px;
        margin-right: 10px;
        filter: drop-shadow(4px 4px 6px black);
        }
`