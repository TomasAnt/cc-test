import styled from "styled-components";

export const Container = styled.section`
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
