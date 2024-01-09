import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: Boolean;
  secondary?: Boolean;
}

export default function Button({ primary, secondary, ...rest }: ButtonProps) {
  return <button {...rest} className="mx-2 my-1" />;
}
