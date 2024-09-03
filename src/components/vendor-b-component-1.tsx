import React from 'react';
import { Button } from '@mui/material';

export const VendorBComponent1 = () => {
  return (
    <div className="product-card">
      <h3>Product Name</h3>
      <p>Product Description</p>
      <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </div>
  );
};
