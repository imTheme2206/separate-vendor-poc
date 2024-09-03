// import { useTheme } from '@mui/material';
// import dynamic from 'next/dynamic';

// const VendorAComponent1 = dynamic(() =>
//   import('../vendor-a-component-1').then((module) => module.VendorAComponent1)
// );

// const VendorBComponent1 = dynamic(() =>
//   import('../vendor-b-component-1').then((module) => module.VendorBComponent1)
// );

// const components1 = {
//   VendorAComponent1: VendorAComponent1,
//   VendorBComponent1: VendorBComponent1,
// };

// export const SharedSpaceComponent = () => {
//   const theme = useTheme();

//   const component1 = theme.custom?.component1;

//   if (!component1) {
//     return null;
//   }

//   const Component =
//     components1[component1 as 'VendorAComponent1' | 'VendorBComponent1'];

//   if (!Component) {
//     return null;
//   }

//   return <Component />;
// };

// const SharedComponentAC = dynamic(() =>
//   import('../shared-component-ac').then((module) => module.SharedComponent)
// );

// export const SharedComponent = () => {
//   const { custom } = useTheme();

//   const component2 = custom?.component2;

//   if (!component2) {
//     return null;
//   }

//   return <SharedComponentAC />;
// };

//Save Component inside theme

import { useTheme } from '@mui/material';

export const SharedSpaceComponent = () => {
  const theme = useTheme();

  const Component1 = theme.custom?.Component1;

  if (!Component1) {
    return null;
  }

  return <Component1 text={'test ja'} />;
};

export const SharedComponent = () => {
  const { custom } = useTheme();

  const SharedComponent = custom?.SharedComponent;

  if (!SharedComponent) {
    return null;
  }

  return <SharedComponent />;
};

export const ExclusiveVendorCComponent = () => {
  const { custom } = useTheme();

  const ExclusiveVendorCComponent = custom?.ExclusiveVendorCComponent;

  if (!ExclusiveVendorCComponent) {
    return null;
  }

  return <ExclusiveVendorCComponent />;
};

// export const SharedSpaceComponent = () => {
//   const theme = useTheme();

//   const Component1 = theme.custom?.Component1;

//   if (!Component1) {
//     return null;
//   }

//   return <Component1 text={'test ja'} />;
// };

// export const SharedComponent = () => {
//   const { custom } = useTheme();

//   const SharedComponent = custom?.SharedComponent;

//   if (!SharedComponent) {
//     return null;
//   }

//   return <SharedComponent />;
// };

// export const ExclusiveVendorCComponent = () => {
//   const { custom } = useTheme();

//   const ExclusiveVendorCComponent = custom?.ExclusiveVendorCComponent;

//   if (!ExclusiveVendorCComponent) {
//     return null;
//   }

//   return <ExclusiveVendorCComponent />;
// };
