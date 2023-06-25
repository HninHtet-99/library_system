import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 h-48 flex justify-center items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-white text-3xl">Welcom from my library</h1>
        <p className="text-gray-500 text-sm">
          A place where you can store and manage your books.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
