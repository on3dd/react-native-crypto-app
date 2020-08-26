import { ElementType } from 'react';

// TODO: app navigation types
export default interface LayoutProps {
  component: ElementType;
  heading?: string;
  route?: any;
  navigation?: any;
}
