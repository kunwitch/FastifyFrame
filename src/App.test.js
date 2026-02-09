// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FastifyFrame title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FastifyFrame/i);
    expect(titleElement).toBeInTheDocument();
});
