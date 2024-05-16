import React from "react";

const Nav = () => {
  return (
    <div className="bg-black text-white">
      <nav className="flex justify-between items-center p-4">
        <a href="/" className="text-xl font-bold no-underline text-white">OptiKube</a>
        <div className="flex gap-4">
          <a href="#features" className="no-underline text-white hover:underline">Features</a>
          <a href="#team" className="no-underline text-white hover:underline">Team</a>
          <a href="http://github.com/OptiKube" target='_blank' className="no-underline text-white hover:underline">GitHub</a>
        </div>
      </nav>
    </div>
)
}

export default Nav;