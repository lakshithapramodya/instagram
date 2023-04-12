import React from "react";
import { signIn, getProviders } from "next-auth/react";
import Header from "../../components/Header";

function signInGoogle({ providers }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
          alt=""
        />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 rounded-lg bg-blue-500 text-white"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
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
