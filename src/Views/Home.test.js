import { render, screen } from '@testing-library/react';

import Home from './Home/Home';
import userEvent from '@testing-library/user-event';

test('renders welcome home on home page', () => {
  render(<Home />);

  const welcome = screen.getByText(/welcome home/i);
  expect(welcome).toBeInTheDocument();
});

test('select box works', async () => {
  render(<Home />);

  const dropdown = await screen.findByRole('combobox');
  userEvent.selectOptions(dropdown, 'Villagers');
  expect(screen.getByRole('option', { name: /villagers/i }).selected).toBe(true);
});
