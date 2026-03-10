import { HeaderContainer, Logo, NavBar, EnderecoContainer } from './styles';
import LogoQdE from '../../images/LogoQdE.png';
import localizacao from '../../images/localizacao.png';

export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src={LogoQdE} alt="LogoQdE" />
                <br />
            </Logo>
            
            <NavBar>
                <a href="#sobre">Sobre</a>
                <a href="#programacao">Programação</a>
                <a href="#cardapio">Cardápio</a>
                <a href="#reservas">Reservas</a>
            </NavBar>
            <EnderecoContainer> <img src={localizacao} alt="Localização" />Av Conselheiro Rodrigues Alves 180</EnderecoContainer>
        </HeaderContainer>
    )
}