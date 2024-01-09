"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { validateEmail, validatePassword } from "@/utils/validate";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage([]);
    }
    setEmail(e.target.value);
  }, []);
  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (errorMessage) {
        setErrorMessage([]);
      }
      setPassword(e.target.value);
    },
    []
  );
  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const correctEmail = validateEmail(email);
    const correctPassword = validatePassword(password);
    if (correctEmail && correctPassword) {
      return;
    }
    if (!correctEmail) {
      setErrorMessage((prevErrorMessage) => [
        ...prevErrorMessage,
        "Incorrect email",
      ]);
    }
    if (!correctPassword) {
      setErrorMessage((prevErrorMessage) => [
        ...prevErrorMessage,
        "Incorrect password",
      ]);
    }
    alert(email + " " + password);
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl mb-5">Sign Up</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="min-w-32">
              Email
            </label>
            <Input
              name="email"
              maxLength={64}
              value={email}
              onChange={handleEmailChange}
              disabled={loading}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="min-w-32">
              Password
            </label>
            <Input
              name="password"
              maxLength={16}
              value={password}
              onChange={handlePasswordChange}
              disabled={loading}
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <Button secondary disabled={loading}>
              Signup
            </Button>
          </div>
          {errorMessage.map((msg) => (
            <p key={msg}>{msg}</p>
          ))}
        </form>
      </div>
      <div></div>
    </div>
  );
}
