import styled from 'styled-components';
import shortenMobile from '../../images/bg-shorten-mobile.svg';
import shortenDesktop from '../../images/bg-shorten-desktop.svg';
import { Form, FormControl } from './Forms';

export const ShortenedAppContainer = styled.section`
    position: relative;
    padding: 0 1.5rem 5rem;
    text-align: center;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 80px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--background-med);
        z-index: -1;
    }

    @media screen and (min-width: 768px) {
        padding: 0 2.5rem 5rem;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 2.5rem 7.5rem;

        &::before {
            top: 56px;
        }
    }
`;