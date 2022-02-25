import { SetStateAction } from 'react';
import { IStyledInput } from "components/atoms/Input/type";

export interface ILogin extends IStyledInput {
  id?: string;
  password?: string;
  handleChange?: (e: any) => void | SetStateAction<any>;
  handleClick?: () => void | Promise<void>;
  handleKeyPress?: (e: any) => void | SetStateAction<any>;
}
