import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    a {
        color: inherit;
        text-decoration: none;
    }


    .ant-float-btn .ant-float-btn-body {
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 6px;
        border: none;
        &:hover {
            background-color: ${({ theme }) => theme.colors.orange};
        }
    }
`
