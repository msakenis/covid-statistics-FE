import React from 'react';
import * as S from './Dropdown.style';

interface DropdownProps {
    handleChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
    options: string[];
    value: string;
}

const Dropdown: React.FC<DropdownProps> = ({ handleChange, options, value }) => {
    return (
        <S.InputDiv>
            <S.Label htmlFor="dropdown">Select Country/Region</S.Label>
            <S.DropdownBox>
                <S.DropdownSelect onChange={handleChange} id="dropdown" value={value}>
                    {options &&
                        options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                </S.DropdownSelect>
            </S.DropdownBox>
        </S.InputDiv>
    );
};

export default Dropdown;
