import styled from 'styled-components';
import { IStyledInput } from 'types/Input.type';

export const StyledInput = styled.input<IStyledInput>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : props.theme.borderRadius};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.isReadOnly
      ? props.theme.colors.gray
      : 'transparent'};
  border: 2px solid ${(props) => props.theme.colors.gray};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => (props.width ? props.width : '396px')};
  height: ${(props) => (props.height ? props.height : '42px')};
  padding: ${(props) => (props.padding ? props.padding : '12px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  transition: 0.3s;
  &::placeholder {
    font-size: 0.875rem;
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.colors.mainColor};
  }
`;
