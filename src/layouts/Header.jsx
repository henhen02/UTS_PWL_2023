import React from "react";

const Header = ({ title, desc }) => {
  return (
    <header className="w-full p-[30px] flex flex-col gap-[10px]">
      <h1 className="text-6xl font-semibold">{title}</h1>
      <h3 className="text-xl font-medium text-gray-600">{desc}</h3>
    </header>
  );
};

export default Header;
