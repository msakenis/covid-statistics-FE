import React from 'react';
import * as S from './StatsBox.style';

type StatsObj = {
    id: number;
    title: string;
    icon: string;
    stats: string;
    change: number;
};

interface StatsDataProps {
    statsData: StatsObj[];
}

const StatsBox: React.FC<StatsDataProps> = ({ statsData }) => {
    return (
        <S.FlexBox>
            {statsData &&
                statsData.map((item) => (
                    <S.StatsBox key={item.id}>
                        <S.ImgDiv>
                            <S.Image src={item.icon} alt={item.title} />
                        </S.ImgDiv>
                        <p>{item.stats}</p>
                        <p>{item.title}</p>
                        <div>{item.change}</div>
                    </S.StatsBox>
                ))}
        </S.FlexBox>
    );
};

export default StatsBox;
