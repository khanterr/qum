import { InputHTMLAttributes } from "react";

export default function Button(props: InputHTMLAttributes<HTMLInputElement>) {
  return <button {...props} className="mx-2 my-1 px-5 py-2 rounded" />;
}
