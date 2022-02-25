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
  isReadOnly?: boolean;
}

export interface IInput extends IStyledInput {
  value: any;
  type: string;
  name?: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  maxLength?:number;
  handleChange?: (e: any) => void | SetStateAction<any>;
  handleKeyPress?:(e: any) => void | SetStateAction<any>
}