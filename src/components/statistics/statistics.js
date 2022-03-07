import React from 'react';

import StatsCard from './cardStats';
import { CardOne, CardTwo, CardThree } from './cards';
import { StatsSectionContainer, StatsSectionWrapper, StatsHeading, StatsCopy, StatsCardsContainer } from './StatsSectionElements';

const StatsSection = () => {
    return (
        <StatsSectionContainer >
            <StatsSectionWrapper>
                <StatsHeading>Advanced Statistics</StatsHeading>
                <StatsCopy>Track how your links are performing across the web with our advanced statistics dashboard.</StatsCopy>
                <StatsCardsContainer>
                    <StatsCard { ...CardOne }/>
                    <StatsCard { ...CardTwo }/>
                    <StatsCard { ...CardThree }/>
                </StatsCardsContainer>
            </StatsSectionWrapper>
        </StatsSectionContainer>
    );
};

export default StatsSection;
