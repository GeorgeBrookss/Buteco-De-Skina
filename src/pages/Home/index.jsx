import { useEffect, useState, useRef } from 'react';
import { client } from '../../lib/contentful';
import FormReserva from '../../components/Reserva/index'
import { HomeContainer, Section, ContentGrid, CardPlaceholder, EventCard } from './styles';
import cardapioAlimento from '../../images/cardapioAlimento.png';
import cardapioBebida from '../../images/cardapioBebida.png';


export function Galeria({ imagens }) {
    const galeriaRef = useRef(null);
    useEffect(() => {
    const interval = setInterval(() => {
        if (!galeriaRef.current) return;

        const container = galeriaRef.current;
        const scrollAmount = 300;


        if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
        ) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, 3000);

    return () => clearInterval(interval);
}, []);

return (
    <div className="galeria" ref={galeriaRef}>
    {imagens.map((img) => (
        <img
        key={img.sys.id}
        src={img.fields.file.url}
        alt={img.fields.title || 'Imagem do local'}
        />
    ))}
    </div>
    );
}

export function Home() {
    const [eventos, setEventos] = useState([]);
    const [sobre, setSobre] = useState(null)

    useEffect(() => {
        client.getEntries({
            content_type: 'barQuaseDeEskina', 
            order: 'fields.dataDoEvento'
        }).then((response) => {
            setEventos(response.items);
        }).catch((erro) => {
            console.error("Erro ao buscar eventos:", erro);
        });
}, []);

    useEffect(() => {
        client.getEntries({
            content_type: 'sobre', 
        }).then((response) => {
            if (response.items.length > 0) {
                setSobre(response.items[0]);
            }
        }).catch((erro) => {
            console.error("Erro ao buscar dados:", erro);
        });
}, []);

    const formatarData = (dataString) => {
        const data = new Date(dataString);
            return new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).format(data);
};

    return (
        <HomeContainer>
            <Section id="sobre">
                <h2>Sobre a Casa</h2>
            {!sobre && (
                <CardPlaceholder>
                    <strong>Carregando programação...</strong>
                </CardPlaceholder>
            )}
            {sobre && (
                <CardPlaceholder className="sobre-content">
                    {sobre.fields.imagensDoLocal && (
                    <Galeria imagens={sobre.fields.imagensDoLocal} />
                    )}

                    <br />

                    <h3 style={{ fontFamily: '"Roboto", sans-serif' }}>{sobre.fields.titulo}</h3>
                    <br />
                    <p style={{ fontFamily: '"Roboto", sans-serif',  whiteSpace: 'pre-line' }}>{sobre.fields.descricao}</p>
                    </CardPlaceholder>
                )}
            </Section>

            <Section id="programacao">
            <h2>Programação da Semana</h2>
            <ContentGrid>
                {eventos.length === 0 && (
                    <CardPlaceholder>
                        <strong >Carregando programação...</strong>
                    </CardPlaceholder>
                )}

                {eventos.map((item) => (
                    <EventCard key={item.sys.id}>
                        {item.fields.banner && (
                            <img 
                                src={item.fields.banner.fields.file.url} 
                                alt={item.fields.titulo} 
                            />
                        )}
                        <div className="info">
                            <strong>{item.fields.titulo}</strong>
                            <span>{formatarData(item.fields.dataDoEvento)}</span>
                            <p style={{ fontFamily: '"Roboto", sans-serif' }}>{item.fields.descricao}</p>
                        </div>
                    </EventCard>
                ))}
            </ContentGrid>
            </Section>

            <Section id="cardapio">
            <h2>Cardápio</h2>
            <ContentGrid>
                <CardPlaceholder>
                    <img src={cardapioAlimento} alt="Cardápio Alimentos" />
                </CardPlaceholder>
                <CardPlaceholder>
                    <img src={cardapioBebida} alt="Cardápio Bebidas" />
                </CardPlaceholder>
            </ContentGrid>
            </Section>

            <Section id="reservas">
            <h2>Faça sua Reserva</h2>
                <FormReserva />
            </Section>
        </HomeContainer>
    )
}