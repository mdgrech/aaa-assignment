import React from "react";
import Image from "next/image";
import "./results.css"

function Results({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
            <Image
              src={
                user.profile_pic_url
                  ? `/api/proxy-image?url=${encodeURIComponent(
                      user.profile_pic_url
                    )}`
                  : "/fallback-avatar.png"
              }
              alt={`${user.username}'s profile`}
              width={100}
              height={100}
            />
            <p>Full name: {user.full_name}</p>
            <p>Username: {user.username}</p>
        </li>
      ))}
    </ul>
  );
}

export default Results;
