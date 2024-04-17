import { useState } from "react";
import { products } from "../../../config";

import {
  Product,
  ImageContainer,
  CartCount,
  Title,
  Price,
  Subtotal,
  SubtotalTitle,
  SubtotalPrice,
  Total,
  TotalTitle,
  TotalPrice,
  ToggleButton,
  ContentArea,
} from "./cartSection.styled";
import useIsMobile from "../../hooks/useIsMobile";

const CartSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <ToggleButton onClick={toggleOpen} type="button">
          <div>
            Order overview
            {isOpen ? (
              <img src="./arrowUp.svg" alt="Arrow Up" />
            ) : (
              <img src="./arrowDown.svg" alt="Arrow Down" />
            )}
          </div>
          <div> ${totalPrice.toFixed(2)}</div>
        </ToggleButton>
      )}
      <ContentArea isOpen={isOpen} isMobile={isMobile}>
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
      </ContentArea>
    </>
  );
};

export default CartSection;
