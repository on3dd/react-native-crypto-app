import { ElementType } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/Navigation';

type NavigationProps = StackScreenProps<RootStackParamList, 'Home' | 'Coin'>;

export default interface LayoutProps extends NavigationProps {
  component: ElementType;
  heading?: string;
  icon?: string;
  onPress?: (args: any) => void;
}
