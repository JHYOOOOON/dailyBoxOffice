import React from "react";

const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};
const Footer = () => {
  return (
    <footer>
      <p>Copyright (c) {getYear()}. JHYOON. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
