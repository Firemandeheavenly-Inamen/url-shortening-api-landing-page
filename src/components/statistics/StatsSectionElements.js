import styled from 'styled-components';


export const StatsHeading = styled.h2 `
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 3rem;
    color: var(--text-dark);

    @media screen and (min-width: 1024px) {
        margin-bottom: 1.125rem;
        font-size: 3.5rem;
        line-height: 3rem;
    }
`;

export const StatsCopy = styled.p `
    margin-bottom: 5.75rem;
    font-size: 1rem;
    line-height: 1.75rem;

    @media screen and (min-width: 1024px) {
        max-width: 42rem;
        margin: 0 auto 6.25rem;
        font-size: 1.4rem;
        line-height: 2rem;
    }
    @media screen and (min-width: 280px) {
        max-width: 45rem;
        margin: 0 auto 6.25rem;
        font-size: 1.4em;
        line-height: 2rem;
    }
`;

export const StatsCardsContainer = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5.75rem;
    margin-bottom: 7rem;

    &::before {
        content: '';
        position: absolute;
        width: 0.5rem;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary);
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 2.5rem;
        height: 20rem;

        &::before {
            width: 99%;
            height: 0.5rem;
            left: unset;
            top: 40%;
            transform: translate(0);
        }
    }
`;

export const StatsCardWrap = styled.div `
    position: relative;
    padding: 4.75rem 2rem 2.5rem;
    background-color: var(--background-light);
    border-radius: 5px;

    @media screen and (min-width: 1024px) {
        height: max-content;
        text-align: left;


        &:nth-of-type(2) {
            top: 24px;
        }

        &:nth-of-type(3) {
            top: 48px;
        }
    };

`;

export const StatsIconWrap = styled.div `
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.2rem;
    width: 6.2rem;
    border-radius: 50%;
    background-color: var(--secondary);
    padding: 15px;

    @media screen and (min-width: 1024px) {
        left: 2rem;
        transform: translateY(-50%);
    };
`;

export const StatsIcon = styled.img `

`;

export const StatsCardHeading = styled.h3 `
    margin-bottom: 0.75rem;
    font-size: 1.875rem;
    line-height: 2rem;
    color: var(--text-dark);
`;

export const StatsCardCopy = styled.p `
    font-size: 1.45em;
    line-height: 2.4rem;
`;

export const StatsSectionContainer = styled.section `
    padding: 0 1.5rem 5rem;
    background-color: var(--background-med);

    @media screen and (min-width: 768px) {
        padding: 0 2.5rem 5rem;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 2.5rem 7.5rem;
    }
`;

export const StatsSectionWrapper = styled.div `
    max-width: 1100px;
    margin: auto;
    text-align: center;
`;