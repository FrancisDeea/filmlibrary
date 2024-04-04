"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/actions";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="max-w-sm">
      <div className="flex-1 rounded-lg bg-gray-800 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-500 py-[9px] pl-10 text-sm outline-2"
                id="email"
                type="email"
                name="email"
                placeholder="user@nextmail.com"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-500 py-[9px] pl-10 text-sm outline-2"
                id="password"
                type="password"
                name="password"
                placeholder="123456"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mt-4 w-full bg-gray-900 p-2" aria-disabled={pending}>
      Log in
    </button>
  );
}
