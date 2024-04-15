// Cart.tsx
import React from "react";
import {
  CartCount,
  Container,
  ImageContainer,
  Price,
  Product,
  Separator,
  Subtotal,
  SubtotalPrice,
  SubtotalTitle,
  Title,
  Total,
  TotalPrice,
  TotalTitle,
  Why,
  WhyTitle,
} from "./cart.styled";

const Cart: React.FC = () => {
  return (
    <Container>
      <Product>
        <ImageContainer>
          <img src="./product.png" alt="Loweskin" />
          <CartCount>3</CartCount>
          <Title>Logoipsum IPL</Title>
        </ImageContainer>
        <Price>$299.97</Price>
      </Product>
      <Subtotal>
        <SubtotalTitle>Subtotal</SubtotalTitle>
        <SubtotalPrice>$299.97</SubtotalPrice>
      </Subtotal>
      <Total>
        <TotalTitle>Total</TotalTitle>
        <TotalPrice>$299.97</TotalPrice>
      </Total>
      <Why>
        <Separator />
        <WhyTitle>Why Choose Logoipsum</WhyTitle>
        <Separator />
      </Why>
    </Container>
  );
};

export default Cart;
