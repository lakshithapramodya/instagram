import React from "react";
import { signIn, getProviders } from "next-auth/react";

function signInGoogle({ providers }) {
  return (
    <div>
      <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders(context);
  return {
    props: { providers },
  };
}

export default signInGoogle;
