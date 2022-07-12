import React from "react";
import { Link, useParams } from "react-router-dom";
import { HvTypography } from "@hitachivantara/uikit-react-core";

export type HomeSubProps = Record<string, never>;

const HomeSub: React.FC<HomeSubProps> = () => {
  const { id } = useParams();

  return (
    <div>
      <HvTypography variant="xsTitle">
        Hello from the <code>{id}</code> sub-route 👋
      </HvTypography>
      <HvTypography variant="xxsTitle">
        <Link to="..">Click here</Link> to go back.
      </HvTypography>
    </div>
  );
};

export default HomeSub;
