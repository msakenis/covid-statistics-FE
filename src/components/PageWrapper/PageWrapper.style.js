import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background: ${({ theme }) => theme.primary.background};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    box-sizing: border-box;
    border-radius: 1em;
`;
