import styled from "styled-components";

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 400px;
    padding: 2rem 1rem 8rem 1rem;
    background-color: #f9f9f9;
    border-left: 1px solid var(--gray-200);
    overflow-y: scroll;
    z-index: 4;

    .header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .close {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        outline: none;
        border: none;
        background-color: transparent;
        color: var(--gray-300);
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }

    .total {
        display: flex;
        align-items: center;
        width: 100%;
        height: 5rem;
        position: fixed;
        bottom: 0;
        background: #f9f9f9;

        & :first-child {
            font-size: 1.5rem;
            font-weight: 600;
            margin-right: 1rem;
        }

        & :last-child {
            font-size: 1.5rem;
        }
    }
`;