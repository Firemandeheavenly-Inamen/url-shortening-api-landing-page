import React from 'react';
import { StatsCardWrap, StatsIcon, StatsIconWrap, StatsCardHeading, StatsCardCopy } from './StatsSectionElements';

const CardStats = ({ img, heading, copy }) => {
    return (
        <StatsCardWrap>
            <StatsIconWrap>
                <StatsIcon src={img} alt='' />
            </StatsIconWrap>
            <StatsCardHeading>
                { heading }
            </StatsCardHeading>
            <StatsCardCopy>
                { copy }
            </StatsCardCopy>
        </StatsCardWrap>
    );
};

export default CardStats;
