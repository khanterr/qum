"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
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
            <Input name="email" maxLength={64} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input name="password" maxLength={16} />
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
