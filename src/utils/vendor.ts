import React from 'react';
import PropTypes from 'prop-types';

export type VendorList = 'A' | 'B' | 'C';

export const useVendor = () => {
  const vendor = process.env.NEXT_PUBLIC_VENDOR as VendorList;
  const vendorList = ['A', 'B', 'C'];

  return {
    vendor,
    vendorList,
  };
};
