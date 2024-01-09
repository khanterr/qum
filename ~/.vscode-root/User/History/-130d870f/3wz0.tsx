import { InputHTMLAttributes, memo } from "react";

const Input = memo(function (props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="mx-2 my-1 px-5 py-2 outline-none border-black border-2"
    />
  );
});

export default Input;
