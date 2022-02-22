import { CSSProperties, SetStateAction } from 'react';

export interface IStyledInput {
  customStyle?: CSSProperties;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  isReadOnly: boolean;
}

export interface IInput {
  value: any;
  type: string;
  color?: string;
  width?: string;
  height?: string;
  name?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  placeholder?: string;
  borderRadius?: string;
  isReadOnly?: boolean;
  isAutoFocus?: boolean;
  backgroundColor?: string;
  maxLength?:number;
  handleChange?: (e: any) => void | SetStateAction<any>;
  customStyle?: CSSProperties;
  handleKeyPress?:(e: any) => void | SetStateAction<any>
}