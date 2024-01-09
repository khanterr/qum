"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage("");
    }
    setEmail(e.target.value);
  }, []);
  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (errorMessage) {
        setErrorMessage("");
      }
      setPassword(e.target.value);
    },
    []
  );
  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="text-2xl">Sign Up</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Input name="email" maxLength={64} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              maxLength={16}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button secondary>Signup</Button>
          </div>
          <label>{errorMessage}</label>
        </form>
      </div>
      <div></div>
    </div>
  );
}
