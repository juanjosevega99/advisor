import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { CreateQuote } from './CreateQuote';

jest.mock('../../firebase/client', () => ({
  addQuote: jest.fn(),
}));

describe('CreateQuote Component', () => {
  test('renders input fields and save button', () => {
    render(<CreateQuote addNewQuote={() => {}} />);
    expect(
      screen.getByPlaceholderText('Add your quote here')
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('author here')).toBeInTheDocument();
    expect(screen.getByText('save')).toBeInTheDocument();
  });

  test('displays error when fields are empty and save is clicked', async () => {
    render(<CreateQuote addNewQuote={() => {}} />);
    fireEvent.click(screen.getByText('save'));
    await waitFor(() => {
      expect(
        screen.getByText('Please enter both a quote and an author.')
      ).toBeInTheDocument();
    });
  });
  
  test('inputs should update on change', () => {
    render(<CreateQuote addNewQuote={() => {}} />);

    const quoteInput = screen.getByPlaceholderText('Add your quote here') as HTMLInputElement;
    const authorInput = screen.getByPlaceholderText('author here') as HTMLInputElement;

    fireEvent.change(quoteInput, { target: { value: 'Test Quote' } });
    fireEvent.change(authorInput, { target: { value: 'Test Author' } });

    expect(quoteInput.value).toBe('Test Quote');
    expect(authorInput.value).toBe('Test Author');
  });
});
