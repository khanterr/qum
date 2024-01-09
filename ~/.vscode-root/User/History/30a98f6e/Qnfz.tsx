"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { SyntheticEvent } from "react";

export default function SignUp() {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="text-2xl">Sign Up</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Input name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input name="password" />
          </div>
          <div className="flex items-center justify-center">
            <Button secondary>Signup</Button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}
