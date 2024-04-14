"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/actions";
import { SpinnerIcon } from "@/lib/icons";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="w-full p-4 rounded-lg max-w-sm bg-secondary/10 shadow-md"
    >
      <div className="ct-flex-col items-center gap-0 mb-6">
        <h1 className="">Movie Library</h1>
        <p>a technical test for A-Safe Digital.</p>
      </div>
      <div className="ct-flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="peer bg-transparent block w-full rounded-lg p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="email"
            type="email"
            name="email"
            placeholder="user@nextmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="peer bg-transparent block w-full rounded-lg p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="password"
            type="password"
            name="password"
            placeholder="123456"
            required
            minLength={6}
          />
        </div>
        <LoginButton />
      </div>
      <div
        className={`${
          !errorMessage ? "hidden" : null
        } flex h-8 items-end space-x-1`}
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  const buttonValue = pending ? <SpinnerIcon /> : "Log in";

  return (
    <button
      className="w-full text-white text-center bg-accent rounded-lg p-1.5 flex justify-center"
      aria-disabled={pending}
    >
      {buttonValue}
    </button>
  );
}
