import type { Config } from 'tailwindcss';

const vendor = process.env.NEXT_PUBLIC_VENDOR;

const commonConfig: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1A1A1A',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

const config: Config =
  vendor === 'A'
    ? {
        ...commonConfig,
        theme: {
          ...commonConfig.theme,
          extend: {
            ...commonConfig.theme!.extend,
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
              ...commonConfig.theme!.extend!.colors,
              primary: '#1976d2',
              secondary: '#dc004e',
            },
          },
        },
      }
    : vendor === 'B'
    ? {
        ...commonConfig,
        theme: {
          ...commonConfig.theme,
          extend: {
            ...commonConfig.theme!.extend,
            colors: {
              ...commonConfig.theme!.extend!.colors,
              primary: '#ff5722',
              secondary: '#ffeb3b',
            },
          },
        },
      }
    : {
        ...commonConfig,
        theme: {
          ...commonConfig.theme,
          extend: {
            ...commonConfig.theme!.extend,
            colors: {
              ...commonConfig.theme!.extend!.colors,
              primary: '#ABCDEF',
              secondary: '#DCS21A',
            },
          },
        },
      };

export default config;
