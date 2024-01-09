import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: Boolean;
  secondary?: Boolean;
}

const Button = memo(function ({ primary, secondary, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`mx-2 my-1 px-5 py-2 rounded ${
        primary && 'bg-white text-black'
      } ${secondary && 'bg-black text-white'}`}
    />
  );
});

Button.displayName = 'Button';

export default Button;
