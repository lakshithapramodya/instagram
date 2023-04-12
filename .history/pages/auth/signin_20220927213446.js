import React from "react";
import { signIn as signInProvider } from "next-auth/react";

function signIn() {
  return (
    <button onClick={() => signIn as signInProvider("google")}>Sign in with Google</button>
  );
}

export default signIn;
