import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="bg-primary-black">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;