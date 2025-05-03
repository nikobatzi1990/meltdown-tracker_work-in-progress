import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";
import Button from "./Button";

function Header(props) {
  const { logoutUser, user } = UserAuth();
  const navigate = useNavigate();
  const { text } = props;

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1>{text}</h1>
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

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "",
};

export default Header;
