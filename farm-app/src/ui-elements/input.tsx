import styled from "styled-components";
import { InputProps } from "../components/statics/interfaces";

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

const Input = ({
  onChange,
  onBlur,
  value,
  placeholder,
  name,
  type = 'text',
}: InputProps) => {
  return (
    <StyledInput
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
};

export default Input;
