import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';
import * as React from 'react';

interface Carousel {
  children: React.ReactNode;
}

// Mock next/font/google and specifically Frank_Ruhl_Libre
vi.mock('next/font/google', () => ({
  Frank_Ruhl_Libre: () => ({
    className: 'mocked-frank-ruhl-libre'
  })
}));

// Mock the Carousel component
vi.mock('@/components/ui/carousel', () => {
  return {
    Carousel: ({ children }: Carousel) => <div>{children}</div>,
    CarouselContent: ({ children }: Carousel) => <div>{children}</div>,
    CarouselItem: ({ children }: Carousel) => <div>{children}</div>
  };
});

describe('Beranda', () => {
  it('should rendered properly', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 2, name: 'Menggenggam dengan kasih' })).toBeDefined();
  });
});
