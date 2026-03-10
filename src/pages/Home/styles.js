import styled from 'styled-components';

export const HomeContainer = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .galeria {
        display: flex;
        flex-wrap: nowrap;
        gap: 16px;

        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;

        padding-bottom: 12px;

        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;

        scrollbar-width: none;        
        -ms-overflow-style: none;
    }

    .galeria::-webkit-scrollbar {
        display: none;
    }

    .galeria img {
        flex: 0 0 auto;

        width: 100%;
        height: 550px;

        object-fit: cover;
        border-radius: 10px;

        scroll-snap-align: start;
    }
`;

export const Section = styled.section`
h2 {
    font-size: 24px;
    line-height: 32px;
    color: #000000d3;
    margin-bottom: 2rem;
    border-left: 3px solid #F2660E;
    padding-left: 0.8rem;
}
`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
`;

export const CardPlaceholder = styled.div`
    background: #ffe4c3;
    padding: 1.5rem;
    border-radius: 6px;
    color: #000004ff;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    text-align: left;
    border: 1px dashed #555;

    strong {
        display: block;
        color: #000000ff;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
}
    p {
        width: 100%;
        max-width: 414px;
        font-size: 16px;
        line-height: 24px;
        text-align: left;
    }

    `;


export const EventCard = styled.div`
    background: #ffe4c3;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s;

&:hover {
    transform: translateY(-5px);
}

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.info {
    padding: 1rem;
    
    strong {
        display: block;
        color: #120802;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    span {
        display: block;
        color: #F2660E;
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    p {
        color: #120802;
        font-size: 0.9rem;
        line-height: 1.4;
    }
}
`;