import React from 'react';
import { CustomComponents, useCustomComponent } from './method-2-hook';

export const DynamicComponentRenderer: React.FC<{
  componentName: keyof CustomComponents;
  [key: string]: any;
}> = ({ componentName, ...props }) => {
  const Component = useCustomComponent(componentName);

  if (!Component) {
    return null;
  }

  return <Component {...props} text={props.text} />;
};

export const SharedSpaceComponent = () => (
  <DynamicComponentRenderer componentName="Component1" text="test ja" />
);

export const SharedComponent = () => (
  <DynamicComponentRenderer componentName="SharedComponent" />
);

export const ExclusiveVendorCComponent = () => (
  <DynamicComponentRenderer componentName="ExclusiveVendorCComponent" />
);
