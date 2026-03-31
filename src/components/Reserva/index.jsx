import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FormStyled } from './styles';

function FormReserva() {
    const formRef = useRef();

    const gerarReservaId = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    const enviarReserva = (e) => {
    e.preventDefault();

    const reservaId = gerarReservaId();
    formRef.current.reserva_id.value = reservaId;

    Promise.all([
            emailjs.sendForm(
                'service_wethaxq',
                'template_3wmltin',
                formRef.current,
                '8wDwf1hLqqO38YZdo'
            ),

            emailjs.sendForm(
                'service_wethaxq',
                'template_etsvqep',
                formRef.current,
                '8wDwf1hLqqO38YZdo'
            )
        ])
        .then(() => {
            alert(`Reserva enviada com sucesso! Nº ${reservaId}`);
            formRef.current.reset();
        })
        .catch(() => {
            alert('Erro ao enviar reserva. Tente novamente.');
        });
    };

    return (
    <FormStyled ref={formRef} onSubmit={enviarReserva}>
        <div className='formPart'>
        <input type="hidden" name="reserva_id" />
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <input type="tel" name="telefone" placeholder="Telefone / WhatsApp" required />
        <div className='datePart'>
            <label style={{ borderRadius: '5px', marginBottom: '10px', marginLeft: '40%', width: 'fit-content', color: 'white', display: 'block', backgroundColor: 'orange' }}>
                Data</label>
            <input type="date" name="data" required />
            <label style={{ borderRadius: '5px', marginBottom: '10px', marginLeft: '37%', width: 'fit-content', color: 'white', display: 'block', backgroundColor: 'orange' }}>
                Horário</label>
            <input type="time" name="hora" required />
        </div>
        <input type="number" name="pessoas" placeholder="Quantidade de pessoas" required />

        <textarea name="mensagem" placeholder="Observações (opcional)" />

        <button type="submit">Enviar reserva</button>
        </div>

    </FormStyled>
    );
}

export default FormReserva;
