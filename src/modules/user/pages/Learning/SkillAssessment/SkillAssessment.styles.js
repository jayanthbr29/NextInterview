import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const AssessmentContainer = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: relative;

  .sillheading {
    font-family: "DM Sans";
    font-size: 24px;
  }
`;

export const QuestionWrapper = styled.div`
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #f6fef6;
  font-size: 18px;

  span {
    display: flex;
    width: 30px;
    height: 30px;
    background-color: black;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Option = styled.div`
  margin: 5px 10px;
  font-size: 18px;
  padding: 5px;

  input {
    margin-right: 10px;
    accent-color: #2290ac;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  background-color: ${theme.colors.bluetext}45;
  color: ${theme.colors.white};
  padding: 8px 20px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${theme.colors.bluetext};
    color: ${theme.colors.white};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
