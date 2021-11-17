import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../app/App';

describe('App', () => {
    test('renders App component', () => {
        render(<App />);

        expect(screen.getByText(/esj group!/i)).toBeInTheDocument();
    });
});
