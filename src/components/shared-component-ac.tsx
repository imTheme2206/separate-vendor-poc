import React from 'react';
import { useVendor } from '../utils/vendor';

export const SharedComponent = () => {
  const { vendor } = useVendor();

  return (
    <div className="bg-primary bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full pl-10">
      <h1 className="text-3xl font-bold text-secondary mb-4">
        Welcome to the Shared Component!
      </h1>
      <p className="text-secondary">This is a simple hero component.</p>
      <p className="text-secondary">Vendor: {vendor}</p>

      {vendor === 'A' && (
        <div>
          <div className="text-primary mt-4">
            <h2 className="text-xl font-semibold">Typography</h2>
            <p className="text-secondary">This is a typography example.</p>
          </div>
        </div>
      )}

      {vendor === 'C' && (
        <div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-black p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p className="text-secondary">This is the content of card 1.</p>
            </div>
            <div className="bg-black p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Card 2</h2>
              <p className="text-secondary">This is the content of card 2.</p>
            </div>
            <div className="bg-black p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Card 3</h2>
              <p className="text-secondary">This is the content of card 3.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
