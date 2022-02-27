import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

describe('Navigation component', () => {
    it('should render correctly', () => {
        render(<Navigation />)

        const header = screen.getByText('Bonsai.');

        expect(header).toBeInTheDocument();
    })
})