import { ButtonVariants } from "./../../typings/GlobalTypes";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  $variant: ButtonVariants;
}

const defaultButton = css<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textWithBackround};
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.h4};
  letter-spacing: 1.26px;
  padding: 16px 32px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(67, 40, 16, 0.24);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    transition: background-color 0.3s ease-in-out;
  }

  @media ${({ theme }) => theme.media.maxPhone} {
    font-size: ${({ theme }) => theme.fontSizes.input};
    letter-spacing: 0.9px;
    padding: 12px 32px;
  }
`;

const greenButton = css`
  background-color: ${({ theme }) => theme.colors.greenButton};
  color: ${({ theme }) => theme.colors.textWithBackround};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenButtonHover};
  }
`;

const redButton = css`
  background-color: ${({ theme }) => theme.colors.redButton};

  &:hover {
    background-color: ${({ theme }) => theme.colors.redButtonHover};
  }
`;
const blueButton = css`
  background-color: ${({ theme }) => theme.colors.blueButton};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueButtonHover};
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${defaultButton};
  ${(props) => {
    switch (props.$variant) {
      case "green":
        return greenButton;
      case "red":
        return redButton;
      case "blue":
        return blueButton;
      default:
        return defaultButton;
    }
  }};
`;
