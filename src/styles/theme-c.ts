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

export const vendorC = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ABCDEF',
    },
    secondary: {
      main: '#DCS21A',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#DCS21A',
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
  },
  custom: {
    SharedComponent: dynamic(() =>
      import('../components/shared-component-ac').then(
        (module) => module.SharedComponent
      )
    ),
    ExclusiveVendorCComponent: dynamic(() =>
      import('../components/exclusive-vendor-c-component').then(
        (module) => module.ExclusiveVendorCComponent
      )
    ),
  },
});
