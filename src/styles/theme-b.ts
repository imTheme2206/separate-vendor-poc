import { createTheme } from '@mui/material/styles';
import '@mui/material/styles';
import dynamic from 'next/dynamic';
import React from 'react';

// // Extend the Theme interface to include the custom properties
// declare module '@mui/material/styles' {
//   interface Theme {
//     custom?: {
//       component1?: string;
//     };
//   }

//   // Allow configuration using the `createTheme` function
//   interface ThemeOptions {
//     custom?: {
//       component1?: string;
//     };
//   }
// }

export const vendorB = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
  custom: {
    Component1: dynamic(() =>
      import('../components/vendor-b-component-1').then(
        (module) => module.VendorBComponent1
      )
    ),
  },
});
