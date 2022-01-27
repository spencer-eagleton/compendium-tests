import { render, screen } from '@testing-library/react';

import Home from './Home/Home';

test('renders welcome home on home page', () => {
  render(<Home />);

  const welcome = screen.getByText(/welcome home/i);
  expect(welcome).toBeInTheDocument();
});
