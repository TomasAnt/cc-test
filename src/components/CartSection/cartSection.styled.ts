import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px;
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    max-height: 1000px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacings.s16};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const ContentArea = styled.div<{ $isOpen: boolean; $isMobile: boolean }>`
  display: ${(props) => (props.$isMobile && !props.$isOpen ? "none" : "block")};

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    padding: ${({ theme }) => theme.spacings.s16};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.7s
      ease-in-out forwards;
  }
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
  gap: ${({ theme }) => theme.spacings.s16};
  position: relative;

  width: 100%;

  img {
    height: 64px;
    width: 64px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const CartCount = styled.div`
  display: flex;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.paragraphColor};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  left: 50px;
  top: -12px;
  height: 21px;
  width: 21px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-left: auto;
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
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TotalPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  line-height: ${({ theme }) => theme.lineHeights.h4};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const OrderTotal = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const OrderOverview = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.input};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.input};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const MobileOrder = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s8};
`;
