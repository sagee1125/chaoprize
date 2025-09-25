import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header, ScrollTopButton } from "./components";
import { useSettings } from "./context";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isPC } = useSettings();

  return (
    <div
      style={{
        ...layoutStyle,
        ...(isPC ? pcStyle : mobileStyle),
      }}
    >
      <Header />
      <main style={contentStyle} id="main-menu">
        {children}
        <ScrollTopButton />
      </main>
      <Footer />
    </div>
  );
};

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
};

const pcStyle: React.CSSProperties = {
  minWidth: "1440px",
  width: "100%",
};
const mobileStyle: React.CSSProperties = {
  maxWidth: "1440px",
  width: "100%",
  overflow: "hidden",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
};
