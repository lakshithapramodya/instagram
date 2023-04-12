import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Suggestion from "./Suggestion";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map(() => ({
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
    <div>
      <div className="flex justify-between px-10 pt-4">
        <h1 className="text-sm text-gray-400 font-semibold">
          Suggestions For You
        </h1>
        <button className="text-xs text-blue-400">See All</button>
      </div>
      {suggestions.map((profile) => (
        <Suggestion username={profile.username} avatar={profile.avatar} />
      ))}
    </div>
  );
}

export default Suggestions;
