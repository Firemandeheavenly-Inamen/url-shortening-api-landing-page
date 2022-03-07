import styled from 'styled-components';


export const StatsHeading = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 3rem;
    color: var(--text-dark);

    @media screen and (min-width: 1024px) {
        margin-bottom: 1.125rem;
        font-size: 2.5rem;
        line-height: 3rem;
    }
`;

export const StatsCopy = styled.p`
    margin-bottom: 5.75rem;
    font-size: 1rem;
    line-height: 1.75rem;

    @media screen and (min-width: 1024px) {
        max-width: 34rem;
        margin: 0 auto 6.25rem;
        font-size: 1.125rem;
        line-height: 2rem;
    }
`;

