import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="mx-2 my-1 px-5 py-2 rounded" />;
}
