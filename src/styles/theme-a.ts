import { createTheme } from '@mui/material/styles';
import '@mui/material/styles';
import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';

// Define a type for the custom components
interface CustomComponents {
  Component1: ComponentType<{ text: string }>;
  SharedComponent: ComponentType<any>;
  ExclusiveVendorCComponent?: ComponentType<any>;
}

// Extend MUI theme to include your custom components
declare module '@mui/material/styles' {
  interface Theme {
    custom?: Partial<CustomComponents>;
  }

  interface ThemeOptions {
    custom?: Partial<CustomComponents>;
  }
}
export const vendorA = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  custom: {
    Component1: dynamic(() =>
      import('../components/vendor-a-component-1').then(
        (module) => module.VendorAComponent1
      )
    ),
    SharedComponent: dynamic(() =>
      import('../components/shared-component-ac').then(
        (module) => module.SharedComponent
      )
    ),
  },
});
