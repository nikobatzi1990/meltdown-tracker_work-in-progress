import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Button from "./Button";

function Header() {
  const { logoutUser, user } = UserAuth();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1>Meltdown Tracker</h1>
      {user && (
        <div>
          <p>Hello, {user.email}! </p>
          <Button
            text="Logout"
            onClick={() => {
              logoutUser();
              navigate("/");
            }}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
