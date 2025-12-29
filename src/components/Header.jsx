import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
          <h1 className="text-slate-100 text-lg font-semibold tracking-tight">
            Task Management
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
