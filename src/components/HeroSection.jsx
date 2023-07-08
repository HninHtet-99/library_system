import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-48 flex justify-center items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-white text-3xl">Welcom from my library</h1>
        <p className="text-gray-300 text-sm">
          A place where you can store and manage your books.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
