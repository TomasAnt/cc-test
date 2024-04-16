import { products } from "../../../config";

import React from "react";
import {
  Box,
  BoxParagraph,
  BoxTitle,
  CartCount,
  CartContainer,
  Content,
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
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );
  return (
    <CartContainer>
      {products.map((product) => (
        <Product key={product.id}>
          <ImageContainer>
            <img src={product.imageUrl} alt={product.title} />
            <CartCount>{product.count}</CartCount>
            <Title>{product.title}</Title>
          </ImageContainer>
          <Price>
            {product.displayMode === "each"
              ? `$${product.price.toFixed(2)}/each`
              : `$${(product.price * product.count).toFixed(2)}`}
          </Price>
        </Product>
      ))}
      <Subtotal>
        <SubtotalTitle>Subtotal</SubtotalTitle>
        <SubtotalPrice>${totalPrice.toFixed(2)}</SubtotalPrice>
      </Subtotal>
      <Total>
        <TotalTitle>Total</TotalTitle>
        <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
      </Total>
      <Why>
        <Separator />
        <WhyTitle>Why Choose Logoipsum</WhyTitle>
        <Separator />
      </Why>
      <Content>
        <img src="./cashbackDesktop.svg" alt="Cash back" />
        <Box>
          <BoxTitle>90 Day Money Back Guarantee</BoxTitle>
          <BoxParagraph>
            We love our products and we're confident you will too! If you're not
            in love with your LogoIpsum product, our easy return and refund
            policy is designed to make things as easy as possible for you.
          </BoxParagraph>
        </Box>
      </Content>
      <Content>
        <img src="./ratingDesktop.svg" alt="Cash back" />
        <Box>
          <BoxTitle>Over 75,000+ Happy Customer</BoxTitle>
          <BoxParagraph>
            Everyone that tries LogoIpsum says it’s a must-have. We invest a lot
            of love and care into making our products, so you can enjoy seeing
            results when using it.
          </BoxParagraph>
        </Box>
      </Content>
      <Content>
        <img src="./customerServiceMobile.svg" alt="Cash back" />
        <Box>
          <BoxTitle>Professional Customer Support</BoxTitle>
          <BoxParagraph>
            Our customer service works 24/7 for your satisfaction. Feel free to
            reach out to us anytime.
          </BoxParagraph>
        </Box>
      </Content>
    </CartContainer>
  );
};

export default Cart;
