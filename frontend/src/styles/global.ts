import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`
    :root {
        --white: #fff;

        --gray-50: #eeeef2;
        --gray-100: #d1d2dc;
        --gray-200: #b3b5c6;
        --gray-300: #9699b0;
        --gray-400: #797d9a;
        --gray-500: #616480;
        --gray-600: #4b4d63;
        --gray-700: #353646;
        --gray-800: #1f2029;
        --gray-900: #181b23;

        --green-500: #38A169;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--white);
        color: var(--gray-900);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


    /* Scrollbar style */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`