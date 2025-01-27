import React, { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  disabled?: boolean;
};
