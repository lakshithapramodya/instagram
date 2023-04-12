import React, { useState } from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
     xl:grid-cols-3 xl:max-w-6xl mx-auto"
    >
      <section className="col-span-2">
        <Stories />

        <Posts />
      </section>
      {session && (
        <section className="column-span-1">
          <div className="fixed">
            <MiniProfile />

            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;