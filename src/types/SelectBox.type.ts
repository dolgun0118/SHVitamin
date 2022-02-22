import { ChangeEvent, CSSProperties } from 'react';

export interface ISelectBox {
  items: ISelectBoxItem[];
  borderRadius?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  customStyle?: CSSProperties;
  defaultValue?: string | number;
  value: number;
  isDisabled?: boolean;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISelectBoxItem {
  value: number;
  name: string;
}

export interface IStyledSelectBox {
  borderRadius?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  customStyle?: CSSProperties;
}
