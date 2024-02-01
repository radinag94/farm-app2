import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder?: string;
  type?: string;
  name?: string;
}

const StyledInput = styled.input`
 padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
 `;

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  name,type
}) => {
  return (
    <StyledInput
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
};

export default Input;
