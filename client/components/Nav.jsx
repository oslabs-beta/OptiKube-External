import React from "react";

const Nav = () => {
    return (
        <div className="navbar">
          <nav>
            <a href="/" className="logo">OptiKube</a>
            <div className="menu">
              <a href="#team">Team</a>
              <a href="http://github.com">GitHub</a>
            </div>
          </nav>
        </div>
    )
}

export default Nav;