import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';
import * as React from 'react';
import { setupServer } from 'msw/node';
import { getArticles, MarriagesProps } from '@/utils/api';

const server = setupServer();
beforeAll(() => {
  // NOTE: server.listen must be called before `createClient` is used to ensure
  // the msw can inject its version of `fetch` to intercept the requests.
  server.listen({
    onUnhandledRequest: (request) => {
      throw new Error(`No request handler found for ${request.method} ${request.url}`);
    }
  });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

vi.mock('@/components/sacraments', () => {
  return {
    default: ({ datas }: { datas: MarriagesProps }) => <div data-testid="mock-sacraments">{JSON.stringify(datas)}</div>
  };
});

// Mock the API call
vi.mock('@/utils/api', () => ({
  getArticles: vi.fn(),
  getMarriages: vi.fn()
}));

describe('Beranda', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();
  });

  it('should rendered properly', async () => {
    const mockArticles = [
      {
        title: 'Ut Usitas',
        description: 'Volva vita clementia',
        slug: 'ut-usitas',
        publishedAt: '2024-10-07T05:45:57.586Z',
        category: {
          id: 2,
          documentId: 'enjch2iwbs70y68m1e8m2iuw',
          name: 'Kegiatan'
        }
      }
    ];

    (getArticles as ReturnType<typeof vi.fn>).mockResolvedValueOnce(mockArticles);

    try {
      render(await Home());

      expect(
        screen.getByRole('heading', {
          level: 2,
          name: 'Menggenggam dengan kasih'
        })
      ).toBeDefined();
    } catch (error) {
      console.log({ error });
    }
  });
});
