import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
    it('should render correctly', () => {
        render(<Button>Click</Button>);

        const button = screen.getByText('Click');

        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle('background-color: #DD6B20');
    })

    it('should add background color', () => {
        render(<Button bgColor='#68D391'>Click</Button>)

        const button = screen.getByText('Click');

        expect(button).toHaveStyle('background-color: #68D391');
    })
})