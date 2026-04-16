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

            <Section id="Localizacao">
                <h2>Onde Estamos</h2>                
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '20px', 
                    width: '100%', 
                    maxWidth: '800px', 
                    margin: '0 auto',
                    padding: '20px'
                }}>
                    
                    <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: '1.1rem', textAlign: 'center', color: '#ff621a' }}>
                        <strong>Nosso Endereço:</strong><br />
                        Av. Conselheiro Rodrigues Alves, 180<br />
                        Macuco - Santos, SP
                    </p>

                    <div style={{ width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '2px solid #ff631a5f' }}>
                        <iframe
                            title="Mapa de Localização do Bar"
                            src="https://maps.google.com/maps?q=Av.+Conselheiro+Rodrigues+Alves,+180+-+Santos,+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=Av.+Conselheiro+Rodrigues+Alves,+180+-+Santos,+SP" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#ff621a',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontFamily: '"Roboto", sans-serif',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'background-color 0.3s ease',
                            boxShadow: '0 4px 6px rgba(255, 98, 26, 0.3)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e55817'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff621a'}
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/google-maps.png" alt="Maps Icon" style={{ width: '24px' }} />
                        Como Chegar
                    </a>
                </div>
            </Section>

            <Section id="reservas">
            <h2>Faça sua Reserva</h2>
                <FormReserva />
            </Section>
            <footer style={{
                marginTop: '10px',
                padding: '10px 20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                fontFamily: '"Roboto", sans-serif',
                backgroundColor: 'transparent'
            }}>
                <div style={{ display: 'flex', gap: '20px', fontSize: '1.1rem' }}>
                    <a 
                        href="https://www.instagram.com/buteco.daskina/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: '#ff621a', fontWeight: '500' }}
                    >
                        <img style={{maxWidth: '40px'}} src="https://img.icons8.com/ios11/512/FD7E14/instagram-circle.png" alt="Instagram" />
                    </a>
                    <span style={{ color: '#ff8307', marginTop: '7%' }}>|</span>
                    <a 
                        href="https://wa.me/5513997682652" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: '#ff621a', fontWeight: '500' }}
                    >
                        <img style={{maxWidth: '40px'}} src="https://img.icons8.com/ios11/512/FD7E14/whatsapp.png" alt="WhatsApp" />
                    </a>
                </div>
                
                <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#ff621a' }}>
                    &copy; 2026 by KromaStack Labs
                </div>
            </footer>
        </HomeContainer>
    )
}