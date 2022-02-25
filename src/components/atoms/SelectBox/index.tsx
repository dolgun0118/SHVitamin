import { memo } from 'react';
import { StyledSelectBox } from './styles';
import { ISelectBox } from 'components/atoms/SelectBox/type';

const SelectBox = memo(({
  items,
  handleChange,
  width,
  backgroundColor,
  margin,
  padding,
  height,
  borderRadius,
  fontSize,
  color,
  customStyle,
  defaultValue,
  value,
  isDisabled = false,
}: ISelectBox) => {
  const style = {
    ...customStyle,
    color,
    backgroundColor,
    margin,
    padding,
    fontSize,
    borderRadius,
    height,
    width,
  };

  return (
    <StyledSelectBox
      onChange={handleChange}
      style={style}
      defaultValue={defaultValue}
      disabled={isDisabled}
      value={value}
    >
      {items.map((item) =>
        // value가 -99면 hidden처리
        item.value === -99 ? (
          <option key={item.name} value={item.value} hidden>
            {item.name}
          </option>
        ) : (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ),
      )}
    </StyledSelectBox>
  );
});

export default memo(SelectBox);
