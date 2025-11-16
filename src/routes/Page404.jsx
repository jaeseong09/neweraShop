// src/routes/Page404.jsx
import React from "react";
import "./Page404.css";

export default function Page404() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/">Go To Homepage</a>
      </div>
    </div>
  );
}
