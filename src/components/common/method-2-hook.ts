import { useTheme } from '@mui/material/styles';
import { ComponentType } from 'react';

export type CustomComponents = {
  Component1: ComponentType<{ text: string }>;
  SharedComponent: ComponentType<any>;
  ExclusiveVendorCComponent?: ComponentType<any>;
};

export const useCustomComponent = (componentName: keyof CustomComponents) => {
  const { custom } = useTheme();
  return custom ? custom[componentName] : null;
};
