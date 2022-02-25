import { CSSProperties, ReactNode } from 'react';

export interface IStyledButton {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  backgroundColor?: string;
  customStyle?: CSSProperties;
}

export interface IButton extends IStyledButton {
  children: ReactNode;
  handleClick?: () => void | Promise<void>;
}
