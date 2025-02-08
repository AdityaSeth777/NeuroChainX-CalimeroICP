'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="neural-network">
        <div className="neural-layer input-layer">
          {[...Array(5)].map((_, i) => (
            <div key={`input-${i}`} className="neuron">
              <div className="synapse" />
            </div>
          ))}
        </div>
        <div className="neural-layer hidden-layer">
          {[...Array(7)].map((_, i) => (
            <div key={`hidden-${i}`} className="neuron">
              <div className="synapse" />
            </div>
          ))}
        </div>
        <div className="neural-layer output-layer">
          {[...Array(3)].map((_, i) => (
            <div key={`output-${i}`} className="neuron" />
          ))}
        </div>
      </div>
      <div className="loading-text">Initializing AI Marketplace</div>
    </div>
  );
}