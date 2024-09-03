import { Typography } from '@mui/material';
import React, { lazy, Suspense } from 'react';

export const VendorAComponent1: React.FC<{ text: string }> = (props) => {
  return (
    <div>
      <Typography>{props.text}</Typography>
      <div className="p-3 bg-primary border border-secondary">
        <span>1.</span>
        <span>First Place</span>
      </div>
      <div className="p-3 bg-primary border border-secondary">
        <span>2.</span>
        <span>Second Place</span>
      </div>
      <div className="p-3 bg-primary border border-secondary">
        <span>3.</span>
        <span>Third Place</span>
      </div>
    </div>
  );
};
