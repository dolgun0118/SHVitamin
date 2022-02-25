import { StyledButton } from './styles';
import { IButton } from 'components/atoms/Button/type';
import { CSSProperties, memo, useMemo } from 'react';

const Button = memo((props:IButton) => {
  const {
    color,
    width,
    height,
    children,
    fontSize,
    customStyle,
    borderRadius,
    backgroundColor,
    handleClick,
  } = props;

  const style: CSSProperties = useMemo(() => {
    return {
      ...customStyle,
      width,
      height,
      color,
      fontSize,
      borderRadius,
      backgroundColor,
    };
  }, [
    customStyle,
    width,
    height,
    color,
    fontSize,
    borderRadius,
    backgroundColor,
  ]);
  
  return (
    <StyledButton style={style} onClick={handleClick}>
      {children}
    </StyledButton>
  );
});

export default memo(Button);
