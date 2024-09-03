import '@/styles/globals.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { vendorA } from '@/styles/theme-a';
import { vendorB } from '@/styles/theme-b';
import { vendorC } from '@/styles/theme-c';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const vendor = process.env.NEXT_PUBLIC_VENDOR;

const vendorSelect = (vendor: string) => {
  const vendorThemes = {
    A: vendorA,
    B: vendorB,
    C: vendorC,
  };

  return vendorThemes[vendor as 'A' | 'B' | 'C'] || {};
};

export default function App({ Component, pageProps }: AppProps) {
  const theme = vendorSelect(vendor || '');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
