import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 13rem;
    max-height: 29rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #eee;
    color: var(--gray-900);


    img {
        width: 100%;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .title {
        font-family: Roboto, sans-serif;
        font-weight: 600;
        margin: 1rem 0;
        height: 1rem;
        min-height: 1rem;

        overflow: hidden;
        text-overflow: ellipsis;
    }

    .description {
        font-size: 0.8rem;
        height: 2rem;
        min-height: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .price {
        font-family: Roboto, sans-serif;
        margin-top: 0.5rem;
    }

    .actions {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
`