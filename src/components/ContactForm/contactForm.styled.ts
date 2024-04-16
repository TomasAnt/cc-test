import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 38px 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto", sans-serif;
`;

export const Headline = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: ${({ theme }) => theme.lineHeights.h3};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacings.s16};
  align-items: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: red; /* Change border color on focus */
    &::placeholder {
      transform: translateY(-14px); /* Move placeholder up slightly on focus */
      font-size: 12px;
    }
  }

  &::placeholder {
    font-size: 14px; /* Adjust font size of placeholder */
    transition: transform 0.3s ease-in-out;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  padding: 11px 0 0 10px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("./arrowDown.svg") no-repeat;
  background-position: right 17px center;
  background-size: 12px;
  font-size: 12px;
  line-height: 20px;

  .state-select {
    display: none;
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  pointer-events: none;
  color: #999;
  font-size: 12px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OneField = styled.div`
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  flex-direction: column;
`;

export const TwoFields = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ThreeFields = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.s16};
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #3362ab;
  background: #f0f5ff;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s16};

  span {
    white-space: nowrap;
  }
`;

export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dividers};
  padding: ${({ theme }) => theme.spacings.s12};
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

export const Cards = styled.div`
  display: flex;
  gap: 3px;
`;

export const Center = styled.div`
  display: flex;
  place-content: center;
  margin-top: ${({ theme }) => theme.spacings.s16};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  color: ${({ theme }) => theme.colors.inputColor};
`;

///////////////////////////////////////////////////////////////////////
///////////////////// Cart Styles /////////////////////////////////////
///////////////////////////////////////////////////////////////////////

export const CartContainer = styled.section`
  flex: 1;
  background-color: #f5f5f5;
  padding: 16px 38px;
  max-width: 600px;
  font-family: "Roboto", sans-serif;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: 16px;
  gap: 16px;
  position: relative;

  width: 100%;

  img {
    height: 64px;
    width: 64px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #fff;
  }
`;

export const CartCount = styled.div`
  position: absolute;
  background-color: #5c5c5c;
  color: #fff;
  display: flex;
  left: 50px;
  top: -12px;
  min-height: 30px;
  min-width: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SubtotalPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const SubtotalTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

export const TotalTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  line-height: ${({ theme }) => theme.lineHeights.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const TotalPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  line-height: ${({ theme }) => theme.lineHeights.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Why = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const WhyTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: flex-start;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
`;

export const BoxTitle = styled.p`
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const BoxParagraph = styled.p`
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
