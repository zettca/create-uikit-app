import React from "react";
import { Outlet } from "react-router-dom";
import { HvContainer, HvTypography } from "@hitachivantara/uikit-react-core";

export type HomeProps = Record<string, never>;

const Home: React.FC<HomeProps> = () => {
  const style: React.CSSProperties = {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <HvContainer style={style}>
      <HvTypography variant="3xlTitle">⚛️ UI Kit React ✨</HvTypography>
      <div style={{ textAlign: "center" }}>
        <HvTypography variant="sTitle">
          Edit <code>Home.tsx</code> and save to start developing.
        </HvTypography>
        <HvTypography variant="xxsTitle">
          Navigate to a sub-route to view its content nested content below.
        </HvTypography>
      </div>

      <Outlet />
    </HvContainer>
  );
};

export default Home;
