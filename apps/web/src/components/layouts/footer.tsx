'use client';

import * as React from 'react';
import Container from '../ui/container';
import Info from '../info';

export function Footer() {
  return (
    <>
      <Container className="bg-white">
        <div className="max-w-screen-lg mx-auto ">
          <Info />
        </div>
      </Container>
      <footer className="text-center p-10 bg-gray-800 text-primary-600">
        <p>Paroki Kristus Raja Barong Tongkok. 2024</p>
      </footer>
    </>
  );
}
