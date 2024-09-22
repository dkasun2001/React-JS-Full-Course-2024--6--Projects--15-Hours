import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>This page doesn't exist</h1>
      <Link to={"/receipe-list"}>Back to Recipe List Page</Link>
    </div>
  );
};

export default NotFoundPage;
