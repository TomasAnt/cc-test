// Cart.tsx
import React from "react";
import styled from "styled-components";

const CartContainer = styled.aside`
  flex: 1;
  background-color: #f5f5f5; // Grey background
  padding: 2rem;
  max-width: 600px;
`;

const ProductInfo = styled.div`
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Subtotal = styled.div`
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Total = styled.div`
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const GuaranteeSection = styled.section`
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const GuaranteeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const GuaranteeText = styled.p`
  margin-left: 0.5rem;
`;

// Types for TypeScript
type Product = {
  name: string;
  price: number;
};

type CartProps = {
  products: Product[];
  total: number;
};

const Cart: React.FC<CartProps> = ({ products, total }) => {
  return (
    <CartContainer>
      <ProductInfo>
        {products.map((product, index) => (
          <div key={index}>
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
          </div>
        ))}
      </ProductInfo>

      <Subtotal>
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </Subtotal>

      <Total>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </Total>

      <GuaranteeSection>
        <h3>Why Choose LogoIpsum</h3>
        <GuaranteeItem>
          <img src="/path-to-your-guarantee-icon.png" alt="Guarantee" />
          <GuaranteeText>90-Day Money Back Guarantee</GuaranteeText>
        </GuaranteeItem>
        {/* ...other guarantee items */}
        <GuaranteeItem>
          <img src="/path-to-your-service-icon.png" alt="Service" />
          <GuaranteeText>Professional Customer Support</GuaranteeText>
        </GuaranteeItem>
      </GuaranteeSection>
    </CartContainer>
  );
};

export default Cart;
