import React, { useState } from "react";

const Nav: React.FC = () => {
  return (
    <nav className="text-main !font-en space-x-6 w-full">
      <a href="#" className="hover:underline hover:underline-offset-4">
        INTRODUCTION
      </a>
      <a href="#" className="hover:underline hover:underline-offset-4">
        AWARDS AND LAUREATES
      </a>
      <a href="#" className="hover:underline hover:underline-offset-4">
        NOMINATION
      </a>
      <a href="#" className="hover:underline hover:underline-offset-4">
        MEDIA
      </a>
      <a href="#" className="hover:underline hover:underline-offset-4">
        CONTACT US
      </a>
    </nav>
  );
};

export default Nav;
