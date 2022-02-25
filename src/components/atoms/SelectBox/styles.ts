import styled from 'styled-components';
import { IStyledSelectBox } from 'components/atoms/SelectBox/type';
import * as M from 'styles/StyleModule';

export const StyledSelectBox = styled.select<IStyledSelectBox>`
  ${M.apperanceNone};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : props.theme.borderRadius};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'trnasparent'};
  border: 2px solid ${(props) => props.theme.colors.gray};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => (props.width ? props.width : '392px')};
  height: ${(props) => (props.height ? props.height : '42px')};
  padding: ${(props) => (props.padding ? props.padding : '12px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.875rem')};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  transition: 0.3s;
  background: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23C8CED3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
    no-repeat 95% center;
  min-width: 120px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.mainColor};
  }

  &:disabled {
    border: none;
    background-color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
  }
`;
