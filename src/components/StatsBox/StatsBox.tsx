import React from 'react';
import * as S from './StatsBox.style';
import { Loading } from '../';
import { StatsObj } from '../../helpers/SharedTypes';

interface StatsBoxProps {
    statsData: StatsObj[];
}

//formats to percentage look
const formatPerc = (number: number): string => {
    return Math.abs(number).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
};

const StatsBox: React.FC<StatsBoxProps> = ({ statsData }) => {
    return (
        <S.FlexBox>
            {statsData ? (
                statsData.map((item) => (
                    <S.StatsBox key={item.id}>
                        <S.ImgDiv>
                            <S.Image src={item.icon} alt={item.title} />
                        </S.ImgDiv>
                        <S.StatsInfo>{Math.ceil(item.stats)}</S.StatsInfo>
                        <S.StatsTitle>{item.title}</S.StatsTitle>
                        <S.StatsChangeDiv increase={item.change >= 0}>
                            {item.change && <span>{item.change < 0 ? '\u2BC5' : '\u2BC6'}</span>}
                            {formatPerc(item.change)}
                        </S.StatsChangeDiv>
                    </S.StatsBox>
                ))
            ) : (
                <Loading />
            )}
        </S.FlexBox>
    );
};

export default StatsBox;
