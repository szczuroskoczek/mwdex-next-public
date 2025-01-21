import { Link } from "@remix-run/react";
import React from "react";

export const GoBackHeader: React.FC<{
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ onClick }) => {
  return (
    <Link
      to="/"
      prefetch="render"
      className="absolute top-0 left-0 right-0 z-50 h-16 flex items-center justify-center 
          bg-gradient-to-r from-white/5 via-white/10 to-white/5 
          backdrop-blur-md shadow-lg 
          transition-all duration-300 ease-out
          hover:bg-white/10 hover:shadow-xl group"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl transform transition-transform duration-300 group-hover:-translate-x-1 text-white">
          ←
        </span>
        <span className="text-white/80 font-light tracking-wide transform transition-opacity duration-300 opacity-20 md:opacity-0 group-hover:opacity-100">
          Powrót
        </span>
      </div>
    </Link>
  );
};
