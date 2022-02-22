import { StyledInput } from './styles';
import { IInput } from 'types/Input.type';
import { CSSProperties, memo } from 'react';

const Input = memo((props:IInput) => {
  const {
    type,
    value,
    name,
    handleChange,
    placeholder,
    backgroundColor,
    borderRadius,
    color,
    customStyle,
    fontSize,
    height,
    margin,
    padding,
    width,
    maxLength,
    isAutoFocus = false,
    isReadOnly = false,
    handleKeyPress,
  } = props;

  const style: CSSProperties = {
    ...customStyle,
    backgroundColor,
    borderRadius,
    color,
    fontSize,
    height,
    margin,
    padding,
    width,
  };

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      style={style}
      autoFocus={isAutoFocus}
      readOnly={isReadOnly}
      isReadOnly={isReadOnly}
      name={name}
      maxLength={maxLength}
    />
  );
});

export default memo(Input);
