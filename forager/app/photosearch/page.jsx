'use client';
import NavBar from '../../components/NavBar';
import React, { useEffect, useRef } from 'react';

export default function PhotoSearchPage() {
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file (e.g., display it, upload it, etc.)
      console.log('Selected file:', file);
    }
  };

  return (
    <div className="page">
      <h1>Photo Search Page</h1>
      <NavBar />
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}