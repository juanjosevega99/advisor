import { render, screen } from '@testing-library/react';
import Notification from './index';

describe('Notification Component', () => {
  test('does not render when message is empty', () => {
    render(<Notification message='' type={null} />);
    const notificationElement = screen.queryByTestId('notification');
    expect(notificationElement).toBeNull();
  });

  test('renders with error style when type is error', () => {
    render(<Notification message='Error occurred' type='error' />);
    const notificationElement = screen.getByText('Error occurred');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveClass('notificationError'); // Replace with actual class name if different
  });
  test('renders with success style when type is success', () => {
    render(<Notification message='Operation successful' type='success' />);
    const notificationElement = screen.getByText('Operation successful');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveClass('notificationSuccess'); // Replace with actual class name if different
  });
});
