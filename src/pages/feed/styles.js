import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 1200px; /* Valor ajustado */
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;

    margin-bottom: 24px; 

`;

export const TitleHighlight = styled.h3`
    color: #E41050;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF21;
    margin-bottom: 20px; 

`;


export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;
`