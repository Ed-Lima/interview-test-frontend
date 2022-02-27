import styled from "styled-components";

interface CardProps {
    isAvailable: boolean,
    isActiveVariantValid: boolean
}

export const Card = styled.div<CardProps>`
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

    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .oos {
        display: ${( {isAvailable} ) => isAvailable ? 'none' : 'block'};
        top: 2rem;
        left: 5rem;
        position: absolute;
        z-index: 3;
        background-color: #C53030;
        color: #FED7D7;
        border: none;
        outline: none;
        border-radius: 10px;
        padding: 0.2rem 1rem;
        width: 6.5rem;
        font-size: 0.8rem;
        white-space: nowrap;
    }

    img {
        width: 100%;
        object-fit: contain;
        border-radius: 8px;
    }

    .card-image {
        filter: ${( {isAvailable} ) => !isAvailable && 'grayscale(100%)'};
        filter: ${( {isActiveVariantValid} ) => !isActiveVariantValid && 'grayscale(100%)'};
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

    .info {
        display: flex;
        flex-direction: column;
        min-height: 2rem;
        width: 100%;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
`