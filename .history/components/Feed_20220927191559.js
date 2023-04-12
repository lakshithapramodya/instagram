import React, { useState } from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession, signIn, signOut } from "next-auth/react";

function Feed() {
  const profile = {
    profileUrl:
      "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/248527317_4183867555076383_6699299229043078899_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W5cZLJz3rHoAX8NXSyD&_nc_ht=scontent-sin6-1.xx&oh=00_AT9j9UYlLEvE62eCH6J_vj2uwWqKTtT3pt5EV8S4nxxUKg&oe=632E04A4",
    username: "lakshitha.pramodya",
    name: "Lakshitha Pramodya",
  };

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

      <section className="column-span-1">
        <div className="fixed">
          <MiniProfile
            profileUrl={profile.profileUrl}
            username={profile.username}
            name={profile.name}
          />

          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
