import { ChangeEvent, CSSProperties } from 'react';

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

export interface ISelectBox extends IStyledSelectBox {
  items: ISelectBoxItem[];
  defaultValue?: string | number;
  value: number;
  isDisabled?: boolean;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISelectBoxItem {
  value: number;
  name: string;
}
 