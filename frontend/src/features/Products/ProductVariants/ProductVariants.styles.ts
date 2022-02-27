import styled from "styled-components";

export const VariantOptions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean;
    isValid: boolean;
}

export const RadioBox = styled.label<RadioBoxProps>`
    transition: scale 0.2s;
    transform: ${({ isActive }) => isActive && 'scale(1.2)'};
    
    .radio {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .radio + img {
        width: 1.7rem !important;
        object-fit: contain !important;
        border-radius: 50% !important;
        cursor: pointer;
        filter: ${({ isValid }) => !isValid && 'grayscale(100%)'};
    }

    .radio + img {
        outline: ${({ isActive }) => isActive && '2px solid #718096'};
    }
`