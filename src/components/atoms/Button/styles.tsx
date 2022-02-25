import styled from 'styled-components';
import * as M from 'styles/StyleModule';
import { IStyledButton } from 'components/atoms/Button/type';

export const StyledButton = styled.button<IStyledButton>`
  ${M.dragNone};
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : props.theme.borderRadius};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.mainColor};
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  width: ${(props) => (props.width ? props.width : '396px')};
  height: ${(props) => (props.height ? props.height : '42px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  outline: 0;
  border: none;
  &:focus {
    border: none !important;
    outline: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
