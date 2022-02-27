import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 7rem;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: #eee;
    color: var(--gray-900);

    .remove {
        position: absolute;
        top: 0.5rem;
        outline: none;
        border: none;
        background: transparent;
        color: #F56565;
        font-size: 1.5rem;
        right: 1rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    img {
        width: 6rem;
        object-fit: contain;
        border-radius: 8px;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.5rem;
    width: 100%;

    .title {
        width: 100%;
        font-family: Roboto, sans-serif;
        font-weight: 600;

        overflow: hidden;
        text-overflow: ellipsis;
    }

    .details {
        display: flex;
        gap: 1rem;
        height: 100%;
        align-items: center;
        padding: 0 1rem;
    }

    .quantity {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
        }
    }

    .price {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;