import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Buy-N-Sell. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
