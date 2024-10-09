import React from 'react'
import Header from '../header/Header'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      {/* Normal way of navigating */}
      <div
        style={{
          border: "solid 2px",
          padding: "2px",
          paddingBottom: "10px",
        }}
      >
        <h2>Normal way of navigating</h2>
        <button
          onClick={() => navigate("/home/receipe-list")}
          style={{ background: "darkred", color: "white", marginRight: "10px" }}
        >
          Navigate to Recipe List Page
        </button>
        <button
          onClick={() => navigate("/home/comment-list")}
          style={{ background: "darkred", color: "white", marginLeft: "10px" }}
        >
          Navigate to Comment List Page
        </button>
      </div>

      {/* Alternative way of navigating */}
      <div
        style={{
          border: "solid 2px",
          marginTop: "10px",
          padding: "2px",
          paddingBottom: "10px",
        }}
      >
        <h2>Alternative way of navigating</h2>
        <p>
          <Link to={"/home/receipe-list"} style={{ fontSize: "20px" }}>
            Navigate to Recipe List Page
          </Link>
        </p>
        <p>
          <Link to={"/home/comment-list"} style={{ fontSize: "20px" }}>
            Navigate to Comment List Page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Layout