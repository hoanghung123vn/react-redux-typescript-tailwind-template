import React from "react";

function Layout(props: { children?: React.ReactNode }) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default Layout;
