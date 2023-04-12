import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map(() => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6  bg-white mt-8 border-gray-200
    border rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story key={session?.user?.userId} username={session?.user?.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.userId}
          username={profile.username}
          img={profile.avatar}
        />
      ))}
    </div>
  );
}
export default Stories;
