import React from "react";
import { signIn, getProviders } from "next-auth/react";

function signInGoogle() {
  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}

export async function getServerSideProps() => {
  const providers = await getProviders()
}

export default signInGoogle;
