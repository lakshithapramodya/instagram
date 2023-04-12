import React from "react";
import { signIn } from "next-auth/react";

function signInGoogle() {
  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}

export default signInGoogle;
