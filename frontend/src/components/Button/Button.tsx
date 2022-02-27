/**
 * Custom Button implementation
 * @param {string} bgColor - Used to set button background color
 * @returns {button} - Button HTML Element
 */

 import { zoomIn } from 'react-animations';
 import styled, { css, keyframes } from 'styled-components';
 
 const bounceAnimation = keyframes`${zoomIn}`;

 interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
     bgColor?: string
     animate?: boolean
 }
 
 export const PrimaryButton = styled.button<ButtonProps>`
     font-size: 1rem;
     font-weight: 500;
     color: var(--white);
     background: ${(props) => props.bgColor ? props.bgColor : '#DD6B20'};
     border: 0;
     padding: 0 1rem;
     border-radius: 0.25rem;
     height: 2.5rem;
     width: 100%;
     transition: filter 0.2s;

     &:active {
        svg{
            animation: ${({ animate }) => animate && css`1s ${bounceAnimation}`};
        }
     }
 
     &:hover {
         filter: brightness(0.9);
     }
 
     &[type="submit"] {
         width: 100%;
         background: var(--green-500);
         color: var(--white);
         height: 4rem;
         margin-top: 1.5rem;
     }
 `
 
 export const Button = ({ animate = true, children, onClick, type, ...rest }: ButtonProps) => {
     return (
       <PrimaryButton onClick={onClick} type={type} {...rest} animate={animate}>
         {children}
       </PrimaryButton>
     );
 }