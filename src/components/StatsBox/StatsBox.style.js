import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    width: 100%;
    margin: 1.5em 0;
    flex-wrap: wrap;
`;

export const StatsBox = styled.div`
    width: calc(25% - 1.125em);
    min-height: 25%;
    background-color: #ffffff;
    text-align: center;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    &&:not(:last-child) {
        margin-right: 1.5em;
    }
`;

export const ImgDiv = styled.div`
    width: 20%;
    height: 20%;
    margin: 0 auto;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const StatsInfo = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding-top: 0.2em;
`;

export const StatsTitle = styled.p`
    margin: 0;
    font-size: 0.8rem;
    padding-bottom: 1em;
    color: ${({ theme }) => theme.tertiary.color};
    font-weight: 600;
`;

export const StatsChangeDiv = styled.div`
    margin: 0 auto;
    min-width: 6.5em;
    color: #689f13;
    font-weight: 700;
`;

export const ArrowSpan = styled.span`
    font-size: 0.8rem;
    padding-right: 0.4em;

    &&:after {
        content: '\u2BC5';
    }
`;
