import { CSSProperties } from 'react';

export interface IStyledButton {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  backgroundColor?: string;
  customStyle?: CSSProperties;
}

export interface IButton {
  width?: string;
  height?: string;
  content: string;
  fontSize?: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  customStyle?: CSSProperties;
  handleClick?: () => void | Promise<void>;
}
