import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

it('loads and displays the starting app', async () => {
    render(<App />);
    const method = screen.getByTestId('method');
    expect(method).toHaveTextContent('Request Method:');
});


it('shows loading before starting', async () => {
    render(<App />);
    const submit_result = screen.getByTestId('submit-result');
    expect(submit_result).toHaveTextContent('loading');});