import { render, screen } from '@testing-library/react';
import React from 'react';
import Hello from '../../../../app/service_student_user/Hello';

describe('App', () => {
    test('renders App component', () => {
        render(<Hello />);

        expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
});
