import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";
import Button from "./Button";

function Header(props) {
  const { logoutUser, user } = UserAuth();
  const navigate = useNavigate();
  const { className, text } = props;

  return (
    <header>
      <h1 className={className}>{text}</h1>
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
  className: PropTypes.string,
  text: PropTypes.string,
};

Header.defaultProps = {
  className: "",
  text: "",
};

export default Header;
