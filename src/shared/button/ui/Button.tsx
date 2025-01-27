import { FC, memo } from "react";
import { Props } from "../../type";

export const Button: FC<Props> = memo(
  ({ children, onClick, ...otherProps }) => {
    return (
      <Button onClick={onClick} {...otherProps}>
        {children}
      </Button>
    );
  }
);

Button.displayName = "Button";
