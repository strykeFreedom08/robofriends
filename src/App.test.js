import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './components/Card';

test('renders learn react link', () => {
  render(<Card />);
  const imageElement = screen.getByRole('img');
  
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src');
  expect(imageElement.src).not.toBe('');
});
