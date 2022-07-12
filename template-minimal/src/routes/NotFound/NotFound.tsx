import React from "react";
import { Link } from "react-router-dom";
import { Ghost } from "@hitachivantara/uikit-react-icons";
import { HvEmptyState, HvTypography } from "@hitachivantara/uikit-react-core";

export type NotFoundProps = Record<string, never>;

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <HvEmptyState
      title="This page can't be displayed"
      icon={<Ghost role="presentation" />}
      message={<HvTypography>404 Not Found</HvTypography>}
      action={
        <HvTypography>
          Go back to <Link to="/">the homepage</Link>
        </HvTypography>
      }
    />
  );
};

export default NotFound;
