import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    width: 100%;
`;

export const StatsBox = styled.div`
    width: 25%;
    min-height: 30%;
    background-color: #ffffff;
    text-align: center;
    border-radius: 1em;
    padding: 1em;

    :not(:last-child) {
        margin-right: 1.5em;
    }
`;

export const ImgDiv = styled.div`
    width: 30%;
    height: 30%;
    margin: 0 auto;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
