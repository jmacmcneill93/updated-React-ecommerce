import { createGlobalStyle } from 'styled-components';

import Vibrolator from './Vibrolator.woff';
import LatoThin from './LatoThin.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'LatoThin, Vibrolator';
        src: local('Lato Thin'), local('Vibrolator'),
        url(${Vibrolator}) format('woff2'),
        url(${LatoThin}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;