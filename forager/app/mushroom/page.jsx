'use client';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import PageHeader from '../../components/PageHeader';
import Message from '../../components/Message';
import React from 'react';
import { mushrooms } from '@/data/development';

export default function MushroomPage() {
  const mushroom = mushrooms.find(m => m.name === 'Death Cap'); // Example mushroom data

  return (
    <div className="page">
      <PageHeader title="Match Results" />
      <Message type="warning" message="This is a toxic species, proceed with caution." />
      <div className="mushroom-info">
        <img src={mushroom.image} alt={mushroom.alt} className="mushroom-image" />
        <div className="mushroom-details">
          <h2>{mushroom.name}</h2>
          <p><i>{mushroom.scientificName}</i></p>
          <div className="fast-facts">
            <h3>Fast Facts</h3>
            <p>Cap Diameter: {mushroom.capDiameter}</p>
            <p>Gill Color: {mushroom.gillColor}</p>
          </div>
        </div>
      </div>
      <Link href="/comparison">
        <button className="compare-button">Compare</button>
      </Link>
      <div className="similar-matches">
        <h2>Similar Matches</h2>
        <div className="matches-grid">
          {mushrooms.map((mushroom, index) => (
            <div key={index} className="match-card">
              <img src={mushroom.image} alt={mushroom.alt} className="match-image" />
              <p>{mushroom.name}</p>
            </div>
          ))}
        </div>
      </div>
      <NavBar />
    </div>
  );
}
