import React from 'react';
import Hero from '../components/Hero';

export default function Home({ onOpenRegister }) {
  return (
    <main>
      <Hero onOpenRegister={onOpenRegister} />
    </main>
  );
}