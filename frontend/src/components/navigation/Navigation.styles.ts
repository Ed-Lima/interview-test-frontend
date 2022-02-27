import styled from "styled-components";

export const Container = styled.header`
    margin-bottom: 5rem;
    background: var(--gray-50);
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 2rem;
    color: var(--gray-900);

    .title {
        font-size: 3rem;
        font-weight: 600;
    }

    button {
        width: 3rem;
    }
`;