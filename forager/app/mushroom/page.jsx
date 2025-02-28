import Link from 'next/link';
import NavBar from '../../components/NavBar';
import React from 'react';
import { mushrooms } from '@/data/development';

export default function MushroomPage() {
  return (
    <div className="page">
      <h1>Mushroom Page</h1>
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>
      <NavBar />
    </div>
  );
}
