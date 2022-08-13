import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ defaultValue, onEditComplete }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.width = "1000px";
    ref.current.value = defaultValue;

    ref.current.onblur = onEditComplete;
    ref.current.onkeypress = (e) => {
      if (e.key === "Enter") onEditComplete(e);
    };
  }, []);

  return (
    <InputWrapper>
      <StyledText ref={ref} defaultValue={defaultValue} />
    </InputWrapper>
  );
};
export default Input;

//このサイズ指定必要？
const InputWrapper = styled.div`
  position: relative;
  width: 232px;
  height: 20px;
`;

const StyledText = styled.input`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  background-color: ${COLOR.BLACK};
  padding: 0px 4px;
  border: none;
  border-radius: 2px;
`;
