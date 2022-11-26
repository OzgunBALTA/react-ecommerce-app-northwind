import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h3>Profile</h3>
      <br />
      <br />
      {
        <ul>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.claim}</li>
        </ul>
      }
    </div>
  );
}
