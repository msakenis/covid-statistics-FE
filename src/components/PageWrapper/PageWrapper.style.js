import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background: ${({ theme }) => theme.primary.background};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5em;
    box-sizing: border-box;
    border-radius: 1em;
    overflow-y: auto;
`;
