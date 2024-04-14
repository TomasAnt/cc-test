import React, { forwardRef } from "react";

import { ButtonVariants } from "../../typings/GlobalTypes";
import { StyledButton } from "./button.styled";

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof StyledButton> {
  $variant: ButtonVariants;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ $variant, children, ...props }, ref) => (
    <StyledButton ref={ref} $variant={$variant} {...props}>
      {children}
    </StyledButton>
  )
);

Button.displayName = "Button";

export default Button;
