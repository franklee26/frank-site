import React from "react";
import "../src/./application.css";

const User = props => {
  return (
    <div>
      <h1 align="center">User profile id: {props.id}</h1>
      <h2 align="center">
        This is a user page for {props.name} with email {props.email}.
      </h2>
    </div>
  );
};

export default User;
