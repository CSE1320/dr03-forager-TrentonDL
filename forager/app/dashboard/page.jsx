import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import React from 'react';
import { mushrooms } from '@/data/development';

export default function DashboardPage() {
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <NavBar />
    </div>
  );
}
