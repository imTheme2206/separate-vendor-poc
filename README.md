## POC for Separate Component Based on Vendor

## Vendor Declaration

declare vendor name in `.env` file

```
NEXT_PUBLIC_VENDOR=A
```

## Theme & Components

- Separate theme based on vendor (`theme-a.ts`, `theme-b.ts`, `theme-c.ts`)
- Components were separated and import dynamically in `createTheme`.
- Tailwind theme was separated for each vendors

## Usage

- utlizing `DynamicComponentRenderer` and `useCustomComponent` for using a vendor based Component
