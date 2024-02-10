import styled from "styled-components";
const StyledButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  margin: auto;
  margin-top: 10px;
  border: 1px solid transparent;
  &:hover {
    background-color: #5c674b;
    color: white;
  }
`;

interface SubmitFormButtonProps {
  label: string;
  color: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
export const LoginButton = styled(StyledButton)`
  margin-top: 30px;
  width: 200px;
  margin-bottom: 30px;
  &:hover {
    background-color: #588849;
  }

`;

const SubmitFormButton: React.FC<SubmitFormButtonProps> = ({
  label,
  color,
  type,
  disabled,
}) => {
  return (
    <StyledButton color={color} type={type} disabled={disabled}>
      {label}{" "}
    </StyledButton>
  );
};
export default SubmitFormButton;
