import styled from 'styled-components';

export const InputDiv = styled.div`
    width: 100%;
`;
export const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary.color};
    padding: 0;
    margin-bottom: 10px;
    width: 100%;
`;

export const DropdownSelect = styled.select`
    -webkit-appearance: none;
    appearance: none;
    padding: 1em 0.5em;
    background: url('https://www.freeiconspng.com/uploads/black-arrow-down-icon-png-16.png') no-repeat right #ffffff;
    border: 2px solid ${(props) => props.theme.secondary.background};
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    margin-top: 4px;
    border-radius: 5px;
    background-size: 20px 20px;
    background-origin: content-box;
    color: ${({ theme }) => theme.primary.color};
`;

export const DropdownBox = styled.div``;
